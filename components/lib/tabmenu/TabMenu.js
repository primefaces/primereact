import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';

export const TabMenu = React.memo(React.forwardRef((props, ref) => {
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const inkbarRef = React.useRef(null);
    const navRef = React.useRef(null);
    const tabsRef = React.useRef({});
    const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

    const itemClick = (event, item, index) => {
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
                item: item
            });
        }

        if (props.onTabChange) {
            props.onTabChange({
                originalEvent: event,
                value: item,
                index
            });
        }
        else {
            setActiveIndexState(index);
        }
    }

    const isSelected = (index) => {
        return (index === (activeIndex || 0));
    }

    const updateInkBar = () => {
        const tabHeader = tabsRef.current[`tab_${activeIndex}`];

        inkbarRef.current.style.width = DomHandler.getWidth(tabHeader) + 'px';
        inkbarRef.current.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(navRef.current).left + 'px';
    }

    React.useEffect(() => {
        updateInkBar();
    });

    const createMenuItem = (item, index) => {
        const { className: _className, style, disabled, icon: _icon, label: _label, template, url, target } = item;
        const key = _label + '_' + index;
        const active = isSelected(index);
        const className = classNames('p-tabmenuitem', {
            'p-highlight': active,
            'p-disabled': disabled
        }, _className);
        const iconClassName = classNames('p-menuitem-icon', _icon);
        const icon = IconUtils.getJSXIcon(_icon, { className: 'p-menuitem-icon' }, { props });
        const label = _label && <span className="p-menuitem-text">{_label}</span>;
        let content = (
            <a href={url || '#'} className="p-menuitem-link" target={target} onClick={(event) => itemClick(event, item, index)} role="presentation">
                {icon}
                {label}
                <Ripple />
            </a>
        );

        if (template) {
            const defaultContentOptions = {
                onClick: (event) => itemClick(event, item, index),
                className: 'p-menuitem-link',
                labelClassName: 'p-menuitem-text',
                iconClassName,
                element: content,
                props,
                active,
                index
            };

            content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
        }

        return (
            <li ref={tabsRef.current[`tab_${index}`]} key={key} className={className} style={style} role="tab" aria-selected={active} aria-expanded={active} aria-disabled={disabled}>
                {content}
            </li>
        )
    }

    const createItems = () => {
        return props.model.map(createMenuItem);
    }

    if (props.model) {
        const otherProps = ObjectUtils.findDiffKeys(props, TabMenu.defaultProps);
        const className = classNames('p-tabmenu p-component', props.className);
        const items = createItems();

        return (
            <div id={props.id} className={className} style={props.style} {...otherProps}>
                <ul ref={navRef} className="p-tabmenu-nav p-reset" role="tablist">
                    {items}
                    <li ref={inkbarRef} className="p-tabmenu-ink-bar"></li>
                </ul>
            </div>
        )
    }

    return null;
}));

TabMenu.displayName = 'TabMenu';
TabMenu.defaultProps = {
    __TYPE: 'TabMenu',
    id: null,
    model: null,
    activeIndex: 0,
    style: null,
    className: null,
    onTabChange: null
}
