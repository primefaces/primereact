import * as React from 'react';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { PanelMenuSub } from './PanelMenuSub';
``;

export const PanelMenuList = React.memo((props) => {
    const { ptm, cx } = props;

    const [focused, setFocused] = React.useState(false);
    const [focusedItem, setFocusedItem] = React.useState(null);
    const [focusedItemId, setFocusedItemId] = React.useState(null);
    const [activeItemPath, setActiveItemPath] = React.useState([]);
    const [processedItems, setProcessedItems] = React.useState(null);
    const [visibleItems, setVisibleItems] = React.useState([]);

    const searchValue = React.useRef(null);
    const searchTimeout = React.useRef(null);
    const elementRef = React.useRef(null);

    const getItemProp = (processedItem, name) => {
        return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
    };

    const getItemLabel = (processedItem) => {
        return getItemProp(processedItem, 'label');
    };

    const isItemVisible = (processedItem) => {
        return getItemProp(processedItem, 'visible') !== false;
    };

    const isItemDisabled = (processedItem) => {
        return getItemProp(processedItem, 'disabled');
    };

    const isItemActive = (processedItem) => {
        return activeItemPath && activeItemPath.some((path) => path.key === processedItem.parentKey);
    };

    const isItemGroup = (processedItem) => {
        return ObjectUtils.isNotEmpty(processedItem.items);
    };

    const getListElement = () => {
        return elementRef.current && elementRef.current.getElement();
    };

    const onFocus = (event) => {
        setFocused(true);
        const _focusedItem = focusedItem || (isElementInPanel(event, event.relatedTarget) ? findFirstItem() : findLastItem());

        setFocusedItem(_focusedItem);
    };

    const onBlur = () => {
        setFocused(false);
        setFocusedItem(null);
        searchValue.current = '';
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
            case 'NumpadEnter':
                onEnterKey(event);
                break;

            case 'Escape':
            case 'Tab':
            case 'PageDown':
            case 'PageUp':
            case 'Backspace':
            case 'ShiftLeft':
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
        const processedItem = ObjectUtils.isNotEmpty(focusedItem) ? findNextItem(focusedItem) : findFirstItem();

        changeFocusedItem({ originalEvent: event, processedItem, focusOnNext: true });
        event.preventDefault();
    };

    const onArrowUpKey = (event) => {
        const processedItem = ObjectUtils.isNotEmpty(focusedItem) ? findPrevItem(focusedItem) : findLastItem();

        changeFocusedItem({ originalEvent: event, processedItem, selfCheck: true });
        event.preventDefault();
    };

    const onArrowLeftKey = (event) => {
        if (ObjectUtils.isNotEmpty(focusedItem)) {
            const matched = activeItemPath.some((p) => p.key === focusedItem.key);

            if (matched) {
                setActiveItemPath(activeItemPath.filter((p) => p.key !== focusedItem.key));
            } else {
                setFocusedItem(ObjectUtils.isNotEmpty(focusedItem.parent) ? focusedItem.parent : focusedItem);
            }

            event.preventDefault();
        }
    };

    const onArrowRightKey = (event) => {
        if (ObjectUtils.isNotEmpty(focusedItem)) {
            const grouped = isItemGroup(focusedItem);

            if (grouped) {
                const matched = activeItemPath.some((p) => p.key === focusedItem.key);

                if (matched) {
                    onArrowDownKey(event);
                } else {
                    const _activeItemPath = activeItemPath.filter((p) => p.parentKey !== focusedItem.parentKey);

                    _activeItemPath.push(focusedItem);
                    setActiveItemPath(_activeItemPath);
                }
            }

            event.preventDefault();
        }
    };

    const onHomeKey = (event) => {
        changeFocusedItem({ originalEvent: event, processedItem: findFirstItem(), allowHeaderFocus: false });
        event.preventDefault();
    };

    const onEndKey = (event) => {
        changeFocusedItem({ originalEvent: event, processedItem: findLastItem(), focusOnNext: true, allowHeaderFocus: false });
        event.preventDefault();
    };

    const onEnterKey = (event) => {
        if (ObjectUtils.isNotEmpty(focusedItem)) {
            const element = DomHandler.findSingle(getListElement(), `li[id="${`${focusedItemId}`}"]`);
            const anchorElement = element && (DomHandler.findSingle(element, '[data-pc-section="action"]') || DomHandler.findSingle(element, 'a,button'));

            anchorElement ? anchorElement.click() : element && element.click();
        }

        event.preventDefault();
    };

    const onSpaceKey = (event) => {
        onEnterKey(event);
    };

    const onItemToggle = (event) => {
        const { processedItem, expanded } = event;

        if (props.expandedKeys) {
            props.onToggle && props.onToggle({ item: processedItem.item, expanded });
        } else {
            const _activeItemPath = activeItemPath.filter((p) => p.parentKey !== processedItem.parentKey);

            expanded && _activeItemPath.push(processedItem);
            setActiveItemPath(_activeItemPath);
        }

        DomHandler.focus(getListElement());
        setFocusedItem(processedItem);
    };

    const isElementInPanel = (event, element) => {
        const panel = event.currentTarget.closest('[data-pc-section="panel"]');

        return panel && panel.contains(element);
    };

    const isItemMatched = (processedItem) => {
        return isValidItem(processedItem) && getItemLabel(processedItem).toLocaleLowerCase().startsWith(searchValue.current.toLocaleLowerCase());
    };

    const isVisibleItem = (processedItem) => {
        return !!processedItem && (processedItem.level === 0 || isItemActive(processedItem)) && isItemVisible(processedItem);
    };

    const isValidItem = (processedItem) => {
        return !!processedItem && !isItemDisabled(processedItem) && !getItemProp(processedItem, 'separator');
    };

    const findFirstItem = () => {
        return visibleItems.find((processedItem) => isValidItem(processedItem));
    };

    const findLastItem = () => {
        return ObjectUtils.findLast(visibleItems, (processedItem) => isValidItem(processedItem));
    };

    const findNextItem = (processedItem) => {
        const index = visibleItems.findIndex((item) => item.key === processedItem.key);
        const matchedItem = index < visibleItems.length - 1 ? visibleItems.slice(index + 1).find((pItem) => isValidItem(pItem)) : undefined;

        return matchedItem || processedItem;
    };

    const findPrevItem = (processedItem) => {
        const index = visibleItems.findIndex((item) => item.key === processedItem.key);
        const matchedItem = index > 0 ? ObjectUtils.findLast(visibleItems.slice(0, index), (pItem) => isValidItem(pItem)) : undefined;

        return matchedItem || processedItem;
    };

    const searchItems = (event, char) => {
        searchValue.current = (searchValue.current || '') + char;

        let matchedItem = null;
        let matched = false;

        if (ObjectUtils.isNotEmpty(focusedItem)) {
            const focusedItemIndex = visibleItems.findIndex((processedItem) => processedItem.key === focusedItem.key);

            matchedItem = visibleItems.slice(focusedItemIndex).find((processedItem) => isItemMatched(processedItem));
            matchedItem = ObjectUtils.isEmpty(matchedItem) ? visibleItems.slice(0, focusedItemIndex).find((processedItem) => isItemMatched(processedItem)) : matchedItem;
        } else {
            matchedItem = visibleItems.find((processedItem) => isItemMatched(processedItem));
        }

        if (ObjectUtils.isNotEmpty(matchedItem)) {
            matched = true;
        }

        if (ObjectUtils.isEmpty(matchedItem) && ObjectUtils.isEmpty(focusedItem)) {
            matchedItem = findFirstItem();
        }

        if (ObjectUtils.isNotEmpty(matchedItem)) {
            changeFocusedItem({
                originalEvent: event,
                processedItem: matchedItem,
                allowHeaderFocus: false
            });
        }

        if (searchTimeout) {
            clearTimeout(searchTimeout.current);
        }

        searchTimeout.current = setTimeout(() => {
            searchValue.current = '';
            searchTimeout.currentt = null;
        }, 500);

        return matched;
    };

    const changeFocusedItem = (event) => {
        const { originalEvent, processedItem, focusOnNext, selfCheck, allowHeaderFocus = true } = event;

        if (ObjectUtils.isNotEmpty(focusedItem) && focusedItem.key !== processedItem.key) {
            setFocusedItem(processedItem);
            scrollInView();
        } else if (allowHeaderFocus) {
            props.onHeaderFocus && props.onHeaderFocus({ originalEvent, focusOnNext, selfCheck });
        }
    };

    const scrollInView = () => {
        const element = DomHandler.findSingle(getListElement(), `li[id="${`${focusedItemId}`}"]`);

        if (element) {
            element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    };

    const autoUpdateActiveItemPath = (expandedKeys) => {
        const _activeItemPath = Object.entries(expandedKeys || {}).reduce((acc, [key, val]) => {
            if (val) {
                const processedItem = findProcessedItemByItemKey(key);

                processedItem && acc.push(processedItem);
            }

            return acc;
        }, []);

        setActiveItemPath(_activeItemPath);
    };

    const findProcessedItemByItemKey = (key, processed, level = 0) => {
        const _processedItems = processed ? processed : level === 0 && props.model;

        if (!_processedItems) return null;

        for (let i = 0; i < _processedItems.length; i++) {
            const processedItem = _processedItems[i];
            const processedKey = getItemProp(processedItem, 'key') || processedItem.key;

            if (processedKey === key) return processedItem;

            const matchedItem = findProcessedItemByItemKey(key, processedItem.items, level + 1);

            if (matchedItem) return matchedItem;
        }
    };

    const createProcessedItems = (items, level = 0, parent = {}, parentKey = '') => {
        const processedItems = [];

        items &&
            items.forEach((item, index) => {
                const key = item.key ? item.key : (parentKey !== '' ? parentKey + '_' : '') + index;
                const newItem = {
                    item,
                    index,
                    level,
                    key,
                    parent,
                    parentKey
                };

                newItem['items'] = createProcessedItems(item.items, level + 1, newItem, key);
                processedItems.push(newItem);
            });

        return processedItems;
    };

    const flatItems = (processedItems, processedFlattenItems = []) => {
        processedItems &&
            processedItems.forEach((processedItem) => {
                if (isVisibleItem(processedItem)) {
                    processedFlattenItems.push(processedItem);
                    flatItems(processedItem.items, processedFlattenItems);
                }
            });

        return processedFlattenItems;
    };

    React.useEffect(() => {
        const processed = createProcessedItems(props.model);

        setProcessedItems(processed);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.model]);

    React.useEffect(() => {
        const _visibleItems = flatItems(processedItems);

        setVisibleItems(_visibleItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [processedItems, activeItemPath]);

    React.useEffect(() => {
        autoUpdateActiveItemPath(props.expandedKeys);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.expandedKeys]);

    useUpdateEffect(() => {
        const _id = ObjectUtils.isNotEmpty(focusedItem) ? `${props.panelId}_${focusedItem.key}` : null;

        setFocusedItemId(_id);
    }, [props.panelId, focusedItem]);

    return (
        <PanelMenuSub
            hostName="PanelMenu"
            id={props.panelId + '_list'}
            ref={elementRef}
            role="tree"
            tabIndex={-1}
            ariaActivedescendant={focused ? focusedItemId : undefined}
            panelId={props.panelId}
            focusedItemId={focused ? focusedItemId : undefined}
            model={processedItems}
            activeItemPath={activeItemPath}
            menuProps={props.menuProps}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onItemToggle={onItemToggle}
            level={0}
            className={cx('submenu')}
            submenuIcon={props.submenuIcon}
            root
            ptm={ptm}
            cx={cx}
        />
    );
});

PanelMenuList.displayName = 'PanelMenuList';
