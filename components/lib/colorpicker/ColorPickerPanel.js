import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames } from '../utils/Utils';

export const ColorPickerPanel = React.forwardRef((props, ref) => {
    const createElement = () => {
        const className = classNames('p-colorpicker-panel', props.panelClassName, {
            'p-colorpicker-overlay-panel': !props.inline,
            'p-disabled': props.disabled,
            'p-input-filled': PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': PrimeReact.ripple === false
        });

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
                <div ref={ref} className={className} style={props.panelStyle} onClick={props.onClick}>
                    {props.children}
                </div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return props.inline ? element : <Portal element={element} appendTo={props.appendTo} />;
});

ColorPickerPanel.displayName = 'ColorPickerPanel';
