import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { BaseInstance, BaseSetup, CommonInstance, Instance, useBaseOptions } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

/**
 * A custom hook for creating a base instance.
 * This hook is used to initialize a base instance with common properties and methods.
 * It handles props, attributes, and provides a setup function for additional configuration.
 * @param name The name of the base instance.
 * @param options The options for the base instance.
 * @returns The base instance.
 */
export const useBase = <IProps extends { id?: string; ref?: React.Ref<unknown> }, DProps, Exposes extends Record<PropertyKey, unknown>>(name: string = 'UnknownBase', options: useBaseOptions<IProps, DProps, Exposes>) => {
    const $primereact = usePrimeReact();
    const { inProps, defaultProps, setup } = options || {};

    const id = useId(inProps?.id as string | undefined);
    const $attrSelector = useAttrSelector('pc_');

    const ref = React.useRef(inProps?.ref ?? null);
    const elementRef = React.useRef<HTMLElement | null>(null);

    const base = React.useMemo<BaseInstance<IProps>>(
        () => ({
            ref,
            elementRef,
            id,
            name,
            inProps,
            $attrSelector,
            $primereact
        }),
        [id, inProps, $attrSelector, $primereact]
    );

    const computedDefaultProps = React.useMemo<DProps>(() => {
        const globalDefaults = resolve($primereact?.config?.defaults?.[name] || $primereact?.config?.defaults?.[name.toLowerCase()], base) as { props?: DProps } | undefined;

        return { ...defaultProps, ...globalDefaults?.props } as DProps;
    }, [defaultProps, $primereact?.config?.defaults?.[name]]);

    const { props, attrs } = useProps(inProps, computedDefaultProps);

    const common = React.useMemo<CommonInstance<typeof props, IProps>>(
        () => ({
            ...base,
            props,
            attrs
        }),
        [base, props, attrs]
    );

    const $computedSetup = resolve(setup as BaseSetup<typeof props, IProps, Exposes>, common) as Exposes;

    const instance = React.useMemo<Instance<typeof props, IProps, Record<PropertyKey, unknown>, Exposes>>(
        () => ({
            state: {},
            $computedSetup,
            ...$computedSetup,
            ...common,
            elementRef: ($computedSetup?.elementRef ?? elementRef) as React.RefObject<HTMLElement | null>
        }),
        [$computedSetup, common]
    );

    React.useEffect(() => {
        combinedRefs(ref, inProps?.ref);
    }, [ref, inProps?.ref]);

    React.useImperativeHandle(ref as React.Ref<Instance<typeof props, IProps, typeof instance.state, Exposes>>, () => instance, [instance]);

    return instance;
};
