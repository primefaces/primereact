'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSplitterContext } from '../Splitter.context';
import { defaultThumbProps } from './SplitterThumb.props';

export const SplitterThumb = withComponent({
    name: 'SplitterThumb',
    defaultProps: defaultThumbProps,
    setup() {
        const splitter = useSplitterContext();

        return { splitter };
    },
    render(instance) {
        const { props, ptmi, splitter } = instance;
        const indexRef = React.useRef<number | null>(null);
        const [currentSize, setCurrentSize] = React.useState(splitter?.prevSize);

        if (indexRef.current === null && splitter?.registerThumb) {
            indexRef.current = splitter?.registerThumb();
        }

        const index = indexRef.current ?? 0;

        React.useEffect(() => {
            if (splitter?.prevSize !== undefined) {
                setCurrentSize(splitter.prevSize);
            }
        }, [splitter?.prevSize]);

        const rootProps = mergeProps(
            {
                className: splitter?.cx('thumb'),
                style: splitter?.sx('thumb'),
                tabIndex: 0,
                'aria-orientation': splitter?.props?.orientation,
                'aria-valuenow': currentSize,
                onKeyUp: splitter?.onGutterKeyUp,
                onKeyDown: (e: React.KeyboardEvent) => splitter?.onGutterKeyDown(e, index)
            },
            splitter?.ptm('thumb'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
