import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, horizontal, vertical }) =>
        classNames(
            `p-divider p-component p-divider-${props.layout} p-divider-${props.type}`,
            {
                'p-divider-left': horizontal && (!props.align || props.align === 'left'),
                'p-divider-right': horizontal && props.align === 'right',
                'p-divider-center': (horizontal && props.align === 'center') || (vertical && (!props.align || props.align === 'center')),
                'p-divider-top': vertical && props.align === 'top',
                'p-divider-bottom': vertical && props.align === 'bottom'
            },
            props.className
        ),
    content: 'p-divider-content'
};

const styles = `
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`;

const inlineStyles = {
    root: ({ props }) => ({
        justifyContent: props.layout === 'horizontal' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null) : null,
        alignItems: props.layout === 'vertical' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null) : null
    })
};

export const DividerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Divider',
        align: null,
        layout: 'horizontal',
        type: 'solid',
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
