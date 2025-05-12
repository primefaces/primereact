import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { BaseSetup, CommonInstance, Instance, useBaseOptions } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

export const useBase = <IProps extends { id?: string; ref?: React.Ref<unknown> }, DProps, Exposes extends Record<PropertyKey, unknown>>(name: string = 'UnknownBase', options: useBaseOptions<IProps, DProps, Exposes>) => {
    const $primereact = usePrimeReact();
    const { inProps, defaultProps, setup } = options || {};

    const { props, attrs } = useProps(inProps, defaultProps);
    const id = useId(inProps?.id as string | undefined);
    const $attrSelector = useAttrSelector('pc_');

    const ref = React.useRef(inProps?.ref ?? null);
    const elementRef = React.useRef<HTMLElement>(null);

    const common = React.useMemo<CommonInstance<typeof props, IProps>>(
        () => ({
            ref,
            elementRef,
            id,
            name,
            props,
            attrs,
            inProps,
            $attrSelector,
            $primereact
        }),
        [id, props, attrs, inProps, $attrSelector, $primereact]
    );

    const $computedSetup = resolve(setup as BaseSetup<typeof props, IProps, Exposes>, common) as Exposes;

    const instance = React.useMemo<Instance<typeof props, IProps, Record<PropertyKey, unknown>, Exposes>>(
        () => ({
            state: {},
            $computedSetup,
            ...$computedSetup,
            ...common,
            elementRef: ($computedSetup?.elementRef ?? elementRef) as React.RefObject<HTMLElement>
        }),
        [$computedSetup, common]
    );

    React.useEffect(() => {
        combinedRefs(ref, inProps?.ref);
    }, [ref, inProps?.ref]);

    React.useImperativeHandle(ref as React.Ref<Instance<typeof props, IProps, typeof instance.state, Exposes>>, () => instance, [instance]);

    return instance;
};
