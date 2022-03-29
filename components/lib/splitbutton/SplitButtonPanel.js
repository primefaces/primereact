import React, { forwardRef } from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames } from '../utils/Utils';

export const SplitButtonPanel = forwardRef((props, ref) => {

    const createElement = () => {
        const className = classNames('p-menu p-menu-overlay p-component', props.menuClassName);

        return (
            <CSSTransition nodeRef={ref} classNames="p-connected-overlay" in={props.in} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={props.onEnter} onEntered={props.onEntered} onExit={props.onExit} onExited={props.onExited}>
                <div ref={ref} className={className} style={props.menuStyle} id={props.id} onClick={props.onClick}>
                    <ul className="p-menu-list p-reset" role="menu">
                        {props.children}
                    </ul>
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />
});
