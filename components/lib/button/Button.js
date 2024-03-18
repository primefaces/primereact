import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { Badge } from '../badge/Badge';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { SpinnerIcon } from '../icons/spinner';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { ButtonBase } from './ButtonBase';

export const Button = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ButtonBase.getProps(inProps, context);
        const disabled = props.disabled || props.loading;

        const metaData = {
            props,
            ...props.__parentMetadata,
            context: {
                disabled
            }
        };

        const { ptm, cx, isUnstyled } = ButtonBase.setMetaData(metaData);

        useHandleStyle(ButtonBase.css.styles, isUnstyled, { name: 'button', styled: true });

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
                    className: cx('icon')
                },
                ptm('icon')
            );

            className = classNames(className, {
                'p-button-loading-icon': props.loading
            });

            const loadingIconProps = mergeProps(
                {
                    className: cx('loadingIcon', { className })
                },
                ptm('loadingIcon')
            );

            const icon = props.loading ? props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin /> : props.icon;

            return IconUtils.getJSXIcon(icon, { ...iconsProps }, { props });
        };

        const createLabel = () => {
            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                ptm('label')
            );

            if (props.label) {
                return <span {...labelProps}>{props.label}</span>;
            }

            return !props.children && !props.label && <span {...labelProps} dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></span>;
        };

        const createBadge = () => {
            if (props.badge) {
                const badgeProps = mergeProps(
                    {
                        className: classNames(props.badgeClassName),
                        value: props.badge,
                        unstyled: props.unstyled,
                        __parentMetadata: { parent: metaData }
                    },
                    ptm('badge')
                );

                return <Badge {...badgeProps}>{props.badge}</Badge>;
            }

            return null;
        };

        const showTooltip = !disabled || (props.tooltipOptions && props.tooltipOptions.showOnDisabled);
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip) && showTooltip;
        const sizeMapping = {
            large: 'lg',
            small: 'sm'
        };
        const size = sizeMapping[props.size];

        const icon = createIcon();
        const label = createLabel();
        const badge = createBadge();
        const defaultAriaLabel = props.label ? props.label + (props.badge ? ' ' + props.badge : '') : props['aria-label'];

        const rootProps = mergeProps(
            {
                ref: elementRef,
                'aria-label': defaultAriaLabel,
                className: classNames(props.className, cx('root', { size, disabled })),
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
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

Button.displayName = 'Button';
