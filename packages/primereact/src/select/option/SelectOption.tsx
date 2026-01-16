'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { useListboxContext, useListboxOptionContext } from 'primereact/listbox';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultOptionProps } from './SelectOption.props';

const SelectOptionContent = withComponent({
    name: 'SelectOptionContent',
    defaultProps: {},
    setup() {
        const select = useSelectContext();
        const listbox = useListboxContext();
        const optionInstance = useListboxOptionContext();

        return { select, listbox, optionInstance };
    },
    render(instance) {
        const { props, optionInstance } = instance;

        return resolve(props.children, optionInstance) as React.ReactNode;
    }
});

export const SelectOption = withComponent({
    name: 'SelectOption',
    defaultProps: defaultOptionProps,
    setup() {
        const select = useSelectContext();
        const listbox = useListboxContext();

        return { select, listbox };
    },
    render(instance) {
        const { props, ptmi, select } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: select?.cx('option')
            },
            select?.ptm('option'),
            ptmi('root')
        );

        return (
            <Component as={as} instance={instance} attrs={rootProps}>
                <SelectOptionContent>{props.children}</SelectOptionContent>
            </Component>
        );
    }
});
