'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './SplitterPanel.props';

export const SplitterPanel = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi, ref } = instance;
        const splitter = getParent('Splitter');
        const indexRef = React.useRef<number | null>(null);
        const [flexBasisValue, setFlexBasisValue] = React.useState<string>('');
        const children = ref?.current?.inProps?.children;

        const isNested = React.useMemo(() => {
            if (!children) return false;

            if (React.isValidElement(children)) {
                return children.type?.displayName === 'PrimeReact.Splitter';
            }

            return false;
        }, [children]);

        if (indexRef.current === null && splitter?.registerPanel) {
            indexRef.current = splitter?.registerPanel();
        }

        const index = indexRef.current ?? 0;

        React.useEffect(() => {
            if (!splitter?.panelSizes || !splitter?.panelCounter?.current) return;

            const panelSize = (sizes: number[] | undefined, idx: number): number => {
                if (!sizes || sizes.length === 0) return props.size || 100 / splitter?.panelCounter.current;

                return idx in sizes ? sizes[idx] : props.size || 100 / splitter?.panelCounter.current;
            };

            const size = panelSize(splitter?.panelSizes, index);
            const gutterSize = Number(splitter?.props?.gutterSize || 0);
            const panelCount = splitter?.panelCounter?.current || 1;

            const value = `calc(${size}% - ${(panelCount - 1) * gutterSize}px)`;

            setFlexBasisValue(value);
        }, [splitter?.panelSizes, splitter?.panelCounter?.current, index, props.size, splitter?.props?.gutterSize]);

        const panelProps = mergeProps(
            {
                className: cn(['p-splitterpanel', { 'p-splitterpanel-nested': isNested }]),
                style: { flexBasis: flexBasisValue }
            },
            splitter?.ptm('panel'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...panelProps} data-pc-index={index}>
                {props.children}
            </Component>
        );
    }
});
