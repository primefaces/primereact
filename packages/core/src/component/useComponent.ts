import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useProps } from '@primereact/hooks';
import type { CommonComponentInstance, ComponentInstance, ComputedComponentInstance, useComponentOptions, withComponentSetup } from '@primereact/types/core';
import { isNotEmpty, resolve } from '@primeuix/utils';
import * as React from 'react';
import { globalProps } from './Component.props';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = <I, D, S>(name: string = 'UnknownComponent', options: useComponentOptions<I, D, S> = {}) => {
    const { config, locale, passthrough, theme, parent } = usePrimeReact();
    const { inProps, defaultProps, styles, setup } = options;

    const { props, attrs } = useProps(inProps, { ...globalProps, ...defaultProps });
    const ref = React.useRef(props.ref ?? null);

    const common: CommonComponentInstance<typeof props, I, typeof parent> = {
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

    const computed: ComputedComponentInstance<typeof props, I, typeof parent, S> = {
        state: {},
        $attrSelector,
        ...(resolve(setup as withComponentSetup<typeof props, I, S>, common) as S),
        ...common
    };

    const ptx = useComponentPT(computed);
    const stx = useComponentStyle(computed, props.styles || styles);

    const instance: ComponentInstance<typeof props, I, typeof parent, S> = {
        ...computed,
        ...ptx,
        ...stx,
        $pc: {}
    };

    // Inject parent component instances and self instance
    instance.$pc = {
        ...parent?.$pc,
        [name]: instance as ComponentInstance // @todo - update type
    };

    React.useEffect(() => {
        combinedRefs(ref, props.ref);
    }, [ref, props.ref]);

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
