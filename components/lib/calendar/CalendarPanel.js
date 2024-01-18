import * as React from 'react';
import { localeOption } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';

export const CalendarPanel = React.forwardRef((props, ref) => {
    const cx = props.cx;
    const mergeProps = useMergeProps();

    const createElement = () => {
        const panelProps = mergeProps(
            {
                className: cx('panel', { panelClassName: props.className }),
                style: props.style,
                role: props.inline ? null : 'dialog',
                id: props.id,
                'aria-label': localeOption('chooseDate', props.locale),
                'aria-modal': props.inline ? null : 'true',
                onClick: props.onClick,
                onMouseUp: props.onMouseUp
            },
            props.ptm('panel', { hostName: props.hostName })
        );

        const transitionProps = mergeProps(
            {
                classNames: cx('transition'),
                in: props.in,
                timeout: { enter: 120, exit: 100 },
                options: props.transitionOptions,
                unmountOnExit: true,
                onEnter: props.onEnter,
                onEntered: props.onEntered,
                onExit: props.onExit,
                onExited: props.onExited
            },
            props.ptm('transition', { hostName: props.hostName })
        );

        return (
            <CSSTransition nodeRef={ref} {...transitionProps}>
                <div ref={ref} {...panelProps}>
                    {props.children}
                </div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return props.inline ? element : <Portal element={element} appendTo={props.appendTo} />;
});

CalendarPanel.displayName = 'CalendarPanel';
