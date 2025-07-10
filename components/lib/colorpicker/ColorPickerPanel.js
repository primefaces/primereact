import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';

export const ColorPickerPanel = React.forwardRef((props, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const { ptm, cx } = props;

    const createElement = () => {
        const panelProps = mergeProps(
            {
                className: cx('panel', { panelProps: props, context }),
                style: props.panelStyle,
                onClick: props.onClick,
                'data-pr-is-overlay': true
            },
            ptm('panel', { hostName: props.hostName })
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
            ptm('transition', { hostName: props.hostName })
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

ColorPickerPanel.displayName = 'ColorPickerPanel';
