import { ComponentContext } from '@primereact/core/component';
import { PrimeReactContext } from '@primereact/core/config';
import { LocaleContext } from '@primereact/core/locale';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import * as React from 'react';
import { useHeadless } from './useHeadless';

export const withHeadless = (callback: any, defaultProps?: Record<string, any>) => {
    return (inProps?: any, inRef?: any) => {
        const config = React.useContext(PrimeReactContext);
        const locale = React.useContext(LocaleContext);
        const parent = React.useContext(ComponentContext);

        const { props, attrs } = useProps(inProps as Record<string, unknown>, defaultProps);
        const id = useId(props?.id || attrs?.id);
        const $attrSelector = useAttrSelector('pc');
        const elementRef = React.useRef<HTMLElement>(null);
        const ref = React.useRef<any>(inRef);
        const name = props?.__TYPE;

        const instance = {
            ref,
            elementRef,
            id,
            name,
            props,
            attrs,
            state: {},
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
