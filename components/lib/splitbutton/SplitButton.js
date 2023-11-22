import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { SplitButtonBase } from './SplitButtonBase';
import { SplitButtonItem } from './SplitButtonItem';
import { SplitButtonPanel } from './SplitButtonPanel';

export const SplitButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SplitButtonBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const elementRef = React.useRef(null);
        const defaultButtonRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const metaData = {
            props,
            state: {
                id: idState,
                overlayVisible: overlayVisibleState
            }
        };

        const { ptm, cx, isUnstyled } = SplitButtonBase.setMetaData(metaData);

        useHandleStyle(SplitButtonBase.css.styles, isUnstyled, { name: 'splitbutton' });

        const overlayDisplayOrder = useDisplayOrder('split-button-tooltip', overlayVisibleState);

        useGlobalOnEscapeKey({
            callback: () => {
                hide();
            },
            condition: overlayVisibleState,
            priority: [ESC_KEY_HANDLING_PRIORITIES.SPLIT_BUTTON, overlayDisplayOrder]
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
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
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

            alignOverlay();
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
                    return <SplitButtonItem hostName="SplitButton" splitButtonProps={props} menuitem={menuitem} key={index} onItemClick={onItemClick} ptm={ptm} cx={cx} />;
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
        const buttonContent = props.buttonTemplate ? ObjectUtils.getJSXElement(props.buttonTemplate, props) : null;
        const items = createItems();
        const menuId = idState + '_menu';

        const dropdownIcon = () => {
            const iconProps = mergeProps(
                {
                    className: cx('icon')
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
                className: classNames(props.className, cx('root', { size })),
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
                        className={classNames(props.buttonClassName, cx('button'))}
                        icon={props.icon}
                        loading={props.loading}
                        loadingIcon={props.loadingIcon}
                        severity={props.severity}
                        label={props.label}
                        raised={props.raised}
                        onClick={props.onClick}
                        disabled={props.disabled}
                        tabIndex={props.tabIndex}
                        size={props.size}
                        outlined={props.outlined}
                        text={props.text}
                        {...props.buttonProps}
                        pt={ptm('button')}
                        __parentMetadata={{
                            parent: metaData
                        }}
                        unstyled={props.unstyled}
                    >
                        {buttonContent}
                    </Button>
                    <Button
                        type="button"
                        className={classNames(props.menuButtonClassName, cx('menuButton'))}
                        icon={dropdownIcon}
                        onClick={onDropdownButtonClick}
                        disabled={props.disabled}
                        aria-expanded={overlayVisibleState}
                        aria-haspopup="true"
                        aria-controls={overlayVisibleState ? menuId : null}
                        {...props.menuButtonProps}
                        size={props.size}
                        severity={props.severity}
                        outlined={props.outlined}
                        text={props.text}
                        raised={props.raised}
                        pt={ptm('menuButton')}
                        __parentMetadata={{
                            parent: metaData
                        }}
                        unstyled={props.unstyled}
                    />
                    <SplitButtonPanel
                        hostName="SplitButton"
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
                        cx={cx}
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
