import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Rating = React.memo(
    React.forwardRef((props, ref) => {
        const elementRef = React.useRef(null);
        const enabled = !props.disabled && !props.readOnly;
        const tabIndex = enabled ? 0 : null;

        const rate = (event, i) => {
            if (enabled && props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: i,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: i
                    }
                });
            }

            event.preventDefault();
        };

        const clear = (event) => {
            if (enabled && props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: null,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: null
                    }
                });
            }

            event.preventDefault();
        };

        const onStarKeyDown = (event, value) => {
            if (event.key === 'Enter') {
                rate(event, value);
            }
        };

        const onCancelKeyDown = (event) => {
            if (event.key === 'Enter') {
                clear(event);
            }
        };

        const createIcons = () => {
            return Array.from({ length: props.stars }, (_, i) => i + 1).map((value) => {
                const active = value <= props.value;
                const className = classNames('p-rating-item', { 'p-rating-item-active': active });
                const icon = active ? { type: props.onIcon, props: props.onIconProps } : { type: props.offIcon, props: props.offIconProps };
                const content = IconUtils.getJSXIcon(icon.type, { className: 'p-rating-icon', ...icon.props }, { props });

                return (
                    <div key={value} className={className} tabIndex={tabIndex} onClick={(e) => rate(e, value)} onKeyDown={(e) => onStarKeyDown(e, value)}>
                        {content}
                    </div>
                );
            });
        };

        const createCancelIcon = () => {
            if (props.cancel) {
                const content = IconUtils.getJSXIcon(props.cancelIcon, { className: 'p-rating-icon p-rating-cancel', ...props.cancelIconProps }, { props });

                return (
                    <div className="p-rating-item p-rating-cancel-item" onClick={clear} tabIndex={tabIndex} onKeyDown={onCancelKeyDown}>
                        {content}
                    </div>
                );
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ObjectUtils.findDiffKeys(props, Rating.defaultProps);
        const className = classNames(
            'p-rating',
            {
                'p-disabled': props.disabled,
                'p-readonly': props.readOnly
            },
            props.className
        );
        const cancelIcon = createCancelIcon();
        const icons = createIcons();

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    {cancelIcon}
                    {icons}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

Rating.displayName = 'Rating';
Rating.defaultProps = {
    __TYPE: 'Rating',
    id: null,
    value: null,
    disabled: false,
    readOnly: false,
    stars: 5,
    cancel: true,
    style: null,
    className: null,
    tooltip: null,
    tooltipOptions: null,
    onChange: null,
    onIcon: 'pi pi-star-fill',
    offIcon: 'pi pi-star',
    cancelIcon: 'pi pi-ban',
    cancelIconProps: null,
    onIconProps: null,
    offIconProps: null
};
