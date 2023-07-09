import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { Button } from '../button/Button';
import { useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { SplitButtonBase } from './SplitButtonBase';
import { SplitButtonItem } from './SplitButtonItem';
import { SplitButtonPanel } from './SplitButtonPanel';
import PrimeReact from '../api/Api';

export const SplitButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SplitButtonBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const elementRef = React.useRef(null);
        const defaultButtonRef = React.useRef(null);
        const overlayRef = React.useRef(null);

        const { ptm } = SplitButtonBase.setMetaData({
            props,
            state: {
                id: idState,
                overlayVisible: overlayVisibleState
            }
        });

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { valid }) => {
                valid && hide();
            },
            when: overlayVisibleState
        });

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const onDropdownButtonClick = () => {
            overlayVisibleState ? hide() : show();
        };

        const onItemClick = () => {
            hide();
        };

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
        };

        const onOverlayEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            alignOverlay();
        };

        const onOverlayEntered = () => {
            bindOverlayListener();

            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const alignOverlay = () => {
            DomHandler.alignOverlay(overlayRef.current, defaultButtonRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
        };

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            getElement: () => elementRef.current
        }));

        const createItems = () => {
            if (props.model) {
                return props.model.map((menuitem, index) => {
                    return <SplitButtonItem splitButtonProps={props} menuitem={menuitem} key={index} onItemClick={onItemClick} ptm={ptm} />;
                });
            }

            return null;
        };

        if (props.visible === false) {
            return null;
        }

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const sizeMapping = {
            large: 'lg',
            small: 'sm'
        };
        const size = sizeMapping[props.size];
        const className = classNames('p-splitbutton p-component', props.className, {
            'p-disabled': props.disabled,
            'p-button-loading-label-only': props.loading && !props.icon && props.label,
            [`p-button-${props.severity}`]: props.severity,
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            [`p-button-${size}`]: size
        });
        const buttonClassName = classNames('p-splitbutton-defaultbutton', props.buttonClassName);
        const menuButtonClassName = classNames('p-splitbutton-menubutton', props.menuButtonClassName);
        const buttonContent = props.buttonTemplate ? ObjectUtils.getJSXElement(props.buttonTemplate, props) : null;
        const items = createItems();
        const menuId = idState + '_menu';

        const dropdownIcon = () => {
            const iconProps = mergeProps(
                {
                    className: 'p-button-icon p-c'
                },
                ptm('icon')
            );

            const icon = props.dropdownIcon || <ChevronDownIcon {...iconProps} />;
            const dropdownIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

            return dropdownIcon;
        };

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: idState,
                className: className,
                style: props.style
            },
            SplitButtonBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <div {...rootProps}>
                    <Button
                        ref={defaultButtonRef}
                        type="button"
                        className={buttonClassName}
                        icon={props.icon}
                        loading={props.loading}
                        loadingIcon={props.loadingIcon}
                        label={props.label}
                        onClick={props.onClick}
                        disabled={props.disabled}
                        tabIndex={props.tabIndex}
                        {...props.buttonProps}
                        pt={ptm('button')}
                    >
                        {buttonContent}
                    </Button>
                    <Button
                        type="button"
                        className={menuButtonClassName}
                        icon={dropdownIcon}
                        onClick={onDropdownButtonClick}
                        disabled={props.disabled}
                        aria-expanded={overlayVisibleState}
                        aria-haspopup="true"
                        aria-controls={overlayVisibleState ? menuId : null}
                        {...props.menuButtonProps}
                        pt={ptm('menuButton')}
                    />
                    <SplitButtonPanel
                        ref={overlayRef}
                        appendTo={props.appendTo}
                        menuId={menuId}
                        menuStyle={props.menuStyle}
                        menuClassName={props.menuClassName}
                        onClick={onPanelClick}
                        in={overlayVisibleState}
                        onEnter={onOverlayEnter}
                        onEntered={onOverlayEntered}
                        onExit={onOverlayExit}
                        onExited={onOverlayExited}
                        transitionOptions={props.transitionOptions}
                        ptm={ptm}
                    >
                        {items}
                    </SplitButtonPanel>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

SplitButton.displayName = 'SplitButton';
