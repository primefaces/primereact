import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { ButtonBase } from './ButtonBase';

export const Button = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ButtonBase.getProps(inProps);

        const elementRef = React.useRef(ref);

        React.useEffect(() => {
            ObjectUtils.combinedRefs(elementRef, ref);
        }, [elementRef, ref]);

        if (props.visible === false) {
            return null;
        }

        const createIcon = () => {
            const icon = props.loading ? props.loadingIcon : props.icon;
            const className = classNames('p-button-icon p-c', {
                'p-button-loading-icon': props.loading,
                [`p-button-icon-${props.iconPos}`]: props.label
            });

            return IconUtils.getJSXIcon(icon, { className }, { props });
        };

        const createLabel = () => {
            if (props.label) {
                return <span className="p-button-label p-c">{props.label}</span>;
            }

            return !props.children && !props.label && <span className="p-button-label p-c" dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></span>;
        };

        const createBadge = () => {
            if (props.badge) {
                const badgeClassName = classNames('p-badge', props.badgeClassName);

                return <span className={badgeClassName}>{props.badge}</span>;
            }

            return null;
        };

        const disabled = props.disabled || props.loading;
        const showTooltip = !disabled || (props.tooltipOptions && props.tooltipOptions.showOnDisabled);
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip) && showTooltip;
        const otherProps = ButtonBase.getOtherProps(props);
        const className = classNames('p-button p-component', props.className, {
            'p-button-icon-only': (props.icon || (props.loading && props.loadingIcon)) && !props.label && !props.children,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-disabled': disabled,
            'p-button-loading': props.loading,
            'p-button-loading-label-only': props.loading && !props.icon && props.label,
            [`p-button-loading-${props.iconPos}`]: props.loading && props.loadingIcon && props.label
        });

        const icon = createIcon();
        const label = createLabel();
        const badge = createBadge();
        const defaultAriaLabel = props.label ? props.label + (props.badge ? ' ' + props.badge : '') : props['aria-label'];

        return (
            <>
                <button ref={elementRef} aria-label={defaultAriaLabel} {...otherProps} className={className} disabled={disabled}>
                    {icon}
                    {label}
                    {props.children}
                    {badge}
                    <Ripple />
                </button>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

Button.displayName = 'Button';
