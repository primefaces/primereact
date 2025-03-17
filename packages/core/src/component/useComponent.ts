import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useProps } from '@primereact/hooks';
import { ComponentInstance } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';
import { isNotEmpty, resolve } from '@primeuix/utils';
import * as React from 'react';
import { globalProps } from './Component.props';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = <P, D, E>(inProps?: P, defaultProps?: D, styles?: StylesOptions, exposed?: E): ComponentInstance<D> => {
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

    const computed = {
        ...resolve(exposed, common),
        ...common
    };

    const ptx = useComponentPT(computed);
    const stx = useComponentStyle(computed, styles);

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
