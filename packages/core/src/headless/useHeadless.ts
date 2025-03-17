import { PrimeReactContext } from '@primereact/core/config';
import { LocaleContext } from '@primereact/core/locale';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { HeadlessInstance } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

export const useHeadless = (inProps?: any, defaultProps?: D, exposed?: (instance: any) => any): HeadlessInstance => {
    const config = React.useContext(PrimeReactContext);
    const locale = React.useContext(LocaleContext);

    const { props, attrs } = useProps(inProps as Record<string, unknown>, defaultProps as Record<string, unknown>);
    const id = useId(inProps?.id as string | undefined);
    const $attrSelector = useAttrSelector('pc_');
    const elementRef = React.useRef<HTMLElement>(null);
    const ref = React.useRef(inProps?.ref);
    const name = props?.__TYPE as string | undefined;

    const common: HeadlessInstance = {
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

    const instance = {
        ...common,
        ...resolve(exposed, common)
    };

    React.useEffect(() => {
        combinedRefs(ref, inProps?.ref);
    }, [ref, inProps?.ref]);

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
