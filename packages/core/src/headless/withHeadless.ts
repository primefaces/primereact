import { ComponentContext } from '@primereact/core/component';
import { PrimeReactContext } from '@primereact/core/config';
import { LocaleContext } from '@primereact/core/locale';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { HeadlessInstance, WithHeadlessCallback } from '@primereact/types/core';
import * as React from 'react';
import { useHeadless } from './useHeadless';

export const withHeadless = <DP extends Record<string, unknown>>(callback: WithHeadlessCallback, defaultProps?: DP) => {
    return <P extends Record<string, unknown>, R = unknown>(inProps?: P, inRef?: React.Ref<R>): HeadlessInstance => {
        const config = React.useContext(PrimeReactContext);
        const locale = React.useContext(LocaleContext);
        const parent = React.useContext(ComponentContext);

        const { props, attrs } = useProps(inProps as Record<string, unknown>, defaultProps as Record<string, unknown>);
        const id = useId((props?.id || attrs?.id) as string | undefined);
        const $attrSelector = useAttrSelector('pc');
        const elementRef = React.useRef<HTMLElement>(null);
        const ref = React.useRef(inRef);
        const name = props?.__TYPE as string | undefined;

        const instance: HeadlessInstance = {
            ref,
            elementRef,
            id,
            name,
            props,
            attrs,
            state: undefined,
            parent,
            inProps,
            $attrSelector,
            $primereact: {
                config,
                locale
            }
        };

        React.useEffect(() => {
            combinedRefs(ref, inRef);
        }, [ref, inRef]);

        return useHeadless(instance, ref, callback);
    };
};
