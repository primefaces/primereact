'use client';
import { Component } from '@primereact/core/component';
import { useScrollArea } from '@primereact/headless/scrollarea';
import { styles } from '@primereact/styles/scrollarea';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ScrollAreaContent } from './content';
import { ScrollAreaProvider } from './ScrollArea.context';
import { defaultProps } from './ScrollArea.props';
import { ScrollAreaThumbX } from './thumbx';
import { ScrollAreaThumbY } from './thumby';
import { ScrollAreaViewport } from './viewport';

export const ScrollArea = withComponent({
    name: 'ScrollArea',
    defaultProps,
    styles,
    setup(instance) {
        const scrollarea = useScrollArea(instance.inProps);

        return scrollarea;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <ScrollAreaProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ScrollAreaProvider>
        );
    },
    components: {
        Content: ScrollAreaContent,
        Viewport: ScrollAreaViewport,
        ThumbY: ScrollAreaThumbY,
        ThumbX: ScrollAreaThumbX
    }
});
