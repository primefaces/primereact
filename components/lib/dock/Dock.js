import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { DockBase } from './DockBase';
import { PrimeReactContext } from '../api/Api';

export const Dock = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = DockBase.getProps(inProps, context);

        const [currentIndexState, setCurrentIndexState] = React.useState(-3);
        const { ptm } = DockBase.setMetaData({
            props,
            state: {
                currentIndex: currentIndexState
            }
        });
        const elementRef = React.useRef(null);

        const onListMouseLeave = () => {
            setCurrentIndexState(-3);
        };

        const onItemMouseEnter = (index) => {
            setCurrentIndexState(index);
        };

        const onItemClick = (e, item) => {
            if (item.command) {
                item.command({ originalEvent: e, item });
            }

            e.preventDefault();
        };

        const createItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const { disabled, icon: _icon, label, template, url, target } = item;
            const className = classNames('p-dock-item', {
                'p-dock-item-second-prev': currentIndexState - 2 === index,
                'p-dock-item-prev': currentIndexState - 1 === index,
                'p-dock-item-current': currentIndexState === index,
                'p-dock-item-next': currentIndexState + 1 === index,
                'p-dock-item-second-next': currentIndexState + 2 === index
            });
            const contentClassName = classNames('p-dock-action', { 'p-disabled': disabled });
            const iconClassName = classNames('p-dock-action-icon', _icon);
            const iconProps = mergeProps(
                {
                    className: 'p-dock-action-icon'
                },
                ptm('icon')
            );
            const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props });
            const actionProps = mergeProps(
                {
                    href: url || '#',
                    role: 'menuitem',
                    className: contentClassName,
                    target,
                    'data-pr-tooltip': label,
                    onClick: (e) => onItemClick(e, item)
                },
                ptm('action')
            );

            let content = (
                <a {...actionProps}>
                    {icon}
                    <Ripple />
                </a>
            );

            if (template) {
                const defaultContentOptions = {
                    onClick: (e) => onItemClick(e, item),
                    className: contentClassName,
                    iconClassName,
                    element: content,
                    props,
                    index
                };

                content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
            }

            const menuitemProps = mergeProps(
                {
                    key: index,
                    className,
                    role: 'none',
                    onMouseEnter: () => onItemMouseEnter(index)
                },
                ptm('menuitem')
            );

            return <li {...menuitemProps}>{content}</li>;
        };

        const createItems = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const createHeader = () => {
            if (props.header) {
                const header = ObjectUtils.getJSXElement(props.header, { props });
                const headerProps = mergeProps(
                    {
                        className: 'p-dock-header'
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{header}</div>;
            }

            return null;
        };

        const createList = () => {
            const items = createItems();
            const menuProps = mergeProps(
                {
                    className: 'p-dock-list',
                    role: 'menu',
                    onMouseLeave: onListMouseLeave
                },
                ptm('menu')
            );

            return <ul {...menuProps}>{items}</ul>;
        };

        const createFooter = () => {
            if (props.footer) {
                const footer = ObjectUtils.getJSXElement(props.footer, { props });
                const footerProps = mergeProps(
                    {
                        className: 'p-dock-footer'
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{footer}</div>;
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const className = classNames(
            `p-dock p-component p-dock-${props.position}`,
            {
                'p-dock-magnification': props.magnification
            },
            props.className
        );
        const header = createHeader();
        const list = createList();
        const footer = createFooter();
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className,
                style: props.style
            },
            DockBase.getOtherProps(props),
            ptm('root')
        );

        const containerProps = mergeProps(
            {
                className: 'p-dock-container'
            },
            ptm('container')
        );

        return (
            <div {...rootProps}>
                <div {...containerProps}>
                    {header}
                    {list}
                    {footer}
                </div>
            </div>
        );
    })
);

Dock.displayName = 'Dock';
