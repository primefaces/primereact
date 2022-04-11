import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Dock = React.memo(React.forwardRef((props, ref) => {
    const [currentIndexState, setCurrentIndexState] = React.useState(-3);

    const onListMouseLeave = () => {
        setCurrentIndexState(-3);
    }

    const onItemMouseEnter = (index) => {
        setCurrentIndexState(index);
    }

    const onItemClick = (e, item) => {
        if (item.command) {
            item.command({ originalEvent: e, item });
        }

        e.preventDefault();
    }

    const createItem = (item, index) => {
        const { disabled, icon: _icon, label, template, url, target } = item;
        const className = classNames('p-dock-item', {
            'p-dock-item-second-prev': (currentIndexState - 2) === index,
            'p-dock-item-prev': (currentIndexState - 1) === index,
            'p-dock-item-current': currentIndexState === index,
            'p-dock-item-next': (currentIndexState + 1) === index,
            'p-dock-item-second-next': (currentIndexState + 2) === index
        });
        const contentClassName = classNames('p-dock-action', { 'p-disabled': disabled });
        const iconClassName = classNames('p-dock-action-icon', _icon);
        const icon = IconUtils.getJSXIcon(_icon, { className: 'p-dock-action-icon' }, { props });

        let content = (
            <a href={url || '#'} role="menuitem" className={contentClassName} target={target} data-pr-tooltip={label} onClick={(e) => onItemClick(e, item)}>
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

        return (
            <li key={index} className={className} role="none" onMouseEnter={() => onItemMouseEnter(index)}>
                {content}
            </li>
        )
    }

    const createItems = () => {
        return props.model ? props.model.map(createItem) : null;
    }

    const createHeader = () => {
        if (props.header) {
            const header = ObjectUtils.getJSXElement(props.header, { props });
            return (
                <div className="p-dock-header">
                    {header}
                </div>
            )
        }

        return null;
    }

    const createList = () => {
        const items = createItems();

        return (
            <ul className="p-dock-list" role="menu" onMouseLeave={onListMouseLeave}>
                {items}
            </ul>
        )
    }

    const createFooter = () => {
        if (props.footer) {
            const footer = ObjectUtils.getJSXElement(props.footer, { props });
            return (
                <div className="p-dock-footer">
                    {footer}
                </div>
            )
        }

        return null;
    }

    const otherProps = ObjectUtils.findDiffKeys(props, Dock.defaultProps);
    const className = classNames(`p-dock p-component p-dock-${props.position}`, {
        'p-dock-magnification': props.magnification
    }, props.className);
    const header = createHeader();
    const list = createList();
    const footer = createFooter();

    return (
        <div id={props.id} className={className} style={props.style} {...otherProps}>
            <div className="p-dock-container">
                {header}
                {list}
                {footer}
            </div>
        </div>
    )
}));

Dock.displayName = 'Dock';
Dock.defaultProps = {
    __TYPE: 'Dock',
    id: null,
    style: null,
    className: null,
    model: null,
    position: 'bottom',
    magnification: true,
    header: null,
    footer: null
}
