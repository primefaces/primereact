import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMatchMedia, useMergeProps, useMountEffect, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { ContextMenuBase } from './ContextMenuBase';
import { ContextMenuSub } from './ContextMenuSub';

export const ContextMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ContextMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [visibleState, setVisibleState] = React.useState(false);
        const [reshowState, setReshowState] = React.useState(false);
        const [resetMenuState, setResetMenuState] = React.useState(false);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const [focused, setFocused] = React.useState(false);
        const [focusTrigger, setFocusTrigger] = React.useState(false);
        const [focusedItemInfo, setFocusedItemInfo] = React.useState({ index: -1, level: 0, parentKey: '' });
        const [activeItemPath, setActiveItemPath] = React.useState('');
        const [processedItems, setProcessedItems] = React.useState([]);
        const [visibleItems, setVisibleItems] = React.useState([]);
        const [focusedItemId, setFocusedItemId] = React.useState(null);

        const { ptm, cx, isUnstyled } = ContextMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                visible: visibleState,
                reshow: reshowState,
                resetMenu: resetMenuState,
                attributeSelector: attributeSelectorState
            }
        });

        useHandleStyle(ContextMenuBase.css.styles, isUnstyled, { name: 'contextmenu' });
        const menuRef = React.useRef(null);
        const listRef = React.useRef(null);
        const currentEvent = React.useRef(null);
        const searchValue = React.useRef('');
        const searchTimeout = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (isOutsideClicked(event) && event.button !== 2) {
                    hide(event);
                    setResetMenuState(true);
                }
            }
        });

        const [bindDocumentContextMenuListener] = useEventListener({
            type: 'contextmenu',
            when: props.global,
            listener: (event) => {
                show(event);
            }
        });

        const [bindDocumentResizeListener, unbindDocumentResizeListener] = useResizeListener({
            listener: (event) => {
                if (visibleState && !DomHandler.isTouchDevice()) {
                    hide(event);
                }
            }
        });

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

                const selector = `${attributeSelectorState}`;
                const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-contextmenu[${selector}] > ul {
        max-height: ${props.scrollHeight};
        overflow: ${props.scrollHeight ? 'auto' : ''};
    }

    .p-contextmenu[${selector}] .p-submenu-list {
        position: relative;
    }

    .p-contextmenu[${selector}] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-contextmenu[${selector}] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-contextmenu[${selector}] .p-submenu-icon:before {
        content: "\\e930";
    }
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        const onMenuClick = () => {
            setResetMenuState(false);
        };

        const onMenuMouseEnter = () => {
            setResetMenuState(false);
        };

        const show = (event) => {
            setActiveItemPath([]);
            setFocusedItemInfo({ index: -1, level: 0, parentKey: '' });
            event.stopPropagation();
            event.preventDefault();

            currentEvent.current = event;

            if (visibleState) {
                setReshowState(true);
            } else {
                setVisibleState(true);
                props.onShow && props.onShow(currentEvent.current);
            }

            Promise.resolve().then(() => {
                listRef.current && DomHandler.focus(listRef.current.getElement());
            });
        };

        const hide = (event) => {
            currentEvent.current = event;
            setVisibleState(false);
            setReshowState(false);
            setActiveItemPath([]);
            setFocusedItemInfo({ index: -1, level: 0, parentKey: '' });
            props.onHide && props.onHide(currentEvent.current);
        };

        const onEnter = () => {
            DomHandler.addStyles(menuRef.current, { position: 'absolute' });

            if (props.autoZIndex) {
                ZIndexUtils.set('menu', menuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
            }

            position(currentEvent.current);

            if (attributeSelectorState && props.breakpoint) {
                menuRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }
        };

        const onEntered = () => {
            bindDocumentListeners();
        };

        const onExit = () => {
            unbindDocumentListeners();
            ZIndexUtils.clear(menuRef.current);
        };

        const onExited = () => {
            ZIndexUtils.clear(menuRef.current);
            destroyStyle();
        };

        const position = (event) => {
            if (event) {
                let left = event.pageX + 1;
                let top = event.pageY + 1;
                let width = menuRef.current.offsetParent ? menuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(menuRef.current);
                let height = menuRef.current.offsetParent ? menuRef.current.offsetHeight : DomHandler.getHiddenElementOuterHeight(menuRef.current);
                let viewport = DomHandler.getViewport();

                //flip
                if (left + width - document.body.scrollLeft > viewport.width) {
                    left -= width;
                }

                //flip
                if (top + height - document.body.scrollTop > viewport.height) {
                    top -= height;
                }

                //fit
                if (left < document.body.scrollLeft) {
                    left = document.body.scrollLeft;
                }

                //fit
                if (top < document.body.scrollTop) {
                    top = document.body.scrollTop;
                }

                menuRef.current.style.left = left + 'px';
                menuRef.current.style.top = top + 'px';
            }
        };

        const createProcessedItems = React.useCallback((items, level, parent = {}, parentKey = '') => {
            const processedItems = [];

            items &&
                items.forEach((item, index) => {
                    const key = (parentKey !== '' ? parentKey + '_' : '') + index;
                    const newItem = {
                        item,
                        index,
                        level,
                        separator: item.separator,
                        key,
                        parent,
                        parentKey
                    };

                    newItem['items'] = createProcessedItems(item.items, level + 1, newItem, key);
                    processedItems.push(newItem);
                });

            return processedItems;
        }, []);

        const onLeafClick = (event) => {
            setResetMenuState(true);
            hide(event);

            event.stopPropagation();
        };

        const isOutsideClicked = (event) => {
            return menuRef && menuRef.current && !(menuRef.current.isSameNode(event.target) || menuRef.current.contains(event.target));
        };

        const bindDocumentListeners = () => {
            bindDocumentResizeListener();
            bindDocumentClickListener();
        };

        const unbindDocumentListeners = () => {
            unbindDocumentResizeListener();
            unbindDocumentClickListener();
        };

        useMountEffect(() => {
            const uniqueId = UniqueComponentId();

            !idState && setIdState(uniqueId);

            if (props.global) {
                bindDocumentContextMenuListener();
            }

            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(uniqueId);
            }
        });

        useUpdateEffect(() => {
            props.global && bindDocumentContextMenuListener();
        }, [props.global]);

        useUpdateEffect(() => {
            if (attributeSelectorState && menuRef.current) {
                menuRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

        useUpdateEffect(() => {
            if (visibleState) {
                setVisibleState(false);
                setReshowState(false);
                setResetMenuState(true);
            } else if (!reshowState && !visibleState && resetMenuState) {
                show(currentEvent.current);
            }
        }, [reshowState]);

        React.useEffect(() => {
            const itemsToProcess = props.model || [];
            const processed = createProcessedItems(itemsToProcess, 0, null, '');

            setProcessedItems(processed);
        }, [props.model, createProcessedItems]);

        useUpdateEffect(() => {
            const _focusedItemId = focusedItemInfo.index !== -1 ? `${idState}${ObjectUtils.isNotEmpty(focusedItemInfo.parentKey) ? '_' + focusedItemInfo.parentKey : ''}_${focusedItemInfo.index}` : null;

            setFocusedItemId(_focusedItemId);
        }, [focusedItemInfo]);

        useUpdateEffect(() => {
            const processedItem = activeItemPath && activeItemPath.find((p) => p.key === focusedItemInfo.parentKey);
            const _visibleItems = processedItem ? processedItem.items : processedItems;

            setVisibleItems(_visibleItems);
        }, [activeItemPath, focusedItemInfo]);

        useUpdateEffect(() => {
            if (focusTrigger) {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);
                setActiveItemPath(activeItemPath.filter((p) => p.parentKey !== focusedItemInfo.parentKey));
                setFocusTrigger(false);
            }
        }, [focusTrigger]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(menuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            getElement: () => menuRef.current
        }));

        const onFocus = (event) => {
            setFocused(true);
            setFocusedItemInfo(focusedItemInfo.index !== -1 ? focusedItemInfo : { index: -1, level: 0, parentKey: '' });
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocused(false);
            setFocusedItemInfo({ index: -1, level: 0, parentKey: '' });
            searchValue.current = '';
            searchValue.current = '';
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
                case 'ShiftRight':
                    // NOOP
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        searchItems(event, event.key);
                    }

                    break;
            }
        };

        const onItemChange = (event) => {
            const { processedItem, isFocus, updateState = true } = event;

            if (ObjectUtils.isEmpty(processedItem)) return;

            const { index, key, level, parentKey, items } = processedItem;
            const grouped = ObjectUtils.isNotEmpty(items);
            const _activeItemPath = activeItemPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);

            if (grouped && updateState) {
                _activeItemPath.push(processedItem);
                setVisibleState(true);
            }

            setFocusedItemInfo({ index, level, parentKey });
            setActiveItemPath(_activeItemPath);

            isFocus && DomHandler.focus(listRef.current.getElement());
        };

        const onItemClick = (event) => {
            const { processedItem } = event;
            const grouped = isProccessedItemGroup(processedItem);
            const selected = isSelected(processedItem);

            if (selected) {
                const { index, key, level, parentKey } = processedItem;

                setActiveItemPath(activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key)));
                setFocusedItemInfo({ index, level, parentKey });

                DomHandler.focus(listRef.current.getElement());
            } else {
                grouped ? onItemChange(event) : hide();
            }
        };

        const onItemMouseEnter = (event) => {
            onItemChange(event);
        };

        const onArrowDownKey = (event) => {
            const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

            changeFocusedItemIndex(itemIndex);
            event.preventDefault();
        };

        const onArrowUpKey = (event) => {
            if (event.altKey) {
                if (focusedItemInfo.index !== -1) {
                    const processedItem = visibleItems[focusedItemInfo.index];
                    const grouped = isProccessedItemGroup(processedItem);

                    !grouped && onItemChange({ originalEvent: event, processedItem });
                }

                event.preventDefault();
            } else {
                const itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);
                event.preventDefault();
            }
        };

        const onArrowLeftKey = (event) => {
            const processedItem = visibleItems[focusedItemInfo.index];
            const parentItem = activeItemPath.find((p) => p.key === processedItem.parentKey);
            const root = ObjectUtils.isEmpty(processedItem.parent);

            if (!root) {
                setFocusedItemInfo({ index: -1, parentKey: parentItem ? parentItem.parentKey : '' });
                searchValue.current = '';
                setTimeout(() => setFocusTrigger(true), 0);
            }

            event.preventDefault();
        };

        const onArrowRightKey = (event) => {
            const processedItem = visibleItems[focusedItemInfo.index];
            const grouped = isProccessedItemGroup(processedItem);

            if (grouped) {
                onItemChange({ originalEvent: event, processedItem });
                setFocusedItemInfo({ index: -1, parentKey: processedItem.key });
                searchValue.current = '';
                setTimeout(() => setFocusTrigger(true), 0);
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
                const element = DomHandler.findSingle(listRef.current.getElement(), `li[id="${`${focusedItemId}`}"]`);
                const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');

                anchorElement ? anchorElement.click() : element && element.click();
                const processedItem = visibleItems[focusedItemInfo.index];
                const grouped = isProccessedItemGroup(processedItem);

                !grouped && setFocusedItemInfo({ ...focusedItemInfo, index: findFirstFocusedItemIndex() });
            }

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            onEnterKey(event);
        };

        const onEscapeKey = (event) => {
            hide();
            setFocusedItemInfo({ focusedItemInfo, index: findFirstFocusedItemIndex() });
            event.preventDefault();
        };

        const onTabKey = (event) => {
            if (focusedItemInfo.index !== -1) {
                const processedItem = visibleItems[focusedItemInfo.index];
                const grouped = isProccessedItemGroup(processedItem);

                !grouped && onItemChange({ originalEvent: event, processedItem });
            }

            hide();
        };

        const searchItems = (event, char) => {
            searchValue.current = searchValue.current || '' + char;

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
            const _id = index !== -1 ? `${idState}_${index}` : focusedItemId;
            const element = DomHandler.findSingle(listRef.current.getElement(), `li[id="${_id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        };

        const getItemProp = (item, name) => {
            return item ? ObjectUtils.getItemValue(item[name]) : undefined;
        };

        const getItemLabel = (item) => {
            return getItemProp(item, 'label');
        };

        const getProccessedItemLabel = (processedItem) => {
            return processedItem ? getItemLabel(processedItem.item) : undefined;
        };

        const isProccessedItemGroup = (processedItem) => {
            return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
        };

        const isItemDisabled = (item) => {
            return getItemProp(item, 'disabled');
        };

        const isItemSeparator = (item) => {
            return getItemProp(item, 'separator');
        };

        const isValidItem = (processedItem) => {
            return !!processedItem && !isItemDisabled(processedItem.item) && !isItemSeparator(processedItem.item);
        };

        const isItemMatched = (processedItem) => {
            return isValidItem(processedItem) && getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(searchValue.current.toLocaleLowerCase());
        };

        const findNextItemIndex = (index) => {
            const matchedItemIndex = index < visibleItems.length - 1 ? visibleItems.slice(index + 1).findIndex((processedItem) => isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
        };

        const findPrevItemIndex = (index) => {
            const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(visibleItems.slice(0, index), (processedItem) => isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex : index;
        };

        const isSelected = (processedItem) => {
            return activeItemPath && activeItemPath.some((p) => p.key === processedItem.key);
        };

        const isValidSelectedItem = (processedItem) => {
            return isValidItem(processedItem) && isSelected(processedItem);
        };

        const findFirstItemIndex = () => {
            return visibleItems.findIndex((processedItem) => isValidItem(processedItem));
        };

        const findLastItemIndex = () => {
            return ObjectUtils.findLastIndex(visibleItems, (processedItem) => isValidItem(processedItem));
        };

        const findFirstFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex < 0 ? findFirstItemIndex() : selectedIndex;
        };

        const findLastFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex < 0 ? findLastItemIndex() : selectedIndex;
        };

        const findSelectedItemIndex = () => {
            return visibleItems.findIndex((processedItem) => isValidSelectedItem(processedItem));
        };

        const createContextMenu = () => {
            const rootProps = mergeProps(
                {
                    id: props.id,
                    className: classNames(props.className, cx('root', { context })),
                    style: props.style,
                    onClick: (e) => onMenuClick(e),
                    onMouseEnter: (e) => onMenuMouseEnter(e)
                },
                ContextMenuBase.getOtherProps(props),
                ptm('root')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: visibleState,
                    timeout: { enter: 250, exit: 0 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter: onEnter,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExited: onExited
                },
                ptm('transition')
            );

            return (
                <CSSTransition nodeRef={menuRef} {...transitionProps}>
                    <div ref={menuRef} {...rootProps}>
                        <ContextMenuSub
                            ref={listRef}
                            ariaLabel={props.ariaLabel}
                            ariaLabelledby={props.ariaLabelledby}
                            activeItemPath={activeItemPath}
                            hostName="ContextMenu"
                            id={idState + '_list'}
                            role="menubar"
                            tabIndex={props.tabIndex || 0}
                            ariaActivedescendant={focused ? focusedItemId : undefined}
                            menuId={idState}
                            focusedItemId={focused ? focusedItemId : undefined}
                            menuProps={props}
                            model={processedItems}
                            level={0}
                            root
                            onItemClick={onItemClick}
                            onItemMouseEnter={onItemMouseEnter}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onKeyDown={onKeyDown}
                            resetMenu={resetMenuState}
                            onLeafClick={onLeafClick}
                            isMobileMode={isMobileMode}
                            submenuIcon={props.submenuIcon}
                            ptm={ptm}
                            cx={cx}
                        />
                    </div>
                </CSSTransition>
            );
        };

        const element = createContextMenu();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

ContextMenu.displayName = 'ContextMenu';
