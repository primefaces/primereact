import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useRadioButtonChangeEvent } from '@primereact/types/shared/radiobutton';
import { defaultProps } from './useRadioButton.props';

export const useRadioButton = withHeadless({
    name: 'useRadioButton',
    defaultProps,
    setup: ({ props }) => {
        const [checkedState, setCheckedState] = useControlledState<boolean | undefined>({
            value: props.checked,
            defaultValue: props.defaultChecked ?? false,
            onChange: props.onCheckedChange
        });

        const state = {
            checked: checkedState
        };

        // methods
        const onChange = (event: useRadioButtonChangeEvent) => {
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
