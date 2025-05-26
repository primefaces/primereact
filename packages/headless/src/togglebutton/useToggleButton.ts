import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useToggleButtonChangeEvent } from '@primereact/types/shared/togglebutton';
import { defaultProps } from './useToggleButton.props';

export const useToggleButton = withHeadless({
    name: 'useToggleButton',
    defaultProps,
    setup({ props }) {
        const [pressedState, setPressedState] = useControlledState<boolean | undefined>({
            value: props.pressed,
            defaultValue: props.defaultPressed ?? false,
            onChange: props.onPressedChange
        });

        const state = {
            pressed: pressedState
        };

        // methods
        const onChange = (event: useToggleButtonChangeEvent) => {
            const computedPressed = !pressedState;

            setPressedState([
                computedPressed,
                {
                    originalEvent: event,
                    pressed: computedPressed
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
