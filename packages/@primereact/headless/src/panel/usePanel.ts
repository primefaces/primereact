import { withHeadless } from '@primereact/core/headless';
import { useCollapsible } from '@primereact/headless/collapsible';
import { defaultProps } from './usePanel.props';

export const usePanel = withHeadless({
    name: 'usePanel',
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
