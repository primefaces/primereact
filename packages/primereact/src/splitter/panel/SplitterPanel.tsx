'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSplitterContext } from '../Splitter.context';
import { defaultPanelProps } from './SplitterPanel.props';

export const SplitterPanel = withComponent({
    name: 'SplitterPanel',
    defaultProps: defaultPanelProps,
    setup() {
        const splitter = useSplitterContext();

        return { splitter };
    },
    render(instance) {
        const { props, ptmi, splitter, inProps } = instance;
        const indexRef = React.useRef<number | null>(null);
        const [flexBasisValue, setFlexBasisValue] = React.useState<string>('');
        const children = inProps?.children;

        const isNested = React.useMemo(() => {
            if (!React.isValidElement(children)) return false;

            return (children.type as React.ComponentType).displayName === 'PrimeReact.Splitter';
        }, [children]);

        if (indexRef.current === null && splitter?.registerPanel) {
            indexRef.current = splitter?.registerPanel();
        }

        const index = indexRef.current ?? 0;

        const panelSize = (sizes: number[] | undefined, panelCount: number): number => {
            if (!sizes || sizes.length === 0) return props.size || 100 / panelCount;

            return index in sizes ? sizes[index] : props.size || 100 / panelCount;
        };

        React.useEffect(() => {
            if (!splitter?.panelSizes || !splitter?.panelCounter) return;

            const panelCount = splitter?.panelCounter?.current || 1;
            const gutterSize = splitter?.props?.gutterSize || 0;
            const size = panelSize(splitter?.panelSizes, panelCount);
            const value = `calc(${size}% - ${(panelCount - 1) * gutterSize}px)`;

            setFlexBasisValue(value);
        }, [splitter?.panelSizes, splitter?.panelCounter, index, props.size, splitter?.props?.gutterSize]);

        const rootProps = mergeProps(
            {
                className: splitter?.cx('panel', { isNested }),
                style: { flexBasis: flexBasisValue }
            },
            splitter?.ptm('panel'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
