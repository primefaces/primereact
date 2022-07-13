import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const BreadCrumb = React.memo(React.forwardRef((props, ref) => {

    const itemClick = (event, item) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item
            });
        }
    }

    const createHome = () => {
        const home = props.home;

        if (home) {
            const { icon: _icon, target, url, disabled, style, className: _className, template } = home;
            const className = classNames('p-breadcrumb-home', { 'p-disabled': disabled }, _className);
            const icon = IconUtils.getJSXIcon(_icon, { className: 'p-menuitem-icon' }, { props });

            let content = (
                <a href={url || '#'} className="p-menuitem-link" aria-disabled={disabled} target={target} onClick={(event) => itemClick(event, home)}>
                    {icon}
                </a>
            )

            if (template) {
                const defaultContentOptions = {
                    onClick: (event) => itemClick(event, home),
                    className: 'p-menuitem-link',
                    labelClassName: 'p-menuitem-text',
                    element: content,
                    props
                };

                content = ObjectUtils.getJSXElement(template, home, defaultContentOptions);
            }

            return (
                <li className={className} style={style}>
                    {content}
                </li>
            )
        }

        return null;
    }

    const createSeparator = () => {
        return <li className="p-breadcrumb-chevron pi pi-chevron-right"></li>
    }

    const createMenuitem = (item) => {
        const className = classNames(item.className, { 'p-disabled': item.disabled });
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        let content = (
            <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={(event) => itemClick(event, item)} aria-disabled={item.disabled}>
                {label}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => itemClick(event, item),
                className: 'p-menuitem-link',
                labelClassName: 'p-menuitem-text',
                element: content,
                props
            }

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li className={className} style={item.style}>
                {content}
            </li>
        )
    }

    const createMenuitems = () => {
        if (props.model) {
            const items = props.model.map((item, index) => {
                const menuitem = createMenuitem(item);
                const separator = (index === props.model.length - 1) ? null : createSeparator();
                const key = item.label + '_' + index;

                return (
                    <React.Fragment key={key}>
                        {menuitem}
                        {separator}
                    </React.Fragment>
                )
            });

            return items;
        }

        return null;
    }

    const otherProps = ObjectUtils.findDiffKeys(props, BreadCrumb.defaultProps);
    const className = classNames('p-breadcrumb p-component', props.className);
    const home = createHome();
    const items = createMenuitems();
    const separator = createSeparator();

    return (
        <nav id={props.id} className={className} style={props.style} aria-label="Breadcrumb" {...otherProps}>
            <ul>
                {home}
                {separator}
                {items}
            </ul>
        </nav>
    )
}));

BreadCrumb.displayName = 'BreadCrumb';
BreadCrumb.defaultProps = {
    __TYPE: 'BreadCrumb',
    id: null,
    model: null,
    home: null,
    style: null,
    className: null
}
