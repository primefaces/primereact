'use client';
import { Component, withComponent } from '@primereact/core/component';
import { BlankIcon } from '@primereact/icons/blank';
import { CheckIcon } from '@primereact/icons/check';
import type { ListboxOptionInstance } from '@primereact/types/shared/listbox';
import { mergeProps, resolve } from '@primeuix/utils';
import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { useListboxOptionContext } from '../option';
import { defaultSelectionProps } from './ListboxSelection.props';

export const ListboxSelection = withComponent({
    name: 'ListboxSelection',
    defaultProps: defaultSelectionProps,
    setup() {
        const listbox = useListboxContext();
        const option = useListboxOptionContext() || ({} as ListboxOptionInstance);

        return { ...option, listbox };
    },
    render(instance) {
        const { props, ptmi, listbox, selected } = instance;
        const { checkmark, checkbox } = listbox?.props || {};

        const rootProps = mergeProps(
            {
                className: listbox?.cx('selection')
            },
            listbox?.ptm('selection'),
            ptmi('root')
        );

        const createContent = () => {
            if (checkmark) {
                return selected ? <CheckIcon {...rootProps} /> : <BlankIcon {...rootProps} />;
            } else if (checkbox) {
                return <Checkbox defaultChecked={selected} tabIndex={-1} readOnly pt-root={rootProps} />;
            }

            return null;
        };

        const content = resolve(props.children, instance) ?? createContent();

        return (
            <Component instance={instance} attrs={rootProps}>
                {content}
            </Component>
        );
    }
});
