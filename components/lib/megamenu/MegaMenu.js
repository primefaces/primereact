import * as React from 'react';
import PrimeReact, { PrimeReactContext, ariaLabel } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener, useMatchMedia, useMergeProps, useMountEffect, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { AngleDownIcon } from '../icons/angledown';
import { AngleRightIcon } from '../icons/angleright';
import { BarsIcon } from '../icons/bars';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { MegaMenuBase } from './MegaMenuBase';

export const MegaMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MegaMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [activeItemState, setActiveItemState] = React.useState(null);
        const [focused, setFocused] = React.useState(null);
        const [focusedItemInfo, setFocusedItemInfo] = React.useState({ index: -1, key: '', parentKey: '' });
        const [focusedItemId, setFocusedItemId] = React.useState(null);
        const [dirty, setDirty] = React.useState(false);
        const [processedItems, setProcessedItems] = React.useState(null);
        const [visibleItems, setVisibleItems] = React.useState([]);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const [mobileActiveState, setMobileActiveState] = React.useState(false);
        const [focusTrigger, setFocusTrigger] = React.useState(false);
        const searchValue = React.useRef('');
        const searchTimeout = React.useRef(null);
        const elementRef = React.useRef(null);
        const menubarRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const menuButtonRef = React.useRef(null);
        const horizontal = props.orientation === 'horizontal';
        const vertical = props.orientation === 'vertical';
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

        const { ptm, cx, isUnstyled } = MegaMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                activeItem: activeItemState && activeItemState.item,
                attributeSelector: attributeSelectorState,
                mobileActive: mobileActiveState
            }
        });

        useHandleStyle(MegaMenuBase.css.styles, isUnstyled, { name: 'megamenu' });

        const getPTOptions = (processedItem, key, index) => {
            return ptm(key, {
                context: {
                    active: isItemActive(processedItem),
                    focused: isItemFocused(processedItem),
                    disabled: isItemDisabled(processedItem),
                    item: processedItem,
                    index
                }
            });
        };

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (isOutsideClicked(event)) {
                    hide();
                }
            }
        });

        const [bindDocumentResizeListener, unbindDocumentResizeListener] = useResizeListener({
            type: 'resize',
            listener: () => {
                hide();
            }
        });

        const bindListeners = () => {
            bindDocumentClickListener();
            bindDocumentResizeListener();
        };

        const unbindListeners = () => {
            unbindDocumentClickListener();
            unbindDocumentResizeListener();
        };

        const onLeafClick = (event) => {
            const { originalEvent, processedItem } = event;
            const item = processedItem.item;

            if (item.disabled) {
                originalEvent.preventDefault();

                return;
            }

            if (!item.url) {
                originalEvent.preventDefault();
            }

            if (item.command) {
                item.command({
                    originalEvent: originalEvent,
                    item: item
                });
            }

            const grouped = isProccessedItemGroup(processedItem);
            const selected = isSelected(processedItem);

            if (selected) {
                const { index, key, parentKey } = processedItem;

                setActiveItemState(null);
                setFocusedItemInfo({ index, key, parentKey });
            } else {
                if (grouped) {
                    onItemChange(event);
                } else {
                    const rootProcessedItemIndex = activeItemState ? activeItemState.index : -1;
                    const rootProcessedItemKey = activeItemState ? activeItemState.key : '';

                    hide(originalEvent);
                    setFocusedItemInfo({ index: rootProcessedItemIndex, key: rootProcessedItemKey, parentKey: '' });
                    setMobileActiveState(false);
                }
            }
        };

        const onItemChange = (event) => {
            const { processedItem, isFocus } = event;

            if (ObjectUtils.isEmpty(processedItem)) return;

            const { index, key, parentKey, items } = processedItem;
            const grouped = ObjectUtils.isNotEmpty(items);

            grouped && setActiveItemState(processedItem);
            setFocusedItemInfo({ index, key, parentKey });

            grouped && setDirty(true);
            isFocus && DomHandler.focus(menubarRef.current);
        };

        const onCategoryMouseEnter = (event) => {
            if (!mobileActiveState && dirty) {
                onItemChange(event);
            }
        };

        const onCategoryClick = (event) => {
            const { originalEvent, processedItem } = event;
            const item = processedItem.item;

            if (item.disabled) {
                originalEvent.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: originalEvent,
                    item: props.item
                });
            }

            if (!item.url) {
                originalEvent.preventDefault();
                originalEvent.stopPropagation();
            }

            const grouped = isProccessedItemGroup(processedItem);
            const root = ObjectUtils.isEmpty(processedItem.parent);
            const selected = isSelected(processedItem);

            if (selected) {
                const { index, key, parentKey } = processedItem;

                setActiveItemState(null);
                setFocusedItemInfo({ index, key, parentKey });
                setDirty(!root);
            } else {
                if (grouped) {
                    onItemChange(event);
                } else {
                    const rootProcessedItem = root ? processedItem : activeItemState;

                    hide();
                    changeFocusedItemInfo(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
                    setMobileActiveState(false);
                    DomHandler.focus(menubarRef.current);
                }
            }
        };

        const show = () => {
            setFocusedItemInfo({ index: findFirstFocusedItemIndex(), level: 0, parentKey: '' });
        };

        const hide = (isFocus) => {
            if (mobileActiveState) {
                setMobileActiveState(false);
                setTimeout(() => {
                    DomHandler.focus(menuButtonRef.current);
                }, 0);
            }

            setActiveItemState(null);

            if (isFocus) {
                setFocusedItemInfo({ index: -1, key: '', parentKey: '' });
                DomHandler.focus(menubarRef.current);
            }

            setDirty(false);
        };

        const toggle = (event) => {
            event.preventDefault();

            if (mobileActiveState) {
                setMobileActiveState(false);
                ZIndexUtils.clear(menubarRef.current);
                hide();
            } else {
                setMobileActiveState(true);
                ZIndexUtils.set('menu', menubarRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
                setTimeout(() => {
                    show();
                }, 1);
            }
        };

        const isOutsideClicked = (event) => {
            return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target) || (menuButtonRef.current && menuButtonRef.current.contains(event.target)));
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            const uniqueId = UniqueComponentId();

            !idState && setIdState(uniqueId);

            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(uniqueId);
            }
        });

        useUpdateEffect(() => {
            if (attributeSelectorState && elementRef.current) {
                elementRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

        useUpdateEffect(() => {
            if (mobileActiveState) {
                bindListeners();
            } else {
                unbindListeners();
            }
        }, [mobileActiveState]);

        useUpdateEffect(() => {
            if (focusTrigger) {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

                changeFocusedItemInfo(itemIndex);
                setFocusTrigger(false);
            }
        }, [focusTrigger]);

        useUpdateEffect(() => {
            const currentPanel = DomHandler.findSingle(elementRef.current, '.p-menuitem-active > .p-megamenu-panel');

            if (activeItemState) {
                bindListeners();

                if (!isMobileMode) {
                    ZIndexUtils.set('menu', currentPanel, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
                }
            } else {
                unbindListeners();
            }

            if (isMobileMode) {
                currentPanel && currentPanel.previousElementSibling.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }

            return () => {
                unbindListeners();
                ZIndexUtils.clear(currentPanel);
            };
        }, [activeItemState, isMobileMode]);

        useUpdateEffect(() => {
            const _focusedItemId = ObjectUtils.isNotEmpty(focusedItemInfo.key) ? `${idState}_${focusedItemInfo.key}` : null;

            setFocusedItemId(_focusedItemId);
        }, [focusedItemInfo]);

        React.useEffect(() => {
            const itemsToProcess = props.model || [];
            const processed = createProcessedItems(itemsToProcess, 0, null, '');

            setProcessedItems(processed);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.model]);

        useUpdateEffect(() => {
            const processedItem = ObjectUtils.isNotEmpty(activeItemState) ? activeItemState : null;

            const _visibleItems =
                processedItem && processedItem.key === focusedItemInfo.parentKey
                    ? processedItem.items.reduce((items, col) => {
                          col.forEach((submenu) => {
                              submenu.items.forEach((a) => {
                                  items.push(a);
                              });
                          });

                          return items;
                      }, [])
                    : processedItems;

            setVisibleItems(_visibleItems);
        }, [focusedItemInfo, activeItemState, processedItems]);

        const onFocus = (event) => {
            setFocused(true);

            if (focusedItemInfo.index === -1) {
                const index = findFirstFocusedItemIndex();
                const processedItem = findVisibleItem(index);

                setFocusedItemInfo({ index, key: processedItem.key, parentKey: processedItem.parentKey });
            }

            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocused(false);
            setFocusedItemInfo({ index: -1, key: '', parentKey: '' });
            searchValue.current = '';
            setDirty(false);
            props.onBlur && props.onBlur(event);
        };

        const onKeyDown = (event) => {
            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.code) {
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
                    focusedItemInfo;
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        searchItems(event, event.key);
                    }

                    break;
            }
        };

        const onArrowDownKey = (event) => {
            event.preventDefault();

            if (horizontal) {
                const _focusedItemInfo = focusedItemInfo;

                if (ObjectUtils.isNotEmpty(activeItemState) && activeItemState.key === focusedItemInfo.key) {
                    _focusedItemInfo = { index: -1, key: '', parentKey: activeItemState.key };
                    setFocusedItemInfo(_focusedItemInfo);
                } else {
                    const processedItem = findVisibleItem(focusedItemInfo.index);
                    const grouped = isProccessedItemGroup(processedItem);

                    if (grouped) {
                        onItemChange({ originalEvent: event, processedItem });
                        _focusedItemInfo = { index: -1, key: processedItem.key, parentKey: processedItem.parentKey };
                        setFocusedItemInfo(_focusedItemInfo);
                        searchValue.current = '';
                    }
                }

                setTimeout(() => setFocusTrigger(true), 0);
            } else {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

                changeFocusedItemInfo(itemIndex);
            }
        };

        const onArrowUpKey = (event) => {
            const processedItem = findVisibleItem(focusedItemInfo.index);
            const grouped = isProccessedItemGroup(processedItem);

            if (event.altKey && horizontal) {
                if (focusedItemInfo.index !== -1) {
                    if (!grouped && ObjectUtils.isNotEmpty(activeItemState)) {
                        if (focusedItemInfo.index === 0) {
                            setFocusedItemInfo({ index: activeItemState.index, key: activeItemState.key, parentKey: activeItemState.parentKey });
                            setActiveItemState(null);
                        } else {
                            changeFocusedItemInfo(findFirstItemIndex());
                        }
                    }
                }
            } else {
                const itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();

                changeFocusedItemInfo(itemIndex);
            }

            event.preventDefault();
        };

        const onArrowLeftKey = (event) => {
            const processedItem = findVisibleItem(focusedItemInfo.index);
            const grouped = isProccessedItemGroup(processedItem);

            if (grouped) {
                if (horizontal) {
                    const itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();

                    changeFocusedItemInfo(itemIndex);
                }
            } else {
                if (vertical && ObjectUtils.isNotEmpty(activeItemState)) {
                    if (processedItem.columnIndex === 0) {
                        setFocusedItemInfo({ index: activeItemState.index, key: activeItemState.key, parentKey: activeItemState.parentKey });
                        setActiveItemState(null);
                    }
                }

                const columnIndex = processedItem.columnIndex - 1;
                const itemIndex = visibleItems.findIndex((item) => item.columnIndex === columnIndex);

                itemIndex !== -1 && changeFocusedItemInfo(itemIndex);
            }

            event.preventDefault();
        };

        const onArrowRightKey = (event) => {
            event.preventDefault();

            const processedItem = findVisibleItem(focusedItemInfo.index);
            const grouped = isProccessedItemGroup(processedItem);

            if (grouped) {
                if (vertical) {
                    if (ObjectUtils.isNotEmpty(activeItemState) && activeItemState.key === processedItem.key) {
                        setFocusedItemInfo({ index: -1, key: '', parentKey: activeItemState.key });
                    } else {
                        const processedItem = findVisibleItem(focusedItemInfo.index);
                        const grouped = isProccessedItemGroup(processedItem);

                        if (grouped) {
                            onItemChange({ originalEvent: event, processedItem });
                            setFocusedItemInfo({ index: -1, key: processedItem.key, parentKey: processedItem.parentKey });
                            searchValue.current = '';
                        }
                    }
                }

                setTimeout(() => setFocusTrigger(true), 0);
            } else {
                const columnIndex = processedItem.columnIndex + 1;
                const itemIndex = visibleItems.findIndex((item) => item.columnIndex === columnIndex);

                itemIndex !== -1 && changeFocusedItemInfo(itemIndex);
            }
        };

        const onHomeKey = (event) => {
            changeFocusedItemInfo(findFirstItemIndex());
            event.preventDefault();
        };

        const onEndKey = (event) => {
            changeFocusedItemInfo(findLastItemIndex());
            event.preventDefault();
        };

        const onEnterKey = (event) => {
            if (focusedItemInfo.index !== -1) {
                const element = DomHandler.findSingle(menubarRef.current, `li[id="${focusedItemId}"]`);
                const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');

                anchorElement ? anchorElement.click() : element && element.click();
            }

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            onEnterKey(event);
        };

        const onEscapeKey = (event) => {
            if (ObjectUtils.isNotEmpty(activeItemState)) {
                setFocusedItemInfo({ index: activeItemState.index, key: activeItemState.key });
                setActiveItemState(null);
            }

            event.preventDefault();
        };

        const onTabKey = (event) => {
            if (focusedItemInfo.index !== -1) {
                const processedItem = findVisibleItem(focusedItemInfo.index);
                const grouped = isProccessedItemGroup(processedItem);

                !grouped && onItemChange({ originalEvent: event, processedItem });
            }

            hide();
        };

        const isItemMatched = (processedItem) => {
            const label = getProccessedItemLabel(processedItem);

            return isValidItem(processedItem) && label && label.toLocaleLowerCase().startsWith(searchValue.current.toLocaleLowerCase());
        };

        const isValidItem = (processedItem) => {
            return !!processedItem && !isItemDisabled(processedItem.item) && !isItemSeparator(processedItem.item);
        };

        const isValidSelectedItem = (processedItem) => {
            return isValidItem(processedItem) && isSelected(processedItem);
        };

        const isSelected = (processedItem) => {
            return ObjectUtils.isNotEmpty(activeItemState) ? activeItemState.key === processedItem.key : false;
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
            return visibleItems && visibleItems.findIndex((processedItem) => isValidSelectedItem(processedItem));
        };

        const findFirstFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex < 0 ? findFirstItemIndex() : selectedIndex;
        };

        const findLastFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex < 0 ? findLastItemIndex() : selectedIndex;
        };

        const findVisibleItem = (index) => {
            return ObjectUtils.isNotEmpty(visibleItems) ? visibleItems[index] : null;
        };

        const getProccessedItemLabel = (processedItem) => {
            return processedItem && processedItem.item ? getItemLabel(processedItem) : undefined;
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
                changeFocusedItemInfo(itemIndex);
            }

            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }

            searchTimeout.current = setTimeout(() => {
                searchValue.current = '';
                searchTimeout.current = null;
            }, 500);

            return matched;
        };

        const changeFocusedItemInfo = (index) => {
            const processedItem = findVisibleItem(index);
            const key = ObjectUtils.isNotEmpty(processedItem) ? processedItem.key : '';

            setFocusedItemInfo({ ...focusedItemInfo, index, key: key });
            scrollInView();
        };

        const scrollInView = (index = -1) => {
            const id = index !== -1 ? `${idState}_${index}` : focusedItemId;
            const element = DomHandler.findSingle(menubarRef.current, `li[id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        };

        const getItemId = (processedItem) => {
            return `${idState}_${processedItem.key}`;
        };

        const getItemProp = (processedItem, name, params) => {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
        };

        const getItemLabel = (processedItem) => {
            return getItemProp(processedItem, 'label');
        };

        const isItemActive = (processedItem) => {
            return ObjectUtils.isNotEmpty(activeItemState) ? activeItemState.key === processedItem.key : false;
        };

        const isItemVisible = (processedItem) => {
            return getItemProp(processedItem, 'visible') !== false;
        };

        const isItemDisabled = (processedItem) => {
            return getItemProp(processedItem, 'disabled');
        };

        const isItemFocused = (processedItem) => {
            return focusedItemId === getItemId(processedItem);
        };

        const isItemGroup = (processedItem) => {
            return ObjectUtils.isNotEmpty(processedItem.items);
        };

        const isItemSeparator = (item) => {
            return getItemProp(item, 'separator');
        };

        const isProccessedItemGroup = (processedItem) => {
            return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
        };

        const getAriaSetSize = () => {
            return props.model.filter((processedItem) => isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')).length;
        };

        const getAriaPosInset = (index) => {
            return index - props.model.slice(0, index).filter((processedItem) => isItemVisible(processedItem) && getItemProp(processedItem, 'separator')).length + 1;
        };

        const createProcessedItems = (items, level = 0, parent = {}, parentKey = '', columnIndex) => {
            const _processedItems = [];

            items &&
                items.forEach((item, index) => {
                    const key = (parentKey !== '' ? parentKey + '_' : '') + (columnIndex !== undefined ? columnIndex + '_' : '') + index;
                    const newItem = {
                        item,
                        index,
                        level,
                        key,
                        parent,
                        parentKey,
                        columnIndex: columnIndex !== undefined ? columnIndex : parent && parent.columnIndex !== undefined ? parent.columnIndex : index
                    };

                    newItem['items'] = level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => createProcessedItems(_items, level + 1, newItem, key, _index)) : createProcessedItems(item.items, level + 1, newItem, key);
                    _processedItems.push(newItem);
                });

            return _processedItems;
        };

        const createSeparator = (index) => {
            const key = idState + '_separator__' + index;

            const separatorProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('separator'),
                    role: 'separator'
                },
                ptm('separator')
            );

            return <li {...separatorProps}></li>;
        };

        const createSubmenuIcon = (item) => {
            if (item.items) {
                const submenuIconProps = mergeProps(
                    {
                        className: cx('submenuIcon')
                    },
                    ptm('submenuIcon')
                );

                const icon = vertical ? props.submenuIcon || <AngleRightIcon {...submenuIconProps} /> : props.submenuIcon || <AngleDownIcon {...submenuIconProps} />;
                const submenuIcon = IconUtils.getJSXIcon(icon, { ...submenuIconProps }, { props });

                return submenuIcon;
            }

            return null;
        };

        const createSubmenuItem = (processedItem, index) => {
            const item = processedItem.item;

            if (item.visible === false) {
                return null;
            }

            if (item.separator) {
                return createSeparator(index);
            } else {
                const key = getItemId(processedItem);
                const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
                const iconProps = mergeProps(
                    {
                        className: classNames(item.icon, cx('icon'))
                    },
                    ptm('icon')
                );
                const labelProps = mergeProps(
                    {
                        className: cx('label')
                    },
                    ptm('label')
                );
                const iconClassName = classNames(item.icon, 'p-menuitem-icon');
                const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });
                const label = item.label && <span {...labelProps}>{item.label}</span>;

                const actionProps = mergeProps(
                    {
                        href: item.url || '#',
                        className: cx('action', { item }),
                        target: item.target,
                        tabIndex: '-1',
                        'aria-hidden': true
                    },
                    getPTOptions(processedItem, 'action', index)
                );

                const isFocused = isItemFocused(processedItem);
                const isDisabled = isItemDisabled(processedItem);
                const isGroup = isItemGroup(processedItem);
                const isActive = isItemActive(processedItem);

                const submenuItemProps = mergeProps(
                    {
                        key,
                        id: key,
                        'aria-label': getItemLabel(processedItem),
                        'aria-disabled': isDisabled,
                        'aria-haspopup': isGroup ? 'menu' : undefined,
                        'aria-level': '2',
                        'aria-expanded': isGroup ? isActive : undefined,
                        'aria-setsize': getAriaSetSize(),
                        'aria-posinset': getAriaPosInset(index),
                        'data-p-highlight': isActive,
                        'data-p-disabled': isDisabled,
                        'data-p-focused': isFocused,
                        className: classNames(item.className, cx('submenuItem', { focused: isFocused, disabled: isDisabled, active: isActive })),
                        style: item.style,
                        role: 'menuitem'
                    },
                    getPTOptions(processedItem, 'submenuItem', index)
                );

                const contentProps = mergeProps(
                    {
                        onClick: (event) => onLeafClick({ originalEvent: event, processedItem: processedItem }),
                        className: cx('content')
                    },
                    getPTOptions(processedItem, 'content', index)
                );

                let content = (
                    <a {...actionProps}>
                        {icon}
                        {label}
                        <Ripple />
                    </a>
                );

                if (item.template) {
                    const defaultContentOptions = {
                        className: linkClassName,
                        labelClassName: 'p-menuitem-text',
                        iconClassName,
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
                }

                return (
                    <li {...submenuItemProps}>
                        <div {...contentProps}>{content}</div>
                    </li>
                );
            }
        };

        const createSubmenu = (submenu, index) => {
            if (!isItemVisible(submenu)) {
                return null;
            }

            const items = submenu.items.map(createSubmenuItem);

            const key = submenu.id || idState + '_sub_' + index;
            const label = getItemLabel(submenu);
            const isDisabled = isItemDisabled(submenu);

            const submenuHeaderProps = mergeProps(
                {
                    id: key,
                    key,
                    className: classNames(submenu.className, cx('submenuHeader', { disabled: isDisabled })),
                    style: submenu.style,
                    role: 'presentation',
                    'data-p-disabled': isDisabled
                },
                ptm('submenuHeader')
            );

            return (
                <React.Fragment key={key}>
                    <li {...submenuHeaderProps}>{label}</li>
                    {items}
                </React.Fragment>
            );
        };

        const createSubmenus = (column) => {
            return column.map(createSubmenu);
        };

        const createColumn = (processedItem, processedColumn, index) => {
            const category = processedItem.item;
            const key = category.label + '_column_' + index;
            const submenus = createSubmenus(processedColumn);

            const columnProps = mergeProps(
                {
                    key: key,
                    className: cx('column', { category })
                },
                ptm('column')
            );

            const display = activeItemState && activeItemState.item === category ? 'block' : 'none';

            const submenuProps = mergeProps(
                {
                    role: 'menu',
                    tabIndex: props.disabled ? null : props.tabIndex || '0',
                    className: cx('submenu'),
                    style: { display: display }
                },
                ptm('submenu')
            );

            return (
                <div {...columnProps}>
                    <ul {...submenuProps}>{submenus}</ul>
                </div>
            );
        };

        const createColumns = (category) => {
            if (category.items) {
                return category.items.map((column, index) => {
                    return createColumn(category, column, index);
                });
            }

            return null;
        };

        const createCategoryPanel = (processedItem) => {
            const category = processedItem.item;

            if (category.items) {
                const columns = createColumns(processedItem);

                const panelProps = mergeProps(
                    {
                        className: cx('panel')
                    },
                    ptm('panel')
                );

                const gridProps = mergeProps(
                    {
                        className: cx('grid')
                    },
                    ptm('grid')
                );

                return (
                    <div {...panelProps}>
                        <div {...gridProps}>{columns}</div>
                    </div>
                );
            }

            return null;
        };

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

                const selector = `${attributeSelectorState}`;

                const innerHTML = `
                    @media screen and (max-width: ${props.breakpoint}) {
                        .p-megamenu[${selector}] > .p-megamenu-root-list .p-menuitem-active .p-megamenu-panel {
                            position: relative;
                            left: 0;
                            box-shadow: none;
                            border-radius: 0;
                            background: inherit;
                        }

                        .p-megamenu[${selector}] {
                            width: 100%;
                            position: relative;
                            padding: 0.5rem;
                        }

                        .p-megamenu[${selector}] .p-megamenu-grid {
                            flex-wrap: wrap;
                        }

                        .p-megamenu[${selector}] .p-megamenu-button {
                            display: flex;
                        }

                        .p-megamenu[${selector}] .p-megamenu-root-list {
                            display: none;
                        }

                        .p-megamenu[${selector}] div[class*="p-megamenu-col-"] {
                            width: 100%;
                        }

                        .p-megamenu[${selector}].p-megamenu-mobile-active .p-megamenu-root-list {
                            left: 0;
                            top: 100%;
                            z-index: 1;
                            width: 100%;
                            display: flex;
                            padding: 0.5rem 0;
                            position: absolute;
                            flex-direction: column;
                        }

                        .p-megamenu[${selector}] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                            margin-left: auto;
                        }
                        
                        .p-megamenu[${selector}] .p-submenu-list .p-menuitem-content .p-menuitem-link {
                            padding-left: 2.25rem;
                        }

                        ${
                            horizontal
                                ? `
                                    .p-megamenu[${selector}] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-180deg);
                                    }
                            `
                                : ''
                        }

                        ${
                            vertical
                                ? `                                                                   
                                    .p-megamenu[${selector}] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(90deg);
                                    }

                                    .p-megamenu[${selector}] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-90deg);
                                    }
                            `
                                : ''
                        }
                    }
                `;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        const createCategory = (processedItem, index) => {
            const category = processedItem.item;
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions(processedItem, 'icon', index)
            );
            const icon = IconUtils.getJSXIcon(category.icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions(processedItem, 'label', index)
            );
            const label = category.label && <span {...labelProps}>{category.label}</span>;
            const submenuIcon = createSubmenuIcon(category);
            const panel = createCategoryPanel(processedItem);

            const headerActionProps = mergeProps(
                {
                    href: category.url || '#',
                    className: cx('action', { item: category }),
                    target: category.target,
                    onFocus: (event) => event.stopPropagation(),
                    tabIndex: '-1',
                    'aria-hidden': true
                },
                getPTOptions(processedItem, 'action', index)
            );

            const itemContent = category.template ? (
                ObjectUtils.getJSXElement(category.template, category, headerActionProps)
            ) : (
                <a {...headerActionProps}>
                    {icon}
                    {label}
                    {submenuIcon}
                    <Ripple />
                </a>
            );

            const key = getItemId(processedItem);
            const isFocused = isItemFocused(processedItem);
            const isDisabled = isItemDisabled(processedItem);
            const menuItemProps = mergeProps(
                {
                    key,
                    id: key,
                    className: classNames(category.className, cx('menuitem', { category, activeItemState, focused: isFocused, disabled: isDisabled })),
                    'aria-label': getItemLabel(category),
                    'aria-level': '1',
                    'aria-setsize': getAriaSetSize(),
                    'aria-posinset': getAriaPosInset(index),
                    'aria-expanded': isItemGroup(processedItem) ? isItemActive(processedItem) : undefined,
                    'aria-haspopup': isItemGroup(processedItem) ? 'menu' : undefined,
                    'aria-disabled': isItemDisabled(processedItem),
                    'data-p-highlight': isItemActive(category),
                    'data-p-disabled': isDisabled,
                    'data-p-focused': isFocused,
                    style: category.style,
                    role: 'menuitem',
                    'data-p-disabled': category.disabled || false
                },
                getPTOptions(processedItem, 'menuitem', index)
            );

            const contentProps = mergeProps(
                {
                    onClick: (event) => onCategoryClick({ originalEvent: event, processedItem: processedItem }),
                    onMouseEnter: (e) => onCategoryMouseEnter({ originalEvent: e, processedItem: processedItem }),
                    className: cx('content')
                },
                getPTOptions(processedItem, 'content', index)
            );

            return (
                <li {...menuItemProps}>
                    <div {...contentProps}>{itemContent}</div>
                    {panel}
                </li>
            );
        };

        const createMenu = () => {
            const menuProps = mergeProps(
                {
                    ref: menubarRef,
                    tabIndex: props.disabled ? null : props.tabIndex || '0',
                    className: cx('menu'),
                    onFocus: onFocus,
                    onBlur: onBlur,
                    onKeyDown: onKeyDown,
                    'aria-label': props.ariaLabel,
                    'aria-labelledby': props.ariaLabelledBy,
                    'aria-orientation': vertical ? 'vertical' : 'horizontal',
                    'aria-activedescendant': focused ? focusedItemId : null,
                    id: idState + '_list',
                    role: 'menubar'
                },
                ptm('menu')
            );

            if (processedItems) {
                return (
                    <ul {...menuProps}>
                        {processedItems.map((item, index) => {
                            return createCategory(item, index, true);
                        })}
                    </ul>
                );
            }

            return null;
        };

        const createStartContent = () => {
            const startProps = mergeProps(
                {
                    className: cx('start')
                },
                ptm('start')
            );

            if (props.start) {
                const start = ObjectUtils.getJSXElement(props.start, props);

                return <div {...startProps}>{start}</div>;
            }

            return null;
        };

        const createEndContent = () => {
            const endProps = mergeProps(
                {
                    className: cx('end')
                },
                ptm('end')
            );

            if (props.end) {
                const end = ObjectUtils.getJSXElement(props.end, props);

                return <div {...endProps}>{end}</div>;
            }

            return null;
        };

        const createMenuButton = () => {
            if (props.model && props.model.length < 1) {
                return null;
            }

            const menuButtonProps = mergeProps(
                {
                    className: cx('menuButton'),
                    href: '#',
                    role: 'button',
                    'aria-haspopup': props.model && props.model.length > 0 ? true : false,
                    'aria-expanded': mobileActiveState,
                    'aria-controls': idState,
                    'aria-label': ariaLabel('navigation'),
                    tabIndex: 0,
                    onClick: (e) => toggle(e)
                },
                ptm('menuButton')
            );

            const menuButtonIconProps = mergeProps(ptm('menuButtonIcon'));

            const icon = props.menuIcon || <BarsIcon {...menuButtonIconProps} />;
            const menuIcon = IconUtils.getJSXIcon(icon, { ...menuButtonIconProps }, { props });
            /* eslint-disable */
            const button = (
                <a ref={menuButtonRef} {...menuButtonProps}>
                    {menuIcon}
                </a>
            );
            /* eslint-enable */

            return button;
        };

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root', { mobileActiveState })),
                id: idState,
                style: props.style
            },
            MegaMenuBase.getOtherProps(props),
            ptm('root')
        );

        const menu = createMenu();
        const start = createStartContent();
        const end = createEndContent();
        const menuButton = createMenuButton();

        return (
            <div id={props.id} ref={elementRef} {...rootProps}>
                {start}
                {menuButton}
                {menu}
                {end}
            </div>
        );
    })
);

MegaMenu.displayName = 'MegaMenu';
