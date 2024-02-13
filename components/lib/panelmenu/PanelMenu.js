import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { PanelMenuBase } from './PanelMenuBase';
import { PanelMenuList } from './PanelMenuList';

export const PanelMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = PanelMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [activeItemState, setActiveItemState] = React.useState(null);
        const [activeItemsState, setActiveItemsState] = React.useState([]);
        const [animationDisabled, setAnimationDisabled] = React.useState(false);
        const elementRef = React.useRef(null);

        const { ptm, cx, isUnstyled } = PanelMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                activeItem: activeItemState
            }
        });

        useHandleStyle(PanelMenuBase.css.styles, isUnstyled, { name: 'panelmenu' });

        const onItemClick = (event, item) => {
            if (item.disabled) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (item.items) {
                changeActiveItem(event, item);
            }

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const getItemProp = (item, name) => {
            return item ? ObjectUtils.getItemValue(item[name]) : undefined;
        };

        const isItemActive = (item) => {
            if (props.expandedKeys) {
                return props.expandedKeys[getItemProp(item, 'key')];
            } else {
                return props.multiple ? activeItemsState.some((subItem) => ObjectUtils.equals(item, subItem)) : ObjectUtils.equals(item, activeItemState);
            }
        };

        const isItemVisible = (item) => {
            return getItemProp(item, 'visible') !== false;
        };

        const isItemDisabled = (item) => {
            return getItemProp(item, 'disabled');
        };

        const isItemFocused = (item) => {
            return ObjectUtils.equals(item, activeItemState);
        };

        const getPanelId = (index) => {
            return `${idState}_${index}`;
        };

        const getHeaderId = (index) => {
            return `${getPanelId(index)}_header`;
        };

        const getContentId = (index) => {
            return `${getPanelId(index)}_content`;
        };

        const onHeaderKeyDown = (event, item) => {
            switch (event.code) {
                case 'ArrowDown':
                    onHeaderArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onHeaderArrowUpKey(event);
                    break;

                case 'Home':
                    onHeaderHomeKey(event);
                    break;

                case 'End':
                    onHeaderEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    onHeaderEnterKey(event, item);
                    break;

                default:
                    break;
            }
        };

        const onHeaderArrowDownKey = (event) => {
            const rootList = DomHandler.getAttribute(event.currentTarget, 'data-p-highlight') === true ? DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;

            rootList ? DomHandler.focus(rootList) : updateFocusedHeader({ originalEvent: event, focusOnNext: true });
            event.preventDefault();
        };

        const onHeaderArrowUpKey = (event) => {
            const prevHeader = findPrevHeader(event.currentTarget.parentElement) || findLastHeader();
            const rootList = DomHandler.getAttribute(prevHeader, 'data-p-highlight') === true ? DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;

            rootList ? DomHandler.focus(rootList) : updateFocusedHeader({ originalEvent: event, focusOnNext: false });
            event.preventDefault();
        };

        const onHeaderHomeKey = (event) => {
            changeFocusedHeader(event, findFirstHeader());
            event.preventDefault();
        };

        const onHeaderEndKey = (event) => {
            changeFocusedHeader(event, findLastHeader());
            event.preventDefault();
        };

        const onHeaderEnterKey = (event, item) => {
            const headerAction = DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');

            headerAction ? headerAction.click() : onItemClick(event, item);
            event.preventDefault();
        };

        const findNextHeader = (panelElement, selfCheck = false) => {
            const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
            const headerElement = DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');

            return headerElement ? (DomHandler.getAttribute(headerElement, 'data-p-disabled') ? findNextHeader(headerElement.parentElement) : headerElement) : null;
        };

        const findPrevHeader = (panelElement, selfCheck = false) => {
            const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
            const headerElement = DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');

            return headerElement ? (DomHandler.getAttribute(headerElement, 'data-p-disabled') ? findPrevHeader(headerElement.parentElement) : headerElement) : null;
        };

        const findFirstHeader = () => {
            return findNextHeader(elementRef.current.firstElementChild, true);
        };

        const findLastHeader = () => {
            return findPrevHeader(elementRef.current.lastElementChild, true);
        };

        const updateFocusedHeader = (event) => {
            const { originalEvent, focusOnNext, selfCheck } = event;
            const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
            const header = selfCheck ? DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? findNextHeader(panelElement) : findPrevHeader(panelElement);

            header ? changeFocusedHeader(originalEvent, header) : focusOnNext ? onHeaderHomeKey(originalEvent) : onHeaderEndKey(originalEvent);
        };

        const changeActiveItem = (event, item) => {
            if (!isItemDisabled(item)) {
                const active = isItemActive(item);
                const isExpanded = !active;
                const _activeItemState = activeItemState && ObjectUtils.equals(item, activeItemState) ? null : item;

                setActiveItemState(_activeItemState);

                if (props.multiple) {
                    let activeItems = activeItemsState;

                    if (
                        activeItemsState.some((subItem) => {
                            return ObjectUtils.equals(item, subItem);
                        })
                    ) {
                        activeItems = activeItemsState.filter((subItem) => !ObjectUtils.equals(item, subItem));
                    } else {
                        activeItems.push(item);
                    }

                    setActiveItemsState(activeItems);
                }

                changeExpandedKeys({ item, expanded: isExpanded });
                isExpanded && event ? props.onOpen && props.onOpen({ originalEvent: event, item }) : props.onClose && props.onClose({ originalEvent: event, item });
            }
        };

        const changeExpandedKeys = ({ item, expanded = false }) => {
            if (props.expandedKeys) {
                let _keys = { ...props.expandedKeys };

                if (expanded) _keys[item.key] = true;
                else delete _keys[item.key];

                props.onExpandedKeysChange && props.onExpandedKeysChange(_keys);
            }
        };

        const changeFocusedHeader = (event, element) => {
            element && DomHandler.focus(element);
        };

        const getPTOptions = (item, key, index) => {
            return ptm(key, {
                context: {
                    active: isItemActive(item),
                    focused: isItemFocused(item),
                    disabled: isItemDisabled(item),
                    index
                }
            });
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            !idState && setIdState(UniqueComponentId());
        });

        React.useEffect(() => {
            setAnimationDisabled(true);

            props.model &&
                props.model.forEach((item) => {
                    if (item.expanded) {
                        changeActiveItem(null, item);
                        item.expanded = false;
                    }
                });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.model]);

        const onEnter = () => {
            setAnimationDisabled(false);
        };

        const createPanel = (item, index) => {
            if (!isItemVisible(item)) {
                return null;
            }

            const key = item.id || idState + '_' + index;
            const active = isItemActive(item) || item.expanded;
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const headerIconProps = mergeProps(
                {
                    className: cx('headerIcon', { item })
                },
                getPTOptions(item, 'headerIcon', index)
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...headerIconProps }, { props });
            const submenuIconClassName = 'p-panelmenu-icon';
            const headerSubmenuIconProps = mergeProps(
                {
                    className: cx('headerSubmenuIcon')
                },
                getPTOptions(item, 'headerSubmenuIcon', index)
            );
            const submenuIcon = item.items && IconUtils.getJSXIcon(active ? props.submenuIcon || <ChevronDownIcon {...headerSubmenuIconProps} /> : props.submenuIcon || <ChevronRightIcon {...headerSubmenuIconProps} />);
            const headerLabelProps = mergeProps(
                {
                    className: cx('headerLabel')
                },
                getPTOptions(item, 'headerLabel', index)
            );
            const label = item.label && <span {...headerLabelProps}>{item.label}</span>;
            const menuContentRef = React.createRef();
            const headerActionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('headerAction'),
                    tabIndex: '-1'
                },
                getPTOptions(item, 'headerAction', index)
            );

            let content = (
                <a {...headerActionProps}>
                    {submenuIcon}
                    {icon}
                    {label}
                </a>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => onItemClick(event, item),
                    className: 'p-panelmenu-header-link',
                    labelClassName: 'p-menuitem-text',
                    submenuIconClassName,
                    iconClassName,
                    element: content,
                    props,
                    leaf: !item.items,
                    active
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const panelProps = mergeProps(
                {
                    key: key,
                    className: cx('panel', { item }),
                    style: item.style
                },
                getPTOptions(item, 'panel', index)
            );

            const headerProps = mergeProps(
                {
                    id: getHeaderId(index),
                    className: cx('header', { active, item }),
                    'aria-label': item.label,
                    'aria-expanded': active,
                    'aria-disabled': item.disabled,
                    'aria-controls': getContentId(index),
                    tabIndex: item.disabled ? null : '0',
                    onClick: (event) => onItemClick(event, item),
                    onKeyDown: (event) => onHeaderKeyDown(event, item),
                    'data-p-disabled': item.disabled,
                    'data-p-highlight': active,
                    role: 'button',
                    style: item.style
                },
                getPTOptions(item, 'header', index)
            );

            const headerContentProps = mergeProps(
                {
                    className: cx('headerContent')
                },
                getPTOptions(item, 'headerContent', index)
            );

            const menuContentProps = mergeProps(
                {
                    className: cx('menuContent')
                },
                getPTOptions(item, 'menuContent', index)
            );

            const toggleableContentProps = mergeProps(
                {
                    className: cx('toggleableContent', { active }),
                    role: 'region',
                    'aria-labelledby': getHeaderId(index)
                },
                getPTOptions(item, 'toggleableContent', index)
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    timeout: { enter: 1000, exit: 450 },
                    onEnter: onEnter,
                    in: active,
                    unmountOnExit: true,
                    options: props.transitionOptions
                },
                getPTOptions(item, 'transition', index)
            );

            return (
                <div {...panelProps}>
                    <div {...headerProps}>
                        <div {...headerContentProps}>{content}</div>
                    </div>
                    <CSSTransition nodeRef={menuContentRef} {...transitionProps}>
                        <div id={getContentId(index)} ref={menuContentRef} {...toggleableContentProps}>
                            <div {...menuContentProps}>
                                <PanelMenuList
                                    panelId={getPanelId(index)}
                                    menuProps={props}
                                    onToggle={changeExpandedKeys}
                                    onHeaderFocus={updateFocusedHeader}
                                    level={0}
                                    model={item.items}
                                    expandedKeys={props.expandedKeys}
                                    className="p-panelmenu-root-submenu"
                                    submenuIcon={props.submenuIcon}
                                    ptm={ptm}
                                    cx={cx}
                                />
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            );
        };

        const createPanels = () => {
            return props.model ? props.model.map(createPanel) : null;
        };

        const panels = createPanels();
        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: cx('root'),
                id: props.id,
                style: props.style
            },
            PanelMenuBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}>{panels}</div>;
    })
);

PanelMenu.displayName = 'PanelMenu';
