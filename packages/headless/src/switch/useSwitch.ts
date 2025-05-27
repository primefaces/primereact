import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useSwitchChangeEvent } from '@primereact/types/shared/switch';
import { defaultProps } from './useSwitch.props';

export const useSwitch = withHeadless({
    name: 'useSwitch',
    defaultProps,
    setup({ props }) {
        const [checkedState, setCheckedState] = useControlledState<boolean | undefined>({
            value: props.checked,
            defaultValue: props.defaultChecked ?? false,
            onChange: props.onCheckedChange
        });

        const state = {
            checked: checkedState
        };

        // methods
        const onChange = (event: useSwitchChangeEvent) => {
            const computedChecked = !checkedState;

            setCheckedState([
                computedChecked,
                {
                    originalEvent: event,
                    checked: computedChecked
                }
            ]);
        };

        return {
            state,
            // methods
            onChange
        };
    }
});
