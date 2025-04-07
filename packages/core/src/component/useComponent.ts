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

export const useComponent = <I, D extends { __TYPE?: string }, S>(inProps?: I, defaultProps?: D, styles?: StylesOptions, setup?: withComponentSetup<S, unknown>) => {
    const { config, locale, passthrough, theme, parent } = usePrimeReact();

    const { props, attrs } = useProps(inProps, { ...globalProps, ...defaultProps });
    const ref = React.useRef(props.ref ?? null);
    const name = props?.__TYPE;

    type CommonKeys = 'ref' | 'name' | 'props' | 'attrs' | 'parent' | 'inProps' | '$primereact' | 'getParent';
    type CommonComponentInstance = Pick<ComponentInstance<typeof props, I, typeof parent>, CommonKeys>;

    const common: CommonComponentInstance = {
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
        ...(resolve(setup, common) as S),
        ...common
    };

    const ptx = useComponentPT(computed);
    const stx = useComponentStyle(computed, props.styles || styles);

    const instance: ComponentInstance<typeof props, I, typeof parent> & S = {
        ...computed,
        ...ptx,
        ...stx,
        $pc: {}
    };

    // Inject parent component instances and self instance
    instance.$pc = {
        ...parent?.$pc,
        [`${name}`]: instance as ComponentInstance
    };

    React.useEffect(() => {
        combinedRefs(ref, props.ref);
    }, [ref, props.ref]);

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
