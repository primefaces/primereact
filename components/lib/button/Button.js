import * as React from 'react';
import { SpinnerIcon } from '../icons/spinner';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';
import { ButtonBase } from './ButtonBase';
import { PrimeReactContext } from '../api/Api';

export const Button = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ButtonBase.getProps(inProps, context);

        const { ptm } = ButtonBase.setMetaData({
            props
        });

        const elementRef = React.useRef(ref);

        React.useEffect(() => {
            ObjectUtils.combinedRefs(elementRef, ref);
        }, [elementRef, ref]);

        if (props.visible === false) {
            return null;
        }

        const createIcon = () => {
            let className = classNames('p-button-icon p-c', {
                [`p-button-icon-${props.iconPos}`]: props.label
            });

            const iconsProps = mergeProps(
                {
                    className
                },
                ptm('icon')
            );

            className = classNames(className, {
                'p-button-loading-icon': props.loading
            });

            const loadingIconProps = mergeProps(
                {
                    className
                },
                ptm('loadingIcon')
            );

            const icon = props.loading ? props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin /> : props.icon;

            return IconUtils.getJSXIcon(icon, { ...iconsProps }, { props });
        };

        const createLabel = () => {
            if (props.label) {
                const labelProps = mergeProps(
                    {
                        className: 'p-button-label p-c'
                    },
                    ptm('label')
                );

                return <span {...labelProps}>{props.label}</span>;
            }

            return !props.children && !props.label && <span className="p-button-label p-c" dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></span>;
        };

        const createBadge = () => {
            if (props.badge) {
                const badgeClassName = classNames('p-badge', props.badgeClassName);

                const badgeProps = mergeProps(
                    {
                        className: badgeClassName
                    },
                    ptm('badge')
                );

                return <span {...badgeProps}>{props.badge}</span>;
            }

            return null;
        };

        const disabled = props.disabled || props.loading;
        const showTooltip = !disabled || (props.tooltipOptions && props.tooltipOptions.showOnDisabled);
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip) && showTooltip;
        const sizeMapping = {
            large: 'lg',
            small: 'sm'
        };
        const size = sizeMapping[props.size];
        const className = classNames('p-button p-component', props.className, {
            'p-button-icon-only': (props.icon || props.loading) && !props.label && !props.children,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-disabled': disabled,
            'p-button-loading': props.loading,
            'p-button-outlined': props.outlined,
            'p-button-raised': props.raised,
            'p-button-link': props.link,
            'p-button-text': props.text,
            'p-button-rounded': props.rounded,
            'p-button-loading-label-only': props.loading && !props.icon && props.label,
            [`p-button-loading-${props.iconPos}`]: props.loading && props.label,
            [`p-button-${size}`]: size,
            [`p-button-${props.severity}`]: props.severity
        });

        const icon = createIcon();
        const label = createLabel();
        const badge = createBadge();
        const defaultAriaLabel = props.label ? props.label + (props.badge ? ' ' + props.badge : '') : props['aria-label'];

        const rootProps = mergeProps(
            {
                ref: elementRef,
                'aria-label': defaultAriaLabel,
                className,
                disabled: disabled
            },
            ButtonBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <button {...rootProps}>
                    {icon}
                    {label}
                    {props.children}
                    {badge}
                    <Ripple />
                </button>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

Button.displayName = 'Button';
