import { PrimeReactContext } from '@primereact/core/config';
import { LocaleContext } from '@primereact/core/locale';
import { PassThroughContext } from '@primereact/core/passthrough';
import { ThemeContext } from '@primereact/core/theme';
import { combinedRefs } from '@primereact/core/utils';
import { useProps } from '@primereact/hooks';
import type { ComponentInstance, WithComponentCallback } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';
import * as React from 'react';
import { ComponentContext } from './Component.context';
import { globalProps } from './Component.props';
import { useComponent } from './useComponent';

export const withComponent = <DP extends Record<string, unknown>>(callback: WithComponentCallback, defaultProps: DP, styles?: StylesOptions) => {
    return <P extends Record<string, unknown>>(inProps?: P): React.JSX.Element | undefined => {
        const config = React.useContext(PrimeReactContext);
        const locale = React.useContext(LocaleContext);
        const passthrough = React.useContext(PassThroughContext);
        const theme = React.useContext(ThemeContext);
        const parent = React.useContext(ComponentContext);

        const { props, attrs } = useProps(inProps as Record<string, unknown>, { ...globalProps, ...defaultProps });
        const ref = React.useRef(props.ref);
        const name = props?.__TYPE as string | undefined;

        const instance: ComponentInstance<unknown> = {
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
            }
        };

        React.useEffect(() => {
            combinedRefs(ref, props.ref);
        }, [ref, props.ref]);

        return useComponent(instance, ref, styles, callback);
    };
};
