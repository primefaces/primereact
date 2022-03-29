import React, { forwardRef } from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames } from '../utils/Utils';

export const TreeSelectPanel = forwardRef((props, ref) => {

    const createElement = () => {
        const wrapperStyle = { maxHeight: props.scrollHeight || 'auto' };
        const className = classNames('p-treeselect-panel p-component', props.panelClassName);

        return (
            <CSSTransition nodeRef={ref} classNames="p-connected-overlay" in={props.in} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={props.onEnter} onEntering={props.onEntering} onEntered={props.onEntered} onExit={props.onExit} onExited={props.onExited}>
                <div ref={ref} className={className} style={props.panelStyle} onClick={props.onClick}>
                    {props.header}
                    <div className="p-treeselect-items-wrapper" style={wrapperStyle}>
                        {props.children}
                    </div>
                    {props.footer}
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />
});
