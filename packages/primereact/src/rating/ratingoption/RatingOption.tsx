'use client';
import { Component } from '@primereact/core/component';
import { StarIcon } from '@primereact/icons/star';
import { StarFillIcon } from '@primereact/icons/starfill';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useRatingContext } from '../Rating.context';
import { defaultRatingOptionProps } from './RatingOption.props';

export const RatingOption = withComponent({
    name: 'RatingOption',
    defaultProps: defaultRatingOptionProps,
    setup() {
        const rating = useRatingContext();

        return {
            rating
        };
    },
    render(instance) {
        const { props, ptmi, $attrSelector, rating, $primereact } = instance;

        const createOptionElement = (value: number) => {
            // @ts-expect-error TODO: add locale to config
            const starAriaLabel = value === 1 ? $primereact?.config?.locale?.aria?.star : $primereact?.config?.locale?.aria?.stars?.replace(/{star}/g, value);
            const allowHalf = rating?.props?.allowHalf;
            const isFocused = rating?.state.focusedOptionIndex === value && rating?.state.isFocusVisibleItem;

            const state = rating?.getOptionState(value);
            const rootProps = mergeProps(
                {
                    className: rating?.cx('option', { active: value - 0.5 <= (rating?.state.value ?? 0), focused: isFocused }),
                    'data-p-state': state
                },
                rating?.ptm('option'),
                ptmi('root')
            );

            const hiddenInputProps = {
                type: 'radio',
                name: rating?.props.name ?? `${$attrSelector}_name`,
                disabled: rating?.props.disabled,
                readOnly: rating?.props.readOnly,
                'aria-label': starAriaLabel,
                onChange: rating?.onInputChange,
                onBlur: rating?.onInputBlur,
                onFocus: rating?.onInputFocus,
                ...rating?.ptm('hiddenOptionInput')
            };

            return (
                <Component key={value} instance={instance} attrs={rootProps}>
                    {!allowHalf && (
                        <span className="p-hidden-accessible" data-p-hidden-accessible="true" {...rating?.ptm('hiddenOptionInputContainer')}>
                            <input {...hiddenInputProps} checked={value === rating?.state.value} value={value} />
                        </span>
                    )}
                    <div
                        className={rating?.cx('optionOn')}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => rating?.onOptionClick?.(e, value - 0.5)}
                        onPointerEnter={(e: React.PointerEvent<HTMLDivElement>) => rating?.onOptionHover?.(e, value - 0.5)}
                    >
                        {allowHalf && (
                            <span className="p-hidden-accessible" data-p-hidden-accessible="true" {...rating?.ptm('hiddenOptionInputContainer')}>
                                <input {...hiddenInputProps} checked={value - 0.5 === rating?.state.value} value={value - 0.5} />
                            </span>
                        )}
                        <div className={rating?.cx('optionOnElement', { state })}>{props.onIcon ?? <StarFillIcon className={rating?.cx('optionStar')} />}</div>
                    </div>

                    <div className={rating?.cx('optionOff')} onClick={(e: React.MouseEvent<HTMLDivElement>) => rating?.onOptionClick?.(e, value)} onPointerEnter={(e: React.PointerEvent<HTMLDivElement>) => rating?.onOptionHover?.(e, value)}>
                        {allowHalf && (
                            <span className="p-hidden-accessible" data-p-hidden-accessible="true" {...rating?.ptm('hiddenOptionInputContainer')}>
                                <input {...hiddenInputProps} checked={value === rating?.state.value} value={value} />
                            </span>
                        )}
                        <div className={rating?.cx('optionOffElement', { state })}>{props.offIcon ?? <StarIcon className={rating?.cx('optionStar')} />}</div>
                    </div>
                </Component>
            );
        };

        return Array.from({ length: rating?.props.stars ?? 0 }, (_, i) => createOptionElement(i + 1));
    }
});
