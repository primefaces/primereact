'use client';
import { Component } from '@primereact/core/component';
import { useRating } from '@primereact/headless/rating';
import { StarIcon } from '@primereact/icons/star';
import { StarFillIcon } from '@primereact/icons/starfill';
import { styles } from '@primereact/styles/rating';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { RatingProvider } from './Rating.context';
import { defaultProps } from './Rating.props';

export const Rating = withComponent({
    name: 'Rating',
    defaultProps,
    styles,
    setup(instance) {
        const rating = useRating(instance.inProps);

        return rating;
    },
    render(instance) {
        const { props, state, ptmi, ptm, cx, onOptionClick, onFocus, onBlur, onChange, $attrSelector, $primereact } = instance;

        const resolveIcon = (Icon: unknown, className: string | undefined, type: 'on' | 'off') => {
            if (typeof Icon === 'string') {
                return <span className={`${className} ${Icon}`} />;
            }

            if (Icon === undefined) {
                return type === 'on' ? <StarFillIcon className={className} /> : <StarIcon className={className} />;
            }

            if (React.isValidElement(Icon)) {
                return Icon;
            }

            return null;
        };

        const createOptionElement = (value: number) => {
            const isActive = state.value !== undefined && value <= state.value;
            const isFocused = state.focusedOptionIndex !== undefined && value === state.focusedOptionIndex;
            // @ts-expect-error TODO: add locale to config
            const starAriaLabel = value === 1 ? $primereact?.config?.locale?.aria?.star : $primereact?.config?.locale?.aria?.stars?.replace(/{star}/g, value);

            return (
                <div key={value} className={cx('option', { value })} onClick={(e) => onOptionClick(e, value)} data-p-active={isActive} data-p-focused={isFocused}>
                    <span className="p-hidden-accessible" data-p-hidden-accessible="true" {...ptm('hiddenOptionInputContainer')}>
                        <input
                            type="radio"
                            value={value}
                            name={props.name ?? `${$attrSelector}_name`}
                            checked={state.value === value}
                            disabled={props.disabled}
                            readOnly={props.readOnly}
                            aria-label={starAriaLabel}
                            onFocus={(e) => onFocus(e, value)}
                            onBlur={onBlur}
                            onChange={(e) => onChange(e, value)}
                            {...ptm('hiddenOptionInput')}
                        />
                    </span>
                    {isActive ? resolveIcon(props.onIcon, cx('onIcon'), 'on') : resolveIcon(props.offIcon, cx('offIcon'), 'off')}
                </div>
            );
        };

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <RatingProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {Array.from({ length: props.stars ?? 5 }).map((_, index) => createOptionElement(index + 1))}
                </Component>
            </RatingProvider>
        );
    }
});
