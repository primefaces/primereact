import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { mergeProps } from '../utils/Utils';

export const CalendarPanel = React.forwardRef((props, ref) => {
    const createElement = () => {
        const panelProps = mergeProps(
            {
                ref,
                className: props.className,
                style: props.style,
                onClick: props.onClick,
                onMouseUp: props.onMouseUp
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

CalendarPanel.displayName = 'CalendarPanel';
