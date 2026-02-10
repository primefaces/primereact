'use client';
import { withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultPortalProps } from './SelectPortal.props';

export const SelectPortal = withComponent({
    name: 'Select.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, select, ptmi } = instance;

        const containerProps = mergeProps(
            {
                className: select?.cx('portal')
            },
            select?.ptm('portal'),
            ptmi('root')
        );

        return <Portal instance={instance} attrs={containerProps} children={props.children} appendTo={select?.props.appendTo} />;
    }
});
