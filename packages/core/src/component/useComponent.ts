import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useProps } from '@primereact/hooks';
import type { ComponentInstance, withComponentSetup } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';
import { isNotEmpty, resolve } from '@primeuix/utils';
import * as React from 'react';
import { globalProps } from './Component.props';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = <P, D, S>(inProps?: P, defaultProps?: D, styles?: StylesOptions, setup?: withComponentSetup<S, D>): ComponentInstance<D> => {
    const { config, locale, passthrough, theme, parent } = usePrimeReact();

    const { props, attrs } = useProps(inProps as Record<string, unknown>, { ...globalProps, ...defaultProps } as Record<string, unknown>);
    const ref = React.useRef(props.ref);
    const name = props?.__TYPE as string | undefined;

    const common: ComponentInstance = {
        ref,
        name,
        props,
        attrs,
        parent,
        inProps,
        $primereact: {
            config,
            locale,
            passthrough,
            theme
        },
        getParent: (type?: string) => (isNotEmpty(type) ? instance.$pc?.[type!] : instance.parent)
    };

    const $attrSelector = useAttrSelector('pc_');

    const computed = {
        $attrSelector,
        ...resolve(setup, common),
        ...common
    };

    const ptx = useComponentPT(computed);
    const stx = useComponentStyle(computed, props.styles || styles);

    const instance = {
        ...computed,
        ...ptx,
        ...stx
    };

    // Inject parent component instances and self instance
    instance.$pc = {
        ...parent?.$pc,
        [`${name}`]: instance
    };

    React.useEffect(() => {
        combinedRefs(ref, props.ref);
    }, [ref, props.ref]);

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
