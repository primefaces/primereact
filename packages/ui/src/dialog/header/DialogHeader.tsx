'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultHeaderProps } from './DialogHeader.props';

export const DialogHeader = withComponent({
    name: 'DialogHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const headerProps = mergeProps(
            {
                id: dialog?.inProps?.ariaLabelledby ?? dialog?.id + '_header',
                className: dialog?.cx('header'),
                onMouseDown: (event: React.MouseEvent) => dialog?.onDragStart?.(event)
            },
            dialog?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={headerProps} children={props.children} />;
    }
});
