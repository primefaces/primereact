import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { useMergeProps } from '../utils/Utils';

export const SplitButtonPanel = React.forwardRef((props, ref) => {
    const mergeProps = useMergeProps();
    const { ptm, cx } = props;

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const createElement = () => {
        const menuProps = mergeProps(
            {
                ref: ref,
                className: cx('menu', { subProps: props }),
                style: props.menuStyle,
                onClick: props.onClick
            },
            getPTOptions('menu')
        );

        const menuListProps = mergeProps(
            {
                id: props.menuId,
                className: cx('menuList'),
                role: 'menu'
            },
            getPTOptions('menuList')
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
                <div {...menuProps}>
                    <ul {...menuListProps}>{props.children}</ul>
                </div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />;
});

SplitButtonPanel.displayName = 'SplitButtonPanel';
