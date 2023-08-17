import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';
import { TabMenuBase } from './TabMenuBase';

export const TabMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = TabMenuBase.getProps(inProps, context);

        const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
        const elementRef = React.useRef(null);
        const inkbarRef = React.useRef(null);
        const navRef = React.useRef(null);
        const tabsRef = React.useRef({});
        const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

        const { ptm, cx, isUnstyled } = TabMenuBase.setMetaData({
            props,
            state: {
                activeIndex: activeIndexState
            }
        });

        const getPTOptions = (key, item, index) => {
            return ptm(key, {
                context: {
                    item,
                    index
                }
            });
        };

        useHandleStyle(TabMenuBase.css.styles, isUnstyled, { name: 'tabmenu' });

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
            } else {
                setActiveIndexState(index);
            }
        };

        const isSelected = (index) => {
            return index === (activeIndex || 0);
        };

        const updateInkBar = () => {
            if (props.model) {
                const tabHeader = tabsRef.current[`tab_${activeIndex}`];

                inkbarRef.current.style.width = DomHandler.getWidth(tabHeader) + 'px';
                inkbarRef.current.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(navRef.current).left + 'px';
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            updateInkBar();
        });

        const createMenuItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const { className: _className, style, disabled, icon: _icon, label: _label, template, url, target } = item;
            const key = _label + '_' + index;
            const active = isSelected(index);
            const iconClassName = classNames('p-menuitem-icon', _icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon', { _icon })
                },
                getPTOptions('icon', item, index)
            );

            const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions('label', item, index)
            );

            const label = _label && <span {...labelProps}>{_label}</span>;

            const actionProps = mergeProps(
                {
                    href: url || '#',
                    className: cx('action'),
                    target: target,
                    onClick: (event) => itemClick(event, item, index),
                    role: 'presentation'
                },
                getPTOptions('action', item, index)
            );

            let content = (
                <a {...actionProps}>
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
                    index,
                    disabled
                };

                content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
            }

            const menuItemProps = mergeProps(
                {
                    ref: tabsRef.current[`tab_${index}`],
                    key,
                    className: cx('menuitem', { _className, active, disabled }),
                    style: style,
                    role: 'tab',
                    'aria-selected': active,
                    'aria-expanded': active,
                    'aria-disabled': disabled
                },
                getPTOptions('menuitem', item, index)
            );

            return <li {...menuItemProps}>{content}</li>;
        };

        const createItems = () => {
            return props.model.map(createMenuItem);
        };

        if (props.model) {
            const items = createItems();

            const inkbarProps = mergeProps(
                {
                    ref: inkbarRef,
                    className: cx('inkbar')
                },
                ptm('inkbar')
            );
            const menuProps = mergeProps(
                {
                    ref: navRef,
                    className: cx('menu'),
                    role: 'tablist'
                },
                ptm('menu')
            );

            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className: cx('root'),
                    style: props.style
                },
                TabMenuBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <div {...rootProps}>
                    <ul {...menuProps}>
                        {items}
                        <li {...inkbarProps}></li>
                    </ul>
                </div>
            );
        }

        return null;
    })
);

TabMenu.displayName = 'TabMenu';
