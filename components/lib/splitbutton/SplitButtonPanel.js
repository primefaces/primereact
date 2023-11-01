import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { PrimeReactContext } from '../api/Api';
import { mergeProps } from '../utils/Utils';

export const SplitButtonPanel = React.forwardRef((props, ref) => {
    const { ptm, cx } = props;
    const context = React.useContext(PrimeReactContext);

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const createElement = () => {
        const menuProps = mergeProps(
            [
                {
                    ref: ref,
                    className: cx('menu', { subProps: props }),
                    style: props.menuStyle,
                    onClick: props.onClick
                },
                getPTOptions('menu')
            ],
            { useTailwind: context.useTailwind }
        );

        const menuListProps = mergeProps(
            [
                {
                    id: props.menuId,
                    className: cx('menuList'),
                    role: 'menu'
                },
                getPTOptions('menuList')
            ],
            { useTailwind: context.useTailwind }
        );

        const transitionProps = mergeProps(
            [
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
            ],
            { useTailwind: context.useTailwind }
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
