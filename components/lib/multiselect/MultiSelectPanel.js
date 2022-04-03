import * as React from 'react';
import { localeOption } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { MultiSelectHeader } from './MultiSelectHeader';
import { MultiSelectItem } from './MultiSelectItem';

export const MultiSelectPanel = React.memo(React.forwardRef((props, ref) => {
    const virtualScrollerRef = React.useRef(null);

    const onEnter = () => {
        props.onEnter(() => {
            if (virtualScrollerRef.current) {
                const selectedIndex = props.getSelectedOptionIndex();
                if (selectedIndex !== -1) {
                    setTimeout(() => virtualScrollerRef.current.scrollToIndex(selectedIndex), 0);
                }
            }
        });
    }

    const onFilterInputChange = (event) => {
        if (virtualScrollerRef.current) {
            virtualScrollerRef.current.scrollToIndex(0);
        }

        props.onFilterInputChange && props.onFilterInputChange(event);
    }

    const isEmptyFilter = () => {
        return !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
    }

    const createHeader = () => {
        return (
            <MultiSelectHeader filter={props.filter} filterValue={props.filterValue} onFilter={onFilterInputChange} filterPlaceholder={props.filterPlaceholder}
                onClose={props.onCloseClick} showSelectAll={props.showSelectAll} selectAll={props.isAllSelected()} onSelectAll={props.onSelectAll} template={props.panelHeaderTemplate} />
        )
    }

    const createFooter = () => {
        if (props.panelFooterTemplate) {
            const content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);

            return (
                <div className="p-multiselect-footer">
                    {content}
                </div>
            )
        }

        return null;
    }

    const createGroupChildren = (optionGroup) => {
        const groupChildren = props.getOptionGroupChildren(optionGroup);

        return (
            groupChildren.map((option, j) => {
                const optionLabel = props.getOptionLabel(option);
                const optionKey = j + '_' + props.getOptionRenderKey(option);
                const disabled = props.isOptionDisabled(option)
                const tabIndex = disabled ? null : props.tabIndex || 0;
                const selected = props.isSelected(option);

                return (
                    <MultiSelectItem key={optionKey} label={optionLabel} option={option} template={props.itemTemplate}
                        selected={selected} onClick={props.onOptionSelect} onKeyDown={props.onOptionKeyDown} tabIndex={tabIndex} disabled={disabled} />
                )
            })
        )
    }

    const createEmptyFilter = () => {
        const emptyFilterMessage = ObjectUtils.getJSXElement(props.emptyFilterMessage, props) || localeOption('emptyFilterMessage');

        return (
            <li className="p-multiselect-empty-message">
                {emptyFilterMessage}
            </li>
        )
    }

    const createItem = (option, index) => {
        if (props.optionGroupLabel) {
            const groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
            const groupChildrenContent = createGroupChildren(option);
            const key = index + '_' + props.getOptionGroupRenderKey(option);

            return (
                <React.Fragment key={key}>
                    <li className="p-multiselect-item-group">
                        {groupContent}
                    </li>
                    {groupChildrenContent}
                </React.Fragment>
            )
        }
        else {
            const optionLabel = props.getOptionLabel(option);
            const optionKey = index + '_' + props.getOptionRenderKey(option);
            const disabled = props.isOptionDisabled(option)
            const tabIndex = disabled ? null : props.tabIndex || 0;
            const selected = props.isSelected(option);

            return (
                <MultiSelectItem key={optionKey} label={optionLabel} option={option} template={props.itemTemplate}
                    selected={selected} onClick={props.onOptionSelect} onKeyDown={props.onOptionKeyDown} tabIndex={tabIndex} disabled={disabled} />
            )
        }
    }

    const createItems = () => {
        if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
            return props.visibleOptions.map(createItem);
        }
        else if (props.hasFilter) {
            return createEmptyFilter();
        }

        return null;
    }

    const createContent = () => {
        if (props.virtualScrollerOptions) {
            const virtualScrollerProps = {
                ...props.virtualScrollerOptions, ...{
                    style: { ...props.virtualScrollerOptions.style, ...{ height: props.scrollHeight } },
                    className: classNames('p-multiselect-items-wrapper', props.virtualScrollerOptions.className),
                    items: props.visibleOptions,
                    onLazyLoad: (event) => props.virtualScrollerOptions.onLazyLoad({ ...event, ...{ filter: props.filterValue } }),
                    itemTemplate: (item, options) => item && createItem(item, options.index),
                    contentTemplate: (options) => {
                        const className = classNames('p-multiselect-items p-component', options.className);
                        const content = isEmptyFilter() ? createEmptyFilter() : options.children;

                        return (
                            <ul ref={options.contentRef} className={className} role="listbox" aria-multiselectable>
                                {content}
                            </ul>
                        )
                    }
                }
            };

            return <VirtualScroller ref={virtualScrollerRef} {...virtualScrollerProps} />
        }
        else {
            const items = createItems();

            return (
                <div className="p-multiselect-items-wrapper" style={{ maxHeight: props.scrollHeight }}>
                    <ul className="p-multiselect-items p-component" role="listbox" aria-multiselectable>
                        {items}
                    </ul>
                </div>
            )
        }
    }

    const createElement = () => {
        const allowOptionSelect = props.allowOptionSelect();
        const panelClassName = classNames('p-multiselect-panel p-component', {
            'p-multiselect-limited': !allowOptionSelect
        }, props.panelClassName);
        const header = createHeader();
        const content = createContent();
        const footer = createFooter();

        return (
            <CSSTransition nodeRef={ref} classNames="p-connected-overlay" in={props.in} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={props.onEntered} onExit={props.onExit} onExited={props.onExited}>
                <div ref={ref} className={panelClassName} style={props.panelStyle} onClick={props.onClick}>
                    {header}
                    {content}
                    {footer}
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />
}));

MultiSelectPanel.displayName = 'MultiSelectPanel';
