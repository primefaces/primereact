import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-stepper p-component', {
            'p-stepper-horizontal': props.orientation === 'horizontal',
            'p-stepper-vertical': props.orientation === 'vertical',
            'p-readonly': props.linear
        }),
    nav: 'p-stepper-nav',
    stepper: {
        header: ({ isStepActive, isItemDisabled, index }) => {
            return classNames('p-stepper-header', {
                'p-highlight': isStepActive(index),
                'p-disabled': isItemDisabled(index)
            });
        },
        action: 'p-stepper-action p-component',
        number: 'p-stepper-number',
        title: 'p-stepper-title',
        separator: 'p-stepper-separator',
        toggleableContent: 'p-stepper-toggleable-content',
        content: ({ props }) =>
            classNames('p-stepper-content', {
                'p-toggleable-content': props.orientation === 'vertical'
            })
    },
    panelContainer: 'p-stepper-panels',
    panel: ({ props, isStepActive, index }) =>
        classNames('p-stepper-panel', {
            'p-stepper-panel-active': props.orientation === 'vertical' && isStepActive(index)
        })
};

const styles = `
@layer primereact {
    .p-stepper .p-stepper-nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }
    
    .p-stepper-vertical .p-stepper-nav {
        flex-direction: column;
    }
    
    .p-stepper-header {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
    
        &:last-of-type {
            flex: initial;
        }
    }
    
    .p-stepper-header .p-stepper-action {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
    
        &:focus-visible {
            @include focused();
        }
    }
    
    .p-stepper.p-stepper-readonly .p-stepper-header {
        cursor: auto;
    }
    
    .p-stepper-header.p-highlight .p-stepper-action {
        cursor: default;
    }
    
    .p-stepper-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }
    
    .p-stepper-number {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-stepper-separator {
        flex: 1 1 0;
    }
}
`;

export const StepperBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Stepper',
        activeStep: 0,
        orientation: 'horizontal',
        linear: false
    },
    css: {
        classes,
        styles
    }
});
