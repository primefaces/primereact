import * as React from 'react';
import PrimeReact, { PrimeReactContext, ariaLabel } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener, useMergeProps, useMountEffect, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { BarsIcon } from '../icons/bars';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { MenubarBase } from './MenubarBase';
import { MenubarSub } from './MenubarSub';

export const Menubar = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MenubarBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [mobileActiveState, setMobileActiveState] = React.useState(false);
        const [focused, setFocused] = React.useState(false);
        const [focusedItemInfo, setFocusedItemInfo] = React.useState({ index: -1, level: 0, parentKey: '' });
        const [focusedItemId, setFocusedItemId] = React.useState(null);
        const [activeItemPath, setActiveItemPath] = React.useState([]);
        const [visibleItems, setVisibleItems] = React.useState([]);
        const [processedItems, setProcessedItems] = React.useState([]);
        const [focusTrigger, setFocusTrigger] = React.useState(false);
        const [dirty, setDirty] = React.useState(false);
        const elementRef = React.useRef(null);
        const rootMenuRef = React.useRef(null);
        const menuButtonRef = React.useRef(null);
        const searchValue = React.useRef('');
        const searchTimeout = React.useRef(null);
        const reverseTrigger = React.useRef(false);
        const { ptm, cx, isUnstyled } = MenubarBase.setMetaData({
            props,
            state: {
                id: idState,
                mobileActive: mobileActiveState
            }
        });

        useHandleStyle(MenubarBase.css.styles, isUnstyled, { name: 'menubar' });

        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (isOutsideClicked(event)) {
                    const isOutsideContainer = elementRef.current && !elementRef.current.contains(event.target);

                    if (isOutsideContainer) {
                        hide();
                    }
                }
            },
            options: { capture: true }
        });

        const [bindResizeListener, unbindResizeListener] = useResizeListener({
            listener: (event) => {
                if (!DomHandler.isTouchDevice()) {
                    hide(event);
                }
            }
        });

        const toggle = (event) => {
            if (mobileActiveState) {
                setMobileActiveState(false);
                hide();
            } else {
                setMobileActiveState(true);
                setTimeout(() => {
                    show();
                }, 1);
            }

            event.preventDefault();
        };

        const show = () => {
            setFocusedItemInfo({ index: findFirstFocusedItemIndex(), level: 0, parentKey: '' });

            DomHandler.focus(rootMenuRef.current);
        };

        const hide = (isFocus) => {
            if (mobileActiveState) {
                setMobileActiveState(false);
                setTimeout(() => {
                    DomHandler.focus(menuButtonRef.current);
                }, 0);
            }

            setActiveItemPath([]);
            setFocusedItemInfo({ index: -1, level: 0, parentKey: '' });

            isFocus && DomHandler.focus(rootMenuRef.current);
            setDirty(false);
        };

        const menuButtonKeydown = (event) => {
            (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') && toggle(event);
        };

        const isOutsideClicked = (event) => {
            return rootMenuRef.current !== event.target && !rootMenuRef.current.contains(event.target) && menuButtonRef.current !== event.target && !menuButtonRef.current.contains(event.target);
        };

        const getItemProp = (item, name) => {
            return item ? ObjectUtils.getItemValue(item[name]) : undefined;
        };

        const getItemLabel = (item) => {
            return getItemProp(item, 'label');
        };

        const isItemDisabled = (item) => getItemProp(item, 'disabled');

        const isItemSeparator = (item) => getItemProp(item, 'separator');

        const getProccessedItemLabel = (processedItem) => (processedItem ? getItemLabel(processedItem.item) : undefined);

        const isProccessedItemGroup = (processedItem) => processedItem && ObjectUtils.isNotEmpty(processedItem.items);

        const onFocus = (event) => {
            setFocused(true);
            setFocusedItemInfo(focusedItemInfo.index !== -1 ? focusedItemInfo : { index: findFirstFocusedItemIndex(), level: 0, parentKey: '' });
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocused(false);
            setFocusedItemInfo({ index: -1, level: 0, parentKey: '' });
            searchValue.current = '';
            setDirty(false);
            props.onBlur && props.onBlur(event);
        };

        const onKeyDown = (event) => {
            const metaKey = event.metaKey || event.ctrlKey;
            const code = event.code;

            switch (code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                    onArrowLeftKey(event);
                    break;

                case 'ArrowRight':
                    onArrowRightKey(event);
                    break;

                case 'Home':
                    onHomeKey(event);
                    break;

                case 'End':
                    onEndKey(event);
                    break;

                case 'Space':
                    onSpaceKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(event);
                    break;

                case 'Escape':
                    onEscapeKey(event);
                    break;

                case 'Tab':
                    onTabKey(event);
                    break;

                case 'PageDown':
                case 'PageUp':
                case 'Backspace':
                case 'ShiftLeft':
                case 'ShiftRight':
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        searchItems(event, event.key);
                    }

                    break;
            }
        };

        const onItemChange = (event) => {
            const { processedItem, isFocus } = event;

            if (ObjectUtils.isEmpty(processedItem)) {
                return;
            }

            const { index, key, level, parentKey, items } = processedItem;
            const grouped = ObjectUtils.isNotEmpty(items);
            const _activeItemPath = activeItemPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);

            grouped && _activeItemPath.push(processedItem);

            setFocusedItemInfo({ index, level, parentKey });
            setActiveItemPath(_activeItemPath);

            grouped && setDirty(true);
            isFocus && DomHandler.focus(rootMenuRef.current);
        };

        const onItemClick = (event) => {
            const { originalEvent, processedItem } = event;
            const grouped = isProccessedItemGroup(processedItem);
            const root = ObjectUtils.isEmpty(processedItem.parent);
            const selected = isSelected(processedItem);

            if (selected) {
                const { index, key, level, parentKey } = processedItem;

                setActiveItemPath(activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key)));
                setFocusedItemInfo({ index, level, parentKey });

                if (!grouped) {
                    setDirty(!root);
                }

                setTimeout(() => {
                    DomHandler.focus(rootMenuRef.current);

                    if (grouped) {
                        setDirty(true);
                    }
                }, 0);
            } else if (grouped) {
                DomHandler.focus(rootMenuRef.current);
                onItemChange({ originalEvent, processedItem });
            } else {
                const rootProcessedItem = root ? processedItem : activeItemPath.find((p) => p.parentKey === '');
                const rootProcessedItemIndex = rootProcessedItem ? rootProcessedItem.index : -1;

                hide(originalEvent);
                setFocusedItemInfo({ index: rootProcessedItemIndex, parentKey: rootProcessedItem ? rootProcessedItem.parentKey : '' });
                setMobileActiveState(false);
            }
        };

        const onItemMouseEnter = (event) => {
            if (!mobileActiveState && dirty) {
                onItemChange(event);
            }
        };

        const onArrowDownKey = (event) => {
            const processedItem = visibleItems[focusedItemInfo.index];
            const root = processedItem ? ObjectUtils.isEmpty(processedItem.parent) : null;

            if (root) {
                const grouped = isProccessedItemGroup(processedItem);

                if (grouped) {
                    onItemChange({ originalEvent: event, processedItem });
                    setFocusedItemInfo({ index: -1, parentKey: processedItem.key });
                    setTimeout(() => setFocusTrigger(true), 0);
                }
            } else {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);
            }

            event.preventDefault();
        };

        const onArrowUpKey = (event) => {
            const processedItem = visibleItems[focusedItemInfo.index];
            const root = ObjectUtils.isEmpty(processedItem.parent);

            if (root) {
                const grouped = isProccessedItemGroup(processedItem);

                if (grouped) {
                    onItemChange({ originalEvent: event, processedItem });
                    setFocusedItemInfo({ index: -1, parentKey: processedItem.key });
                    reverseTrigger.current = true;
                    setTimeout(() => setFocusTrigger(true), 0);
                }
            } else {
                const parentItem = activeItemPath.find((p) => p.key === processedItem.parentKey);

                if (focusedItemInfo.index === 0 && parentItem && parentItem.parentKey === '') {
                    setFocusedItemInfo({ index: -1, parentKey: parentItem ? parentItem.parentKey : '' });
                    searchValue.current = '';
                    onArrowLeftKey(event);
                } else {
                    const itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();

                    changeFocusedItemIndex(itemIndex);
                }
            }

            event.preventDefault();
        };

        const onArrowLeftKey = (event) => {
            const processedItem = visibleItems[focusedItemInfo.index];
            const parentItem = processedItem ? activeItemPath.find((p) => p.key === processedItem.parentKey) : null;

            if (parentItem) {
                onItemChange({ originalEvent: event, processedItem: parentItem });
                setActiveItemPath(activeItemPath.filter((p) => p.key !== parentItem.key));
            } else {
                const itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);
            }

            event.preventDefault();
        };

        const onArrowRightKey = (event) => {
            const processedItem = visibleItems[focusedItemInfo.index];
            const parentItem = processedItem ? activeItemPath.find((p) => p.key === processedItem.parentKey) : null;

            if (parentItem) {
                const grouped = isProccessedItemGroup(processedItem);

                if (grouped) {
                    onItemChange({ originalEvent: event, processedItem });
                    setFocusedItemInfo({ index: -1, parentKey: processedItem.key });
                    setTimeout(() => setFocusTrigger(true), 0);
                }
            } else {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);
            }

            event.preventDefault();
        };

        const onHomeKey = (event) => {
            changeFocusedItemIndex(findFirstItemIndex());
            event.preventDefault();
        };

        const onEndKey = (event) => {
            changeFocusedItemIndex(findLastItemIndex());
            event.preventDefault();
        };

        const onEnterKey = (event) => {
            if (focusedItemInfo.index !== -1) {
                const element = DomHandler.findSingle(rootMenuRef.current, `li[data-id="${`${focusedItemId}`}"]`);
                const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');

                anchorElement ? anchorElement.click() : element && element.click();
            }

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            onEnterKey(event);
        };

        const onEscapeKey = (event) => {
            hide(true);
            setFocusedItemInfo({ focusedItemInfo, index: findFirstFocusedItemIndex() });
        };

        const onTabKey = (event) => {
            if (focusedItemInfo.index !== -1) {
                const processedItem = visibleItems[focusedItemInfo.index];
                const grouped = isProccessedItemGroup(processedItem);

                !grouped && onItemChange({ originalEvent: event, processedItem });
            }

            hide();
        };

        const isItemMatched = (processedItem) => {
            return isValidItem(processedItem) && getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(searchValue.current.toLocaleLowerCase());
        };

        const isValidItem = (processedItem) => {
            return !!processedItem && !isItemDisabled(processedItem.item) && !isItemSeparator(processedItem.item);
        };

        const isValidSelectedItem = (processedItem) => {
            return isValidItem(processedItem) && isSelected(processedItem);
        };

        const isSelected = (processedItem) => {
            return activeItemPath.some((p) => p.key === processedItem.key);
        };

        const findFirstItemIndex = () => {
            return visibleItems.findIndex((processedItem) => isValidItem(processedItem));
        };

        const findLastItemIndex = () => {
            return ObjectUtils.findLastIndex(visibleItems, (processedItem) => isValidItem(processedItem));
        };

        const findNextItemIndex = (index) => {
            const matchedItemIndex = index < visibleItems.length - 1 ? visibleItems.slice(index + 1).findIndex((processedItem) => isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
        };

        const findPrevItemIndex = (index) => {
            const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(visibleItems.slice(0, index), (processedItem) => isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex : index;
        };

        const findSelectedItemIndex = () => {
            return visibleItems.findIndex((processedItem) => isValidSelectedItem(processedItem));
        };

        const findFirstFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex;
        };

        const findLastFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex;
        };

        const searchItems = (event, char) => {
            searchValue.current = (searchValue.current || '') + char;

            let itemIndex = -1;
            let matched = false;

            if (focusedItemInfo.index !== -1) {
                itemIndex = visibleItems.slice(focusedItemInfo.index).findIndex((processedItem) => isItemMatched(processedItem));
                itemIndex = itemIndex === -1 ? visibleItems.slice(0, focusedItemInfo.index).findIndex((processedItem) => isItemMatched(processedItem)) : itemIndex + focusedItemInfo.index;
            } else {
                itemIndex = visibleItems.findIndex((processedItem) => isItemMatched(processedItem));
            }

            if (itemIndex !== -1) {
                matched = true;
            }

            if (itemIndex === -1 && focusedItemInfo.index === -1) {
                itemIndex = findFirstFocusedItemIndex();
            }

            if (itemIndex !== -1) {
                changeFocusedItemIndex(itemIndex);
            }

            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }

            searchTimeout.current = setTimeout(() => {
                searchValue.current = '';
                searchTimeout.current = null;
            }, 500);

            return matched;
        };

        const changeFocusedItemIndex = (index) => {
            if (focusedItemInfo.index !== index) {
                setFocusedItemInfo({ ...focusedItemInfo, index });
                scrollInView();
            }
        };

        const scrollInView = (index = -1) => {
            const id = index !== -1 ? `${idState}_${index}` : focusedItemId;
            const element = DomHandler.findSingle(rootMenuRef.current, `li[data-id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        };

        const createProcessedItems = (items, level = 0, parent = {}, parentKey = '') => {
            const _processedItems = [];

            items &&
                items.forEach((item, index) => {
                    const key = (parentKey !== '' ? parentKey + '_' : '') + index;
                    const newItem = {
                        item,
                        index,
                        level,
                        key,
                        parent,
                        parentKey
                    };

                    newItem.items = createProcessedItems(item.items, level + 1, newItem, key);
                    _processedItems.push(newItem);
                });

            return _processedItems;
        };

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        useUpdateEffect(() => {
            if (mobileActiveState) {
                bindOutsideClickListener();
                bindResizeListener();
                ZIndexUtils.set('menu', rootMenuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex.menu) || PrimeReact.zIndex.menu);
            } else {
                unbindResizeListener();
                unbindOutsideClickListener();
                ZIndexUtils.clear(rootMenuRef.current);
            }
        }, [mobileActiveState]);

        React.useEffect(() => {
            const itemsToProcess = props.model || [];
            const processed = createProcessedItems(itemsToProcess, 0, null, '');

            setProcessedItems(processed);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.model]);

        useUpdateEffect(() => {
            const processedItem = activeItemPath.find((p) => p.key === focusedItemInfo.parentKey);
            const _processedItems = processedItem ? processedItem.items : processedItems;

            setVisibleItems(_processedItems);
        }, [activeItemPath, focusedItemInfo, processedItems]);

        useUpdateEffect(() => {
            if (ObjectUtils.isNotEmpty(activeItemPath)) {
                bindOutsideClickListener();
                bindResizeListener();
            } else {
                unbindOutsideClickListener();
                unbindResizeListener();
            }
        }, [activeItemPath]);

        useUpdateEffect(() => {
            if (focusTrigger) {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : reverseTrigger.current ? findLastItemIndex() : findFirstFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);
                reverseTrigger.current = false;
                setFocusTrigger(false);
            }
        }, [focusTrigger]);

        useUpdateEffect(() => {
            setFocusedItemId(focusedItemInfo.index !== -1 ? `${idState}${ObjectUtils.isNotEmpty(focusedItemInfo.parentKey) ? '_' + focusedItemInfo.parentKey : ''}_${focusedItemInfo.index}` : null);
        }, [focusedItemInfo]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(rootMenuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            toggle,
            getElement: () => elementRef.current,
            getRootMenu: () => rootMenuRef.current,
            getMenuButton: () => menuButtonRef.current
        }));

        const createStartContent = () => {
            if (props.start) {
                const start = ObjectUtils.getJSXElement(props.start, props);
                const startProps = mergeProps(
                    {
                        className: cx('start')
                    },
                    ptm('start')
                );

                return <div {...startProps}>{start}</div>;
            }

            return null;
        };

        const createEndContent = () => {
            if (props.end) {
                const end = ObjectUtils.getJSXElement(props.end, props);
                const endProps = mergeProps(
                    {
                        className: cx('end')
                    },
                    ptm('end')
                );

                return <div {...endProps}>{end}</div>;
            }

            return null;
        };

        const createMenuButton = () => {
            if (props.model && props.model.length < 1) {
                return null;
            }

            const buttonProps = mergeProps(
                {
                    ref: menuButtonRef,
                    href: '#',
                    tabIndex: '0',
                    'aria-haspopup': mobileActiveState && props.model && props.model.length > 0 ? true : false,
                    'aria-expanded': mobileActiveState,
                    'aria-label': ariaLabel('navigation'),
                    'aria-controls': idState,
                    role: 'button',
                    tabIndex: 0,
                    className: cx('button'),
                    onKeyDown: (e) => menuButtonKeydown(e),
                    onClick: (e) => toggle(e)
                },
                ptm('button')
            );
            const popupIconProps = mergeProps(ptm('popupIcon'));
            const icon = props.menuIcon || <BarsIcon {...popupIconProps} />;
            const menuIcon = IconUtils.getJSXIcon(icon, { ...popupIconProps }, { props });

            /* eslint-disable */
            const button = <a {...buttonProps}>{menuIcon}</a>;
            /* eslint-enable */

            return button;
        };

        const start = createStartContent();
        const end = createEndContent();
        const menuButton = createMenuButton();

        const submenu = (
            <MenubarSub
                hostName="Menubar"
                ariaActivedescendant={focused ? focusedItemId : undefined}
                level={0}
                id={idState}
                ref={rootMenuRef}
                menuProps={props}
                model={processedItems}
                onLeafClick={onItemClick}
                onItemMouseEnter={onItemMouseEnter}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                root
                activeItemPath={activeItemPath}
                focusedItemId={focused ? focusedItemId : undefined}
                submenuIcon={props.submenuIcon}
                ptm={ptm}
                cx={cx}
            />
        );
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: classNames(props.className, cx('root', { mobileActiveState })),
                style: props.style
            },
            MenubarBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {start}
                {menuButton}
                {submenu}
                {end}
            </div>
        );
    })
);

Menubar.displayName = 'Menubar';
