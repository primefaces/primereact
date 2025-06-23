import { ComponentBase } from '../componentbase/ComponentBase';

const styles = '';

export const StepperPanelBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'StepperPanel',
        children: undefined,
        header: null
    },
    css: {
        styles
    }
});
