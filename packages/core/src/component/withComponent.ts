import { PrimeReactContext } from '@primereact/core/config';
import { LocaleContext } from '@primereact/core/locale';
import { PassThroughContext } from '@primereact/core/passthrough';
import { ThemeContext } from '@primereact/core/theme';
import { combinedRefs } from '@primereact/core/utils';
import { useProps } from '@primereact/hooks';
import * as React from 'react';
import { ComponentContext } from './Component.context';
import { globalProps } from './Component.props';
import { ComponentInstance } from './Component.types';
import { useComponent } from './useComponent';

export type WithComponentCallback<P, R, S> = (props: P, ref: React.Ref<R>, state: S) => any;

export const withComponent = (callback: WithComponentCallback<any, any, any>, defaultProps: Record<string, any>, styles?: any) => {
    return <P, R, S extends Record<string, unknown>>(inProps: P): any => {
        const config = React.useContext(PrimeReactContext);
        const locale = React.useContext(LocaleContext);
        const passthrough = React.useContext(PassThroughContext);
        const theme = React.useContext(ThemeContext);
        const parent = React.useContext(ComponentContext);

        const { props, attrs } = useProps(inProps as Record<string, unknown>, { ...globalProps, ...defaultProps });
        const ref = React.useRef<any>(props.ref);

        const instance: ComponentInstance<R> = {
            ref,
            props,
            attrs,
            parent,
            inProps,
            $primereact: {
                config,
                locale,
                passthrough,
                theme
            }
        };

        React.useEffect(() => {
            combinedRefs(ref, props.ref);
        }, [ref, props.ref]);

        return useComponent(instance, ref, styles, callback);
    };
};
