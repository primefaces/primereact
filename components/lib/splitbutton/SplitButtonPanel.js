import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames, mergeProps } from '../utils/Utils';

export const SplitButtonPanel = React.forwardRef((props, ref) => {
    const createElement = () => {
        const className = classNames('p-menu p-menu-overlay p-component', props.menuClassName);

        const menuProps = mergeProps(
            {
                ref: ref,
                className: className,
                style: props.menuStyle,
                onClick: props.onClick
            },
            props.ptm('menu')
        );

        const menuListProps = mergeProps(
            {
                id: props.menuId,
                className: 'p-menu-list p-reset',
                role: 'menu'
            },
            props.ptm('menuList')
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
