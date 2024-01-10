import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { mergeProps } from '../utils/Utils';
import { PrimeReactContext } from '../api/Api';

export const TreeSelectPanel = React.forwardRef((props, ref) => {
    const context = React.useContext(PrimeReactContext);
    const { ptm, cx } = props;

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const createElement = () => {
        const wrapperStyle = { maxHeight: props.scrollHeight || 'auto' };

        const panelProps = mergeProps(
            {
                className: cx('panel', { panelProps: props, context }),
                style: props.panelStyle,
                onClick: props.onClick
            },
            getPTOptions('panel')
        );

        const wrapperProps = mergeProps(
            {
                className: cx('wrapper'),
                style: wrapperStyle
            },
            getPTOptions('wrapper')
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
            getPTOptions('transition')
        );

        return (
            <CSSTransition nodeRef={ref} {...transitionProps}>
                <div ref={ref} {...panelProps}>
                    {props.firstHiddenFocusableElementOnOverlay}
                    {props.header}
                    <div {...wrapperProps}>{props.children}</div>
                    {props.footer}
                    {props.lastHiddenFocusableElementOnOverlay}
                </div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />;
});

TreeSelectPanel.displayName = 'TreeSelectPanel';
