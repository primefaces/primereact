import { withHeadless } from '@primereact/core/headless';
import { useQueueTask } from '@primereact/hooks/use-queue-task';
import { useCommandMenuStore, useCommandMenuStoreState } from '@primereact/types/shared/commandmenu';
import { getNextElementSibling, getPreviousElementSibling, shallowEquals } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useCommandMenu.props';

const ITEM_SELECTOR = `[data-item]`;
const VALID_ITEM_SELECTOR = `${ITEM_SELECTOR}:not([aria-disabled='true'])`;
const GROUP_SELECTOR = `[data-group]`;
const VALUE_SELECTOR = `data-value`;

export const useCommandMenu = withHeadless({
    name: 'useCommandMenu',
    defaultProps,
    setup({ props }) {
        const listRef = React.useRef<HTMLDivElement | null>(null);
        const propsRef = React.useRef(props);

        propsRef.current = props;

        const queue = useQueueTask();

        const store = React.useMemo<useCommandMenuStore>(() => {
            const state = {
                search: '',
                selected: propsRef.current.selected ?? propsRef.current.defaultSelected ?? '',
                filtered: {
                    count: 0,
                    items: new Map<string, number>(),
                    groups: new Set<string>()
                }
            };

            const ids = new Map<string, { value?: string; keywords?: string[] }>(); // id to value and keywords
            const items = new Set<string>(); // item ids
            const groups = new Map<string, Set<string>>(); // group id to item ids
            const itemToGroup = new Map<string, string>(); // item id to group id

            const listeners = new Set<() => void>();

            return {
                subscribe: (listener: () => void) => {
                    listeners.add(listener);

                    return () => listeners.delete(listener);
                },
                emit: () => {
                    listeners.forEach((l) => l());
                },
                snapshot: () => state,
                setSearch: (search: string) => {
                    if (state.search !== search) {
                        state.search = search;
                        store.filter();
                        store.sort();

                        queue('searchChange', selectFirstItem);
                        store.emit();
                    }
                },
                setSelected: (value: string) => {
                    if (state.selected !== value) {
                        state.selected = value;

                        if (propsRef.current.selected !== undefined) {
                            const newValue = (value ?? '') as string;

                            propsRef.current.onSelectedChange?.(newValue);

                            return;
                        }

                        store.emit();
                    }
                },
                registerValue: (id: string, value?: string, keywords?: string[]) => {
                    if (!value) return;

                    if (value !== ids.get(id)?.value || !shallowEquals(keywords, ids.get(id)?.keywords)) {
                        ids.set(id, { value, keywords });
                        state.filtered.items.set(id, score(value, state.search, keywords));

                        queue('registerValue', () => {
                            store.sort();
                            store.emit();
                        });
                    }
                },
                registerItem: (id: string, groupId?: string) => {
                    items.add(id);

                    if (groupId) {
                        itemToGroup.set(id, groupId);

                        if (!groups.has(groupId)) {
                            groups.set(groupId, new Set([id]));
                        } else {
                            groups.get(groupId)?.add(id);
                        }
                    }

                    queue('registerItem', () => {
                        store.filter();
                        store.sort();

                        if (!state.selected) selectFirstItem({ scroll: false });

                        store.emit();
                    });

                    return () => {
                        ids.delete(id);
                        items.delete(id);
                        itemToGroup.delete(id);
                        state.filtered.items.delete(id);
                        const selectedItem = getSelectedItem();

                        queue('unregisterItem', () => {
                            store.filter();
                            if (selectedItem?.getAttribute('id') === id) selectFirstItem();

                            store.emit();
                        });
                    };
                },
                registerGroup: (id: string) => {
                    if (!groups.has(id)) {
                        groups.set(id, new Set());
                    }

                    return () => {
                        ids.delete(id);
                        groups.delete(id);
                    };
                },
                filter: () => {
                    const search = state.search.trim();

                    if (!search) {
                        state.filtered.count = items.size;

                        return;
                    }

                    state.filtered.groups = new Set();
                    let counter = 0;

                    items.forEach((id) => {
                        const item = ids.get(id);
                        const rank = score(item?.value ?? '', search, item?.keywords ?? []);

                        state.filtered.items.set(id, rank);

                        if (rank > 0) {
                            counter++;
                            const groupId = itemToGroup.get(id);

                            if (groupId) {
                                state.filtered.groups.add(groupId);
                            }
                        }
                    });

                    state.filtered.count = counter;
                },
                sort: () => {
                    const search = state.search.trim();

                    if (!search) return;

                    const scores = state.filtered.items;

                    const sortedGroups = Array.from(state.filtered.groups, (groupId) => {
                        const itemIds = groups.get(groupId) || new Set();

                        const maxScore = [...itemIds].reduce((max, id) => Math.max(max, scores.get(id) ?? 0), 0);

                        return [groupId, maxScore] as [string, number];
                    });

                    const list = listRef.current;

                    const items = getValidItems();

                    items
                        .sort((a, b) => (scores.get(b.getAttribute('id')!) ?? 0) - (scores.get(a.getAttribute('id')!) ?? 0))
                        .forEach((item) => {
                            const parent = item.parentElement;

                            let itemToAppend = item;
                            const appendTo = item.closest(GROUP_SELECTOR) ?? list;

                            if (parent !== appendTo) itemToAppend = item.closest(`${GROUP_SELECTOR} > *`) ?? item;

                            if (appendTo && itemToAppend) {
                                appendTo.appendChild(itemToAppend);
                            }
                        });

                    sortedGroups
                        .sort((a, b) => b[1] - a[1])
                        .forEach((group) => {
                            const element = list?.querySelector(`${GROUP_SELECTOR}[${VALUE_SELECTOR}="${encodeURIComponent(group[0])}"]`);

                            element?.parentElement?.appendChild(element);
                        });
                }
            };
        }, []);

        const score = (value: string, search: string, keywords?: string[]) => {
            const filterFn = propsRef.current.filter ?? defaultFilter;

            return value ? filterFn(value, search, keywords) : 0;
        };

        const useCommandMenuStore = <T>(selector: (state: useCommandMenuStoreState) => T) =>
            React.useSyncExternalStore(
                store.subscribe,
                () => selector(store.snapshot()),
                () => selector(store.snapshot())
            );

        function getValidItems(): HTMLElement[] {
            const list = listRef.current;

            if (!list) return [];

            return Array.from(list.querySelectorAll<HTMLElement>(VALID_ITEM_SELECTOR));
        }

        function getSelectedItem(): HTMLElement | null {
            const list = listRef.current;

            if (!list) return null;

            return list.querySelector<HTMLElement>(`${ITEM_SELECTOR}[aria-selected="true"]`);
        }

        function selectItem(element: HTMLElement | null, options: { scroll?: boolean } = {}) {
            if (!element) return;

            const value = element.getAttribute(VALUE_SELECTOR);

            if (!value) return;

            store.setSelected(value);

            if (options.scroll ?? true) {
                element.scrollIntoView({ block: 'nearest', behavior: 'instant' });
            }
        }

        function selectFirstItem(options: { scroll?: boolean } = {}) {
            selectItem(getValidItems()[0], options);
        }

        function selectLastItem(options: { scroll?: boolean } = {}) {
            selectItem(getValidItems()[getValidItems().length - 1], options);
        }

        function clamp(value: number, min: number, max: number) {
            return Math.max(min, Math.min(value, max));
        }

        function loop(value: number, length: number) {
            return ((value % length) + length) % length;
        }

        function jumpBy(direction: 1 | -1) {
            const items = getValidItems();
            const current = getSelectedItem();
            const length = items.length;
            const amount = (propsRef.current.jump ?? 5) * direction;

            if (!length || !current) return;

            const index = items.indexOf(current);
            const nextIndex = propsRef.current.loop ? loop(index + amount, length) : clamp(index + amount, 0, length - 1);

            selectItem(items[nextIndex]);
        }

        function jumpByItem(direction: 1 | -1) {
            const items = getValidItems();
            const current = getSelectedItem();
            const length = items.length;

            if (!length || !current) return;

            const index = items.indexOf(current);
            const nextIndex = propsRef.current.loop ? loop(index + direction, length) : clamp(index + direction, 0, length - 1);

            selectItem(items[nextIndex]);
        }

        function jumpByGroup(direction: 1 | -1) {
            const current = getSelectedItem();
            let group = current?.closest(GROUP_SELECTOR);
            let item: HTMLElement | null = null;

            while (group && !item) {
                group = direction === 1 ? getNextElementSibling(group, GROUP_SELECTOR) : getPreviousElementSibling(group, GROUP_SELECTOR);
                item = group?.querySelector(VALID_ITEM_SELECTOR) as HTMLElement;
            }

            if (item) {
                selectItem(item);
            } else {
                jumpByItem(direction);
            }
        }

        function handleKeyDown(e: React.KeyboardEvent) {
            if (e.defaultPrevented || e.nativeEvent.isComposing) return;

            switch (e.key) {
                case 'ArrowDown': {
                    e.preventDefault();

                    if (e.metaKey) jumpByGroup(1);
                    else if (e.altKey) jumpBy(1);
                    else jumpByItem(1);

                    break;
                }

                case 'ArrowUp': {
                    e.preventDefault();

                    if (e.metaKey) jumpByGroup(-1);
                    else if (e.altKey) jumpBy(-1);
                    else jumpByItem(-1);

                    break;
                }

                case 'Home': {
                    e.preventDefault();
                    selectFirstItem();
                    break;
                }

                case 'End': {
                    e.preventDefault();
                    selectLastItem();
                    break;
                }

                case 'Enter': {
                    e.preventDefault();
                    const selected = getSelectedItem();

                    if (!selected || selected.dataset.disabled === 'true') return;

                    selected.click();
                    break;
                }
            }
        }

        function handleItemPointerMove(e: React.PointerEvent<HTMLDivElement>) {
            const { disabled } = e.currentTarget.dataset;

            if (disabled === 'true' || !propsRef.current.selectOnHover) return;

            selectItem(e.currentTarget as HTMLElement, { scroll: false });
        }

        function handleItemClick(e: React.MouseEvent<HTMLDivElement>) {
            const { disabled } = e.currentTarget.dataset;

            if (disabled === 'true') return;

            selectItem(e.currentTarget as HTMLElement, { scroll: false });
        }

        React.useLayoutEffect(() => {
            if (props.selected === undefined) return;

            if (!Object.is(props.selected, store.snapshot().selected)) {
                store.setSelected(props.selected);
                store.emit();
            }
        }, [props.selected]);

        React.useLayoutEffect(() => {
            queue('mount', () => {
                selectItem(getSelectedItem(), { scroll: false });
            });
        }, []);

        return {
            store,
            listRef,
            useCommandMenuStore,
            handleKeyDown,
            handleItemPointerMove,
            handleItemClick
        };
    }
});

export const defaultFilter = (value: string, search: string, keywords?: string[]) => {
    const extendValue = value + ' ' + (keywords?.join(' ') ?? '');

    if (extendValue.includes(search)) return 1;

    return 0;
};
