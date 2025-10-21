'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { ListboxOptionProvider } from './ListboxOption.context';
import { defaultOptionProps } from './ListboxOption.props';

export const ListboxOption = withComponent({
    name: 'ListboxOption',
    defaultProps: defaultOptionProps,
    setup(instance) {
        const listbox = useListboxContext();
        const options = listbox.getOptions();
        const index = instance.props?.index ?? options.findIndex((option: any) => option[listbox.props.optionKey] === instance.props.uKey);
        const option = options[index];
        const selected = listbox.isSelected(option);
        const group = instance.props?.group ?? listbox.isOptionGroup(option);

        return { listbox, option, index, group, selected };
    },
    render(instance) {
        const { props, ptmi, listbox, option, index, selected, group } = instance;

        const computedProps = group
            ? mergeProps(
                  {
                      className: listbox?.cx('optionGroup', { index })
                  },
                  listbox?.ptm('optionGroup')
              )
            : mergeProps(
                  {
                      className: listbox?.cx('option', { index, selected, disabled: listbox.isOptionDisabled(option) }),
                      'aria-selected': selected,
                      'aria-disabled': listbox.isOptionDisabled(option),
                      'aria-setsize': listbox.getAriaSetSize(),
                      'aria-posinset': listbox.getAriaPosInset(index),
                      onClick: (event: React.MouseEvent) => listbox.onOptionSelect(event, option, index),
                      onMouseDown: (event: React.MouseEvent) => listbox.onOptionMouseDown(event, index),
                      onMouseMove: (event: React.MouseEvent) => listbox.onOptionMouseMove(event, index),
                      onTouchEnd: listbox.onOptionTouchEnd
                  },
                  listbox?.ptm('option')
              );

        const rootProps = mergeProps(
            {
                id: listbox.getOptionId(index),
                role: 'option'
            },
            computedProps,
            ptmi('root')
        );

        return (
            <ListboxOptionProvider value={{ option, index, selected }}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ListboxOptionProvider>
        );
    }
});
