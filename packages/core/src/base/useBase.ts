import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { BaseSetup, CommonInstance, Instance, useBaseOptions } from '@primereact/types/core';
import { isNotEmpty, resolve } from '@primeuix/utils';
import * as React from 'react';

export const useBase = <IProps extends { id?: string; ref?: React.Ref<unknown> }, DProps, PInstance, RData extends Record<PropertyKey, unknown>>(name: string = 'UnknownBase', options: useBaseOptions<IProps, DProps, PInstance, RData>) => {
    const $primereact = usePrimeReact();
    const { parent } = $primereact;
    const { inProps, defaultProps, setup } = options || {};

    const { props, attrs } = useProps(inProps, defaultProps);
    const id = useId(inProps?.id as string | undefined);
    const $attrSelector = useAttrSelector('pc_');

    const ref = React.useRef(inProps?.ref ?? null);
    const elementRef = React.useRef<HTMLElement>(null);

    const getParent = React.useCallback(<R>(type?: string) => (isNotEmpty(type) && parent?.type !== type ? parent?.$pc?.[type!] : parent) as R, [parent]);

    const common = React.useMemo<CommonInstance<typeof props, IProps, typeof parent>>(
        () => ({
            ref,
            elementRef,
            id,
            name,
            props,
            attrs,
            parent,
            inProps,
            $attrSelector,
            $primereact,
            getParent
        }),
        [id, props, attrs, parent, inProps, $attrSelector, $primereact, getParent]
    );

    const $computedSetup = resolve(setup as BaseSetup<typeof props, IProps, typeof parent, RData>, common) as RData;

    const instance = React.useMemo<Instance<typeof props, IProps, typeof parent, RData>>(
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

    React.useImperativeHandle(ref as React.Ref<Instance<typeof props, IProps, typeof parent, RData>>, () => instance, [instance]);

    return instance;
};
