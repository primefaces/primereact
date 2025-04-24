'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './SplitterGutter.props';

export const SplitterGutter = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const splitter = getParent('Splitter');
        const indexRef = React.useRef<number | null>(null);
        const [currentSize, setCurrentSize] = React.useState(splitter?.prevSize?.current);

        if (indexRef.current === null && splitter?.registerGutter) {
            indexRef.current = splitter?.registerGutter();
        }

        const index = indexRef.current ?? 0;

        React.useEffect(() => {
            if (splitter?.prevSize !== undefined) {
                setCurrentSize(splitter.prevSize);
            }
        }, [splitter?.prevSize]);

        const gutterProps = mergeProps(
            {
                ref: (el: HTMLElement) => splitter && (splitter.gutterRefs.current[index] = el),
                className: splitter?.cx('gutter'),
                role: 'separator',
                tabIndex: -1,
                'data-p-gutter-resizing': false,
                'data-p-gutter-index': index,
                onMouseDown: (e: React.MouseEvent) => splitter?.onGutterMouseDown(e, index),
                onTouchStart: (e: React.TouchEvent) => splitter?.onGutterTouchStart(e, index),
                onTouchMove: (e: React.TouchEvent) => splitter?.onGutterTouchMove(e),
                onTouchEnd: (e: React.TouchEvent) => splitter?.onGutterTouchEnd(e)
            },
            splitter?.ptm('gutter'),
            ptmi('root')
        );

        const createGutterHandle = () => {
            const size = splitter?.props.gutterSize + 'px';

            const handleProps = mergeProps(
                {
                    className: splitter?.cx('gutterHandle'),
                    tabIndex: 0,
                    style: {
                        width: splitter?.props.layout === 'horizontal' ? size : undefined,
                        height: splitter?.props.layout === 'vertical' ? size : undefined
                    },
                    'aria-orientation': splitter?.props.layout,
                    'aria-valuenow': currentSize,
                    onKeyUp: () => splitter?.onGutterKeyUp(),
                    onKeyDown: (e: React.KeyboardEvent) => splitter?.onGutterKeyDown(e, index)
                },
                splitter?.ptm('gutterHandle')
            );

            return <div {...handleProps} />;
        };

        const gutterHandle = createGutterHandle();

        return (
            <Component as={props.as || 'div'} {...gutterProps}>
                {gutterHandle}
            </Component>
        );
    }
});
