import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames, mergeProps } from '../utils/Utils';
import PrimeReact from '../api/Api';

export const ColorPickerPanel = React.forwardRef((props, ref) => {
    const context = React.useContext(PrimeReactContext);

    const createElement = () => {
        const className = classNames('p-colorpicker-panel', props.panelClassName, {
            'p-colorpicker-overlay-panel': !props.inline,
            'p-disabled': props.disabled,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        });
        const panelProps = mergeProps(
            {
                ref,
                className,
                style: props.panelStyle,
                onClick: props.onClick
            },
            props.ptm('panel')
        );

        return (
            <CSSTransition
                nodeRef={ref}
                classNames="p-connected-overlay"
                in={props.in}
                timeout={{ enter: 120, exit: 100 }}
                options={props.transitionOptions}
                unmountOnExit
                onEnter={props.onEnter}
                onEntered={props.onEntered}
                onExit={props.onExit}
                onExited={props.onExited}
            >
                <div {...panelProps}>{props.children}</div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return props.inline ? element : <Portal element={element} appendTo={props.appendTo} />;
});

ColorPickerPanel.displayName = 'ColorPickerPanel';
