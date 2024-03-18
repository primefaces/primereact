import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMatchMedia, useMergeProps, useMountEffect, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from '../utils/Utils';
import { TieredMenuBase } from './TieredMenuBase';
import { TieredMenuSub } from './TieredMenuSub';

export const TieredMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = TieredMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [visibleState, setVisibleState] = React.useState(!props.popup);
        const [activeItemPath, setActiveItemPath] = React.useState([]);
        const [focused, setFocused] = React.useState(false);
        const [focusedItemId, setFocusedItemId] = React.useState(null);
        const [focusedItemInfo, setFocusedItemInfo] = React.useState({ index: -1, level: 0, parentKey: '' });
        const [dirty, setDirty] = React.useState(false);
        const [processedItems, setProcessedItems] = React.useState([]);
        const [visibleItems, setVisibleItems] = React.useState([]);
        const [focusTrigger, setFocusTrigger] = React.useState(false);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const { ptm, cx, sx, isUnstyled } = TieredMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                visible: visibleState,
                attributeSelector: attributeSelectorState
            }
        });

        useHandleStyle(TieredMenuBase.css.styles, isUnstyled, { name: 'tieredmenu' });

        const containerRef = React.useRef(null);
        const menuRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const relatedTarget = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const searchValue = React.useRef(null);
        const searchTimeout = React.useRef(null);
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                const isOutsideContainer = containerRef.current && !containerRef.current.contains(event.target);
                const isOutsideTarget = props.popup ? !(targetRef.current && (targetRef.current === event.target || targetRef.current.contains(event.target))) : true;

                if (isOutsideContainer && isOutsideTarget) {
                    hide(event, !props.popup);
                }
            }
        });

        const [bindDocumentResizeListener, unbindDocumentResizeListener] = useResizeListener({
            listener: () => {
                !isMobileMode && hide(event, true);
            }
        });

        const onPanelClick = (event) => {
            if (props.popup) {
                OverlayService.emit('overlay-click', {
                    originalEvent: event,
                    target: targetRef.current
                });
            }
        };

        const toggle = (event) => {
            if (props.popup) {
                visibleState ? hide(event) : show(event);
            }
        };

        const show = (event) => {
            if (props.popup) {
                targetRef.current = event.currentTarget;
                setVisibleState(true);
                props.onShow && props.onShow(event);
                relatedTarget.current = event.relatedTarget || null;
            }

            setFocusedItemInfo({ index: findFirstFocusedItemIndex(), level: 0, parentKey: '' });
        };

        const hide = (event, isFocus) => {
            if (props.popup) {
                setVisibleState(false);
                props.onHide && props.onHide(event);
            }

            const menuElement = getMenuElement();

            setActiveItemPath([]);
            setFocusedItemInfo({ index: -1, level: 0, parentKey: '' });

            isFocus && DomHandler.focus(relatedTarget.current || targetRef.current || menuElement);
            setDirty(false);
        };

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
                    props.popup && DomHandler.focus(targetRef.current);
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
                    //NOOP
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        searchItems(event.key);
                    }

                    break;
            }
        };

        const onItemChange = (event) => {
            const { processedItem, isFocus } = event;

            if (ObjectUtils.isEmpty(processedItem)) return;

            const { index, key, level, parentKey, items } = processedItem;
            const grouped = ObjectUtils.isNotEmpty(items);

            const _activeItemPath = activeItemPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);

            if (grouped) {
                _activeItemPath.push(processedItem);
            }

            setFocusedItemInfo({ index, level, parentKey });
            setActiveItemPath(_activeItemPath);

            grouped && setDirty(true);
            isFocus && DomHandler.focus(getMenuElement());
        };

        const onItemClick = (event) => {
            const { originalEvent, processedItem } = event;

            if (isItemDisabled(processedItem) || props.isMobileMode) {
                return;
            }

            const grouped = isProccessedItemGroup(processedItem);
            const root = ObjectUtils.isEmpty(processedItem.parent);
            const selected = isSelected(processedItem);
            const menuElement = getMenuElement();

            if (selected) {
                const { index, key, level, parentKey } = processedItem;

                setActiveItemPath(activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key)));
                setFocusedItemInfo({ index, level, parentKey });

                if (!grouped) {
                    setDirty(!root);
                }

                setTimeout(() => {
                    DomHandler.focus(menuElement);

                    if (grouped) {
                        setDirty(true);
                    }
                }, 0);
            } else {
                if (grouped) {
                    DomHandler.focus(menuElement);
                    onItemChange(event);
                } else {
                    const rootProcessedItem = root ? processedItem : activeItemPath.find((p) => p.parentKey === '');
                    const rootProcessedItemIndex = rootProcessedItem ? rootProcessedItem.index : -1;

                    hide(originalEvent, true);
                    setFocusedItemInfo({ index: rootProcessedItemIndex, parentKey: rootProcessedItem ? rootProcessedItem.parentKey : '' });
                }
            }
        };

        const onItemMouseEnter = (event) => {
            const { originalEvent, processedItem } = event;

            if (isItemDisabled(processedItem) || props.isMobileMode) {
                originalEvent.preventDefault();

                return;
            }

            if (dirty && !props.popup) {
                onItemChange(event);
            }
        };

        const onArrowDownKey = (event) => {
            const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

            changeFocusedItemIndex(itemIndex);
            event.preventDefault();
        };

        const onArrowUpKey = (event) => {
            if (event.altKey) {
                if (props.popup) {
                    DomHandler.focus(targetRef.current);
                }

                if (focusedItemInfo.index !== -1) {
                    const processedItem = visibleItems[focusedItemInfo.index];
                    const grouped = isProccessedItemGroup(processedItem);

                    !grouped && onItemChange({ originalEvent: event, processedItem });
                }

                props.popup && hide(event, true);
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

            setActiveItemPath(activeItemPath.filter((p) => p.parentKey !== focusedItemInfo.parentKey));

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
                const element = DomHandler.findSingle(getMenuElement(), `li[id="${`${focusedItemId}`}"]`);
                const anchorElement = element && DomHandler.findSingle(element, '[data-pc-section="action"]');

                props.popup && DomHandler.focus(targetRef.current);
                anchorElement ? anchorElement.click() : element && element.click();
            }

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            onEnterKey(event);
        };

        const onEscapeKey = (event) => {
            hide(event, true);
            !props.popup && setFocusedItemInfo({ ...focusedItemInfo, index: findFirstFocusedItemIndex() });

            event.preventDefault();
        };

        const onTabKey = (event) => {
            if (focusedItemInfo.index !== -1) {
                const processedItem = visibleItems[focusedItemInfo.index];
                const grouped = isProccessedItemGroup(processedItem);

                !grouped && onItemChange({ originalEvent: event, processedItem });
            }

            hide(event);
        };

        const getMenuElement = () => {
            return menuRef.current.getElement() || null;
        };

        const getItemProp = (item, name) => {
            return item ? ObjectUtils.getItemValue(item[name]) : undefined;
        };

        const getItemLabel = (item) => {
            return getItemProp(item, 'label');
        };

        const isItemDisabled = (item) => {
            return getItemProp(item, 'disabled');
        };

        const isItemSeparator = (item) => {
            return getItemProp(item, 'separator');
        };

        const getProccessedItemLabel = (processedItem) => {
            return processedItem ? getItemLabel(processedItem.item) : undefined;
        };

        const isProccessedItemGroup = (processedItem) => {
            return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
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

            return selectedIndex < 0 ? findFirstItemIndex() : selectedIndex;
        };

        const findLastFocusedItemIndex = () => {
            const selectedIndex = findSelectedItemIndex();

            return selectedIndex < 0 ? findLastItemIndex() : selectedIndex;
        };

        const searchItems = (char) => {
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
                clearTimeout(searchTimeout);
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
            const element = DomHandler.findSingle(getMenuElement(), `li[id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        };

        const createProcessedItems = React.useCallback((items, level = 0, parent = {}, parentKey = '') => {
            const processedItems = [];

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

                    newItem['items'] = createProcessedItems(item.items, level + 1, newItem, key);
                    processedItems.push(newItem);
                });

            return processedItems;
        }, []);

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

                const selector = `${attributeSelectorState}`;
                const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-tieredmenu[${selector}] > ul {
        max-height: ${props.scrollHeight};
        overflow: ${props.scrollHeight ? 'auto' : ''};
    }

    .p-tieredmenu[${selector}] .p-submenu-list {
        position: relative;
    }

    .p-tieredmenu[${selector}] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-tieredmenu[${selector}] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-tieredmenu[${selector}] .p-submenu-icon:before {
        content: "\\e930";
    }

    ${!props.popup ? `.p-tieredmenu[${selector}] { width: 100%; }` : ''}
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        const alignOverlay = () => {
            const calculateMinWidth = DomHandler.getOuterWidth(targetRef.current) > DomHandler.getOuterWidth(containerRef.current);

            DomHandler.alignOverlay(containerRef.current, targetRef.current, props.appendTo, calculateMinWidth);
        };

        const onEnter = () => {
            if (props.autoZIndex) {
                ZIndexUtils.set('menu', containerRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
            }

            DomHandler.addStyles(containerRef.current, { position: 'absolute', top: '0', left: '0' });
            alignOverlay();
            DomHandler.focus(menuRef.current.getElement());
            scrollInView();

            if (attributeSelectorState && props.breakpoint) {
                containerRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }
        };

        const onEntered = () => {
            bindDocumentClickListener();
            bindDocumentResizeListener();
        };

        const onExit = () => {
            targetRef.current = null;
            unbindDocumentClickListener();
            unbindDocumentResizeListener();
        };

        const onExited = () => {
            ZIndexUtils.clear(containerRef.current);
            destroyStyle();
        };

        useMountEffect(() => {
            const uniqueId = UniqueComponentId();

            !idState && setIdState(uniqueId);

            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(uniqueId);
            }
        });

        React.useEffect(() => {
            const itemsToProcess = props.model || [];
            const processed = createProcessedItems(itemsToProcess);

            setProcessedItems(processed);
        }, [props.model, createProcessedItems]);

        useUpdateEffect(() => {
            const processedItem = activeItemPath.find((p) => p.key === focusedItemInfo.parentKey);
            const processed = processedItem ? processedItem.items : processedItems;

            setVisibleItems(processed);
        }, [activeItemPath, focusedItemInfo, processedItems]);

        useUpdateEffect(() => {
            const focusedId = focusedItemInfo.index !== -1 ? `${idState}${ObjectUtils.isNotEmpty(focusedItemInfo.parentKey) ? '_' + focusedItemInfo.parentKey : ''}_${focusedItemInfo.index}` : null;

            setFocusedItemId(focusedId);
        }, [focusedItemInfo]);

        useUpdateEffect(() => {
            if (!props.popup) {
                if (ObjectUtils.isNotEmpty(activeItemPath)) {
                    bindDocumentClickListener();
                    bindDocumentResizeListener();
                } else {
                    unbindDocumentClickListener();
                    unbindDocumentResizeListener();
                }
            }
        }, [activeItemPath]);

        useUpdateEffect(() => {
            if (focusTrigger) {
                const itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();

                changeFocusedItemIndex(itemIndex);

                setActiveItemPath(activeItemPath.filter((p) => p.parentKey !== focusedItemInfo.parentKey));
                setFocusTrigger(false);
            }
        }, [focusTrigger]);

        useUpdateEffect(() => {
            if (attributeSelectorState && containerRef.current) {
                containerRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(containerRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            toggle,
            show,
            hide,
            getElement: () => containerRef.current
        }));

        const createElement = () => {
            const rootProps = mergeProps(
                {
                    ref: containerRef,
                    id: props.id,
                    className: cx('root'),
                    style: props.style,
                    onClick: onPanelClick
                },
                TieredMenuBase.getOtherProps(props),
                ptm('root')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: visibleState,
                    timeout: { enter: 120, exit: 100 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter,
                    onEntered,
                    onExit,
                    onExited
                },
                ptm('transition')
            );

            return (
                <CSSTransition nodeRef={containerRef} {...transitionProps}>
                    <div {...rootProps}>
                        <TieredMenuSub
                            id={idState + '_list'}
                            ref={menuRef}
                            hostName="TieredMenu"
                            menuProps={props}
                            tabIndex={0}
                            model={processedItems}
                            ariaLabel={props.ariaLabel}
                            ariaLabelledBy={props.ariaLabelledBy}
                            ariaOrientation="vertical"
                            ariaActiveDescendant={focused ? focusedItemId : undefined}
                            menuId={idState}
                            level={0}
                            focusedItemId={focusedItemId}
                            activeItemPath={activeItemPath}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onKeyDown={onKeyDown}
                            onItemClick={onItemClick}
                            onItemMouseEnter={onItemMouseEnter}
                            root
                            popup={props.popup}
                            onHide={hide}
                            isMobileMode={isMobileMode}
                            submenuIcon={props.submenuIcon}
                            ptm={ptm}
                            cx={cx}
                            sx={sx}
                        />
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
    })
);

TieredMenu.displayName = 'TieredMenu';
