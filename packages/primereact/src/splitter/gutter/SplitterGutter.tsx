'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSplitterContext } from '../Splitter.context';
import { defaultGutterProps } from './SplitterGutter.props';

export const SplitterGutter = withComponent({
    name: 'SplitterGutter',
    defaultProps: defaultGutterProps,
    setup() {
        const splitter = useSplitterContext();

        return { splitter };
    },
    render(instance) {
        const { props, ptmi, splitter } = instance;
        const indexRef = React.useRef<number | null>(null);

        if (indexRef.current === null && splitter?.registerGutter) {
            indexRef.current = splitter?.registerGutter();
        }

        const index = indexRef.current ?? 0;

        const gutterElementRef = React.useCallback(
            (el: HTMLDivElement | null) => {
                if (el && splitter?.gutterRefs && splitter.gutterRefs.current) {
                    splitter.gutterRefs.current[index] = el;
                }
            },
            [splitter, index]
        );

        const rootProps = mergeProps(
            {
                className: splitter?.cx('gutter'),
                role: 'separator',
                tabIndex: -1,
                'data-p-gutter-resizing': false,
                'data-p-gutter-index': index,
                onMouseDown: (e: React.MouseEvent) => splitter?.onGutterMouseDown(e, index),
                onTouchStart: (e: React.TouchEvent) => splitter?.onGutterTouchStart(e, index),
                onTouchMove: splitter?.onGutterTouchMove,
                onTouchEnd: splitter?.onGutterTouchEnd
            },
            splitter?.ptm('gutter'),
            ptmi('root')
        );

        return <Component ref={gutterElementRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
