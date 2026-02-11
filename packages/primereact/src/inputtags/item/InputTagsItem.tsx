'use client';
import { Times } from '@primeicons/react/times';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, omit, resolve } from '@primeuix/utils';
import { Chip } from 'primereact/chip';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultItemProps } from './InputTagsItem.props';

export const InputTagsItem = withComponent({
    name: 'InputTags.Item',
    defaultProps: defaultItemProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;
        const { as, ...restProps } = props;
        const removeIconRef = React.useRef<HTMLElement>(null);

        React.useEffect(() => {
            if (removeIconRef.current && inputtags?.itemRefs && props.index !== undefined) {
                inputtags.itemRefs.current.set(props.index, removeIconRef.current);

                return () => {
                    inputtags.itemRefs.current.delete(props.index);
                };
            }
        }, [inputtags, props.index]);

        const rootProps = mergeProps(
            omit(restProps, 'index'),
            {
                className: inputtags?.cx('item', { focused: props.index === inputtags?.state.focusedItemIndex }),
                role: 'option',
                'aria-selected': props.index === inputtags?.state.focusedItemIndex,
                'data-p-index': props.index,
                onKeyDown: inputtags?.onKeyDown
            },
            inputtags?.ptm('item'),
            ptmi('root')
        );

        return (
            <Component as={as} instance={instance} attrs={rootProps}>
                {props.children ? (
                    resolve(props.children, instance)
                ) : (
                    <>
                        <Chip.Label>{inputtags?.state.value[props.index]}</Chip.Label>
                        <Chip.Icon ref={removeIconRef} className={inputtags?.cx('removeIcon')} onClick={() => inputtags?.onItemRemoveClick(props.index)}>
                            <Times />
                        </Chip.Icon>
                    </>
                )}
            </Component>
        );
    }
});
