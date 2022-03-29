import React, { forwardRef } from 'react';
import { Portal } from '../portal/Portal';
import { classNames } from '../utils/Utils';
import { CSSTransition } from '../csstransition/CSSTransition';

export const ColorPickerPanel = forwardRef((props, ref) => {

    const createElement = () => {
        const className = classNames('p-colorpicker-panel', {
            'p-colorpicker-overlay-panel': !props.inline,
            'p-disabled': props.disabled
        });

        return (
            <CSSTransition nodeRef={ref} classNames="p-connected-overlay" in={props.in} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={props.onEnter} onEntered={props.onEntered} onExit={props.onExit} onExited={props.onExited}>
                <div ref={ref} className={className} onClick={props.onClick}>
                    {props.children}
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return props.inline ? element : <Portal element={element} appendTo={props.appendTo} />;
});
