import { useComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/icon';
import { IconProps } from '@primereact/types/core';
import { defaultProps } from './Icon.props';
import { useIcon } from './useIcon';

export const Icon = (inProps: IconProps) => {
    const icon = useIcon(inProps);
    const instance = useComponent(inProps, defaultProps, styles, icon);
    const { props, ptmi, pti, cx } = instance;
    // @todo - create a generic component
    return null;
};
