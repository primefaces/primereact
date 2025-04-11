import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { HeadlessInstance, useHeadlessOptions } from '@primereact/types/core';
import * as React from 'react';

export const useHeadless = <I, D, S>(name: string = 'UnknownHeadless', options: useHeadlessOptions<I, D, S> = {}) => {
    const { config, locale } = usePrimeReact();
    const { inProps, defaultProps, setup } = options;

    const { props, attrs } = useProps(inProps, defaultProps);
    const id = useId(inProps?.id as string | undefined);
    const $attrSelector = useAttrSelector('pc_');
    const elementRef = React.useRef<HTMLElement>(null);
    const ref = React.useRef(inProps?.ref);

    const common: Partial<HeadlessInstance<typeof props, I>> = {
        ref,
        elementRef,
        id,
        name,
        props,
        attrs,
        state: {},
        inProps,
        $attrSelector,
        $primereact: {
            config,
            locale
        }
    };

    const instance: HeadlessInstance & S = {
        ...common,
        ...setup?.(common)
    };

    React.useEffect(() => {
        combinedRefs(ref, inProps?.ref);
    }, [ref, inProps?.ref]);

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
