'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, omit, resolve } from '@primeuix/utils';
import { Chip } from 'primereact/chip';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultItemProps } from './InputTagsItem.props';

export const InputTagsItem = withComponent({
    name: 'InputTagsItem',
    defaultProps: defaultItemProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;
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
            {
                className: inputtags?.cx('item', { focused: props.index === inputtags?.state.focusedItemIndex }),
                'data-p-index': props.index,
                onKeyDown: inputtags?.onKeyDown
            },
            ptmi('root')
        );

        return (
            // @ts-expect-error: Chip expects a type prop, but we are using it as a InputTags item.
            <Component as={Chip} instance={instance} attrs={{ ...omit(props, 'index'), ...rootProps }} pt={inputtags?.ptm('item')}>
                {props.children ? (
                    resolve(props.children, instance)
                ) : (
                    <>
                        <Chip.Label>{inputtags?.state.value[props.index]}</Chip.Label>
                        <Chip.RemoveIcon ref={removeIconRef} onClick={() => inputtags?.onItemRemoveClick(props.index)} />
                    </>
                )}
            </Component>
        );
    }
});
