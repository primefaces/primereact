import { useBase } from '@primereact/core/base';
import type { HeadlessInstance, useHeadlessOptions } from '@primereact/types/core';

export const useHeadless = <IProps, DProps, Exposes extends Record<PropertyKey, unknown>>(name: string = 'UnknownHeadless', options: useHeadlessOptions<IProps, DProps, Exposes> = {}) => {
    const baseInstance = useBase(name, options as useHeadlessOptions<IProps & { id?: string; ref?: React.Ref<unknown> }, typeof options.defaultProps & DProps, Exposes>);

    return baseInstance as HeadlessInstance<DProps, IProps, Exposes>;
};
