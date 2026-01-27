import { withHeadless } from '@primereact/core/headless';
import { useCollapsible } from '@primereact/headless/collapsible';
import * as React from 'react';
import { defaultProps } from './useFieldset.props';

export const useFieldset = withHeadless({
    name: 'useFieldset',
    defaultProps,
    setup({ props }) {
        const collapsible = useCollapsible(props);

        // methods
        const onTriggerClick = (event?: React.SyntheticEvent) => {
            collapsible?.toggle(event);
            event?.preventDefault();
        };

        return {
            ...collapsible,
            onTriggerClick
        };
    }
});
