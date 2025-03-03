import { PrimeReactContext } from '@primereact/core/config';
import { LocaleContext } from '@primereact/core/locale';
import { PassThroughContext } from '@primereact/core/passthrough';
import { ThemeContext } from '@primereact/core/theme';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import { toValue } from '@primeuix/utils';
import * as React from 'react';
import { ComponentContext } from './Component.context';
import { globalProps } from './Component.props';
import { ComponentInstance } from './Component.types';
import { useComponent } from './useComponent';

export type WithComponentCallback<P, R, S> = (props: P, ref: React.Ref<R>, state: S) => any;

export const withComponent = (callback: WithComponentCallback<any, any, any>, defaultProps: Record<string, any>, style?: string) => {
    return <P, R, S extends Record<string, unknown>>(inProps: P, ref: React.Ref<R>, state: S = {} as S) => {
        const config = React.useContext(PrimeReactContext);
        const locale = React.useContext(LocaleContext);
        const theme = React.useContext(ThemeContext);
        const passthrough = React.useContext(PassThroughContext);
        const parent = React.useContext(ComponentContext);

        const { props, attrs } = useProps(inProps as Record<string, unknown>, { ...globalProps, ...defaultProps });
        const id = useId(props.id || attrs.id);
        const $attrSelector = useAttrSelector('pc');
        const elementRef = React.useRef<HTMLElement>(null);
        const name = props.__TYPE;

        const instance: ComponentInstance<R> = {
            ref,
            elementRef,
            id,
            name,
            props,
            attrs,
            state,
            style,
            parent,
            $el: toValue(elementRef) as HTMLElement,
            $primereact: {
                config,
                locale,
                theme,
                passthrough
            },
            $attrSelector
        };

        return useComponent(instance, ref, callback);
    };
};
