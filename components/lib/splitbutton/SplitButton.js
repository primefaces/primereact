import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { SplitButtonItem } from './SplitButtonItem';
import { SplitButtonPanel } from './SplitButtonPanel';
import { Button } from '../button/Button';
import { tip } from '../tooltip/Tooltip';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, classNames, UniqueComponentId, ZIndexUtils } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const SplitButton = memo(forwardRef((props, ref) => {
    const [idState, setIdState] = useState(props.id);
    const [overlayVisibleState, setOverlayVisibleState] = useState(false);
    const elementRef = useRef(null);
    const defaultButtonRef = useRef(null);
    const overlayRef = useRef(null);
    const tooltipRef = useRef(null);

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

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.update({ content: props.tooltip, ...(props.tooltipOptions || {}) });
        }
        else if (props.tooltip) {
            tooltipRef.current = tip({
                target: elementRef.current,
                content: props.tooltip,
                options: props.tooltipOptions
            });
        }
    }, [props.tooltip, props.tooltipOptions]);

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    useUnmountEffect(() => {
        ZIndexUtils.clear(overlayRef.current);

        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    useImperativeHandle(ref, () => ({
        show,
        hide
    }));

    const createItems = () => {
        if (props.model) {
            return props.model.map((menuitem, index) => {
                return <SplitButtonItem menuitem={menuitem} key={index} onItemClick={onItemClick} />
            });
        }

        return null;
    }

    const className = classNames('p-splitbutton p-component', props.className, { 'p-disabled': props.disabled });
    const buttonClassName = classNames('p-splitbutton-defaultbutton', props.buttonClassName);
    const menuButtonClassName = classNames('p-splitbutton-menubutton', props.menuButtonClassName);
    const buttonContent = props.buttonTemplate ? ObjectUtils.getJSXElement(props.buttonTemplate, props) : null;
    const items = createItems();
    const panelId = idState + '_overlay';

    return (
        <div id={idState} className={className} style={props.style} ref={elementRef}>
            <Button ref={defaultButtonRef} type="button" className={buttonClassName} icon={props.icon} label={props.label} onClick={props.onClick} disabled={props.disabled} tabIndex={props.tabIndex}>
                {buttonContent}
            </Button>
            <Button type="button" className={menuButtonClassName} icon={props.dropdownIcon} onClick={onDropdownButtonClick} disabled={props.disabled}
                aria-expanded={overlayVisibleState} aria-haspopup aria-owns={panelId} />
            <SplitButtonPanel ref={overlayRef} appendTo={props.appendTo} id={panelId} menuStyle={props.menuStyle} menuClassName={props.menuClassName} onClick={onPanelClick}
                in={overlayVisibleState} onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited} transitionOptions={props.transitionOptions}>
                {items}
            </SplitButtonPanel>
        </div>
    )
}));

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

SplitButton.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.any,
    model: PropTypes.array,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    menuStyle: PropTypes.object,
    menuClassName: PropTypes.string,
    menuButtonClassName: PropTypes.string,
    tabIndex: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    buttonTemplate: PropTypes.any,
    transitionOptions: PropTypes.object,
    dropdownIcon: PropTypes.any,
    onClick: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
