import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMergeProps, useMountEffect, useUnmountEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { OverlayService } from '../overlayservice/OverlayService';
import { TieredMenu } from '../tieredmenu/TieredMenu';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { SplitButtonBase } from './SplitButtonBase';

export const SplitButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = SplitButtonBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const elementRef = React.useRef(null);
        const menuRef = React.useRef(null);
        const defaultButtonRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const overlayDisplayOrder = useDisplayOrder('split-button-tooltip', overlayVisibleState);
        const metaData = {
            props,
            state: {
                id: idState,
                overlayVisible: overlayVisibleState
            }
        };

        const { ptm, cx, isUnstyled } = SplitButtonBase.setMetaData(metaData);

        useHandleStyle(SplitButtonBase.css.styles, isUnstyled, { name: 'splitbutton' });

        useGlobalOnEscapeKey({
            callback: () => {
                hide();
            },
            when: overlayVisibleState && overlayDisplayOrder,
            priority: [ESC_KEY_HANDLING_PRIORITIES.SPLIT_BUTTON, overlayDisplayOrder]
        });

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const onMenuButtonKeyDown = (event) => {
            if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
                onDropdownButtonClick(event);
                event.preventDefault();
            }
        };

        const onDropdownButtonClick = (event) => {
            overlayVisibleState ? hide(event) : show(event);
        };

        const show = (event) => {
            setOverlayVisibleState(true);
            menuRef.current && menuRef.current.show(event);
        };

        const hide = (event) => {
            setOverlayVisibleState(false);
            menuRef.current && menuRef.current.hide(event);
        };

        const onMenuShow = () => {
            props.onShow && props.onShow();
        };

        const onMenuHide = () => {
            setOverlayVisibleState(false);
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
        const menuId = idState + '_overlay';

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
                        aria-label={props.label}
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
                        aria-controls={menuId}
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
                        onKeyDown={onMenuButtonKeyDown}
                        unstyled={props.unstyled}
                    />
                    <TieredMenu
                        ref={menuRef}
                        popup={true}
                        unstyled={props.unstyled}
                        model={props.model}
                        appendTo={props.appendTo}
                        id={menuId}
                        style={props.menuStyle}
                        autoZIndex={props.autoZIndex}
                        baseZIndex={props.baseZIndex}
                        className={props.menuClassName}
                        onClick={onPanelClick}
                        onShow={onMenuShow}
                        onHide={onMenuHide}
                        pt={ptm('menu')}
                    />
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

SplitButton.displayName = 'SplitButton';
