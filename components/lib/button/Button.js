import React, { forwardRef, memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { Ripple } from '../ripple/Ripple';
import { ObjectUtils, classNames, IconUtils } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const Button = memo(forwardRef((props, ref) => {
    const elementRef = useRef(ref);
    const tooltipRef = useRef(null);

    useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

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

    useUnmountEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    const createIcon = () => {
        const icon = props.loading ? props.loadingIcon : props.icon;
        const className = classNames('p-button-icon p-c', {
            'p-button-loading-icon': props.loading,
            [`p-button-icon-${props.iconPos}`]: props.label
        });

        return IconUtils.getJSXIcon(icon, { className }, { props });
    }

    const createLabel = () => {
        if (props.label) {
            return <span className="p-button-label p-c">{props.label}</span>
        }

        return !props.children && !props.label && <span className="p-button-label p-c" dangerouslySetInnerHTML={{ __html: "&nbsp;" }}></span>
    }

    const createBadge = () => {
        if (props.badge) {
            const badgeClassName = classNames('p-badge', props.badgeClassName);

            return <span className={badgeClassName}>{props.badge}</span>
        }

        return null;
    }

    const disabled = props.disabled || props.loading;
    const buttonProps = ObjectUtils.findDiffKeys(props, Button.defaultProps);
    const className = classNames('p-button p-component', props.className, {
        'p-button-icon-only': (props.icon || (props.loading && props.loadingIcon)) && !props.label,
        'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
        'p-disabled': disabled,
        'p-button-loading': props.loading,
        'p-button-loading-label-only': props.loading && !props.icon && props.label,
        [`p-button-loading-${props.iconPos}`]: props.loading && props.loadingIcon && props.label
    });

    const icon = createIcon();
    const label = createLabel();
    const badge = createBadge();

    return (
        <button ref={elementRef} {...buttonProps} className={className} disabled={disabled}>
            {icon}
            {label}
            {props.children}
            {badge}
            <Ripple />
        </button>
    )
}));

Button.defaultProps = {
    __TYPE: 'Button',
    label: null,
    icon: null,
    iconPos: 'left',
    badge: null,
    badgeClassName: null,
    tooltip: null,
    tooltipOptions: null,
    disabled: false,
    loading: false,
    loadingIcon: 'pi pi-spinner pi-spin'
}

Button.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.any,
    iconPos: PropTypes.string,
    badge: PropTypes.string,
    badgeClassName: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    loadingIcon: PropTypes.any
}
