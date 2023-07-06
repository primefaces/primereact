import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames, mergeProps } from '../utils/Utils';
import { PrimeReactContext } from '../api/Api';
import PrimeReact from '../api/Api';

export const TreeSelectPanel = React.forwardRef((props, ref) => {
    const context = React.useContext(PrimeReactContext);

    const createElement = () => {
        const wrapperStyle = { maxHeight: props.scrollHeight || 'auto' };
        const className = classNames('p-treeselect-panel p-component', props.panelClassName, {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        });

        const panelProps = mergeProps(
            {
                ref: ref,
                className: className,
                style: props.panelStyle,
                onClick: props.onClick
            },
            props.ptm('panel')
        );

        const wrapperProps = mergeProps(
            {
                className: 'p-treeselect-items-wrapper',
                style: wrapperStyle
            },
            props.ptm('wrapper')
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
                onEntering={props.onEntering}
                onEntered={props.onEntered}
                onExit={props.onExit}
                onExited={props.onExited}
            >
                <div {...panelProps}>
                    {props.header}
                    <div {...wrapperProps}>{props.children}</div>
                    {props.footer}
                </div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />;
});

TreeSelectPanel.displayName = 'TreeSelectPanel';
