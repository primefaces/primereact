import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { defaultProps } from './useInplace.props';

export const useInplace = withHeadless({
    name: 'useInplace',
    defaultProps,
    setup: ({ props }) => {
        const [activeState, setActiveState] = useControlledState({
            value: props.active,
            defaultValue: props.defaultActive ?? false,
            onChange: props.onActiveChange
        });

        const state = {
            active: activeState
        };

        // methods
        const open = () =>
            setActiveState([
                true,
                {
                    originalEvent: undefined,
                    active: true
                }
            ]);
        const close = () =>
            setActiveState([
                false,
                {
                    originalEvent: undefined,
                    active: false
                }
            ]);

        return {
            state,
            open,
            close
        };
    }
});
