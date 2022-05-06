import * as React from 'react';
import PrimeReact from '../api/Api';
import { Button } from '../button/Button';
import { useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from '../utils/Utils';
import { SplitButtonItem } from './SplitButtonItem';
import { SplitButtonPanel } from './SplitButtonPanel';

export const SplitButton = React.memo(React.forwardRef((props, ref) => {
    const [idState, setIdState] = React.useState(props.id);
    const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
    const elementRef = React.useRef(null);
    const defaultButtonRef = React.useRef(null);
    const overlayRef = React.useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { valid }) => {
            valid && hide();
        }, when: overlayVisibleState
    });

    const onPanelClick = (event) => {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: elementRef.current
        });
    }

    const onDropdownButtonClick = () => {
        overlayVisibleState ? hide() : show();
    }

    const onItemClick = () => {
        hide();
    }

    const show = () => {
        setOverlayVisibleState(true);
    }

    const hide = () => {
        setOverlayVisibleState(false);
    }

    const onOverlayEnter = () => {
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        alignOverlay();
    }

    const onOverlayEntered = () => {
        bindOverlayListener();

        props.onShow && props.onShow();
    }

    const onOverlayExit = () => {
        unbindOverlayListener();
    }

    const onOverlayExited = () => {
        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const alignOverlay = () => {
        DomHandler.alignOverlay(overlayRef.current, defaultButtonRef.current.parentElement, props.appendTo || PrimeReact.appendTo);
    }

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    useUnmountEffect(() => {
        ZIndexUtils.clear(overlayRef.current);
    });

    React.useImperativeHandle(ref, () => ({
        show,
        hide
    }));

    const createItems = () => {
        if (props.model) {
            return props.model.map((menuitem, index) => {
                return <SplitButtonItem splitButtonProps={props} menuitem={menuitem} key={index} onItemClick={onItemClick} />
            });
        }

        return null;
    }

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, SplitButton.defaultProps);
    const className = classNames('p-splitbutton p-component', props.className, { 'p-disabled': props.disabled });
    const buttonClassName = classNames('p-splitbutton-defaultbutton', props.buttonClassName);
    const menuButtonClassName = classNames('p-splitbutton-menubutton', props.menuButtonClassName);
    const buttonContent = props.buttonTemplate ? ObjectUtils.getJSXElement(props.buttonTemplate, props) : null;
    const items = createItems();
    const menuId = idState + '_menu';

    return (
        <>
            <div ref={elementRef} id={idState} className={className} style={props.style} {...otherProps}>
                <Button ref={defaultButtonRef} type="button" className={buttonClassName} icon={props.icon} label={props.label} onClick={props.onClick} disabled={props.disabled} tabIndex={props.tabIndex} {...props.buttonProps}>
                    {buttonContent}
                </Button>
                <Button type="button" className={menuButtonClassName} icon={props.dropdownIcon} onClick={onDropdownButtonClick} disabled={props.disabled}
                    aria-expanded={overlayVisibleState} aria-haspopup="true" aria-controls={overlayVisibleState ? menuId : null} {...props.menuButtonProps} />
                <SplitButtonPanel ref={overlayRef} appendTo={props.appendTo} menuId={menuId} menuStyle={props.menuStyle} menuClassName={props.menuClassName} onClick={onPanelClick}
                    in={overlayVisibleState} onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited} transitionOptions={props.transitionOptions}>
                    {items}
                </SplitButtonPanel>
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

SplitButton.displayName = 'SplitButton';
SplitButton.defaultProps = {
    __TYPE: 'SplitButton',
    id: null,
    label: null,
    icon: null,
    model: null,
    disabled: null,
    style: null,
    className: null,
    buttonClassName: null,
    menuStyle: null,
    menuClassName: null,
    menuButtonClassName: null,
    buttonProps: null,
    menuButtonProps: null,
    tabIndex: null,
    appendTo: null,
    tooltip: null,
    tooltipOptions: null,
    buttonTemplate: null,
    transitionOptions: null,
    dropdownIcon: 'pi pi-chevron-down',
    onClick: null,
    onShow: null,
    onHide: null
}
