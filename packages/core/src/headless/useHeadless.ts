import { useBase } from '@primereact/core/base';
import type { HeadlessInstance, useHeadlessOptions } from '@primereact/types/core';

export const useHeadless = <IProps, DProps, PInstance, RData>(name: string = 'UnknownHeadless', options: useHeadlessOptions<IProps, DProps, PInstance, RData> = {}) => {
    const baseInstance = useBase(name, options as useHeadlessOptions<IProps & { id?: string; ref?: React.Ref<unknown> }, typeof options.defaultProps, PInstance, RData>);

    return baseInstance as HeadlessInstance<DProps, IProps, PInstance, RData>;
};
