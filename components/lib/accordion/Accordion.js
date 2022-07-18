import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect } from '../hooks/Hooks';
import { classNames, IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';

export const AccordionTab = () => { }

export const Accordion = React.forwardRef((props, ref) => {
    const [idState, setIdState] = React.useState(props.id);
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

    const shouldUseTab = (tab) => tab && tab.props.__TYPE === 'AccordionTab';

    const onTabHeaderClick = (event, tab, index) => {
        if (!tab.props.disabled) {
            const selected = isSelected(index);
            let newActiveIndex = null;

            if (props.multiple) {
                const indexes = activeIndex || [];
                newActiveIndex = selected ? indexes.filter(i => i !== index) : [...indexes, index];
            }
            else {
                newActiveIndex = selected ? null : index;
            }

            const callback = selected ? props.onTabClose : props.onTabOpen;
            callback && callback({ originalEvent: event, index: index });

            if (props.onTabChange) {
                props.onTabChange({
                    originalEvent: event,
                    index: newActiveIndex
                });
            }
            else {
                setActiveIndexState(newActiveIndex);
            }
        }

        event.preventDefault();
    }

    const isSelected = (index) => {
        return props.multiple ? (activeIndex && activeIndex.some(i => i === index)) : activeIndex === index;
    }

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    const createTabHeader = (tab, selected, index) => {
        const style = { ...(tab.props.style || {}), ...(tab.props.headerStyle || {}) };
        const className = classNames('p-accordion-header', {
            'p-highlight': selected,
            'p-disabled': tab.props.disabled
        }, tab.props.headerClassName, tab.props.className);
        const headerId = idState + '_header_' + index;
        const ariaControls = idState + '_content_' + index;
        const tabIndex = tab.props.disabled ? -1 : null;
        const header = tab.props.headerTemplate ? ObjectUtils.getJSXElement(tab.props.headerTemplate, tab.props) : <span className="p-accordion-header-text">{tab.props.header}</span>;
        const icon = IconUtils.getJSXIcon(selected ? props.collapseIcon : props.expandIcon, { className: 'p-accordion-toggle-icon' }, { props, selected });

        return (
            <div className={className} style={style}>
                <a href={'#' + ariaControls} id={headerId} className="p-accordion-header-link" aria-controls={ariaControls} role="tab" aria-expanded={selected} onClick={(e) => onTabHeaderClick(e, tab, index)} tabIndex={tabIndex}>
                    {icon}
                    {header}
                </a>
            </div>
        )
    }

    const createTabContent = (tab, selected, index) => {
        const style = { ...(tab.props.style || {}), ...(tab.props.contentStyle || {}) };
        const className = classNames('p-toggleable-content', tab.props.contentClassName, tab.props.className);
        const contentId = idState + '_content_' + index;
        const ariaLabelledby = idState + '_header_' + index;
        const contentRef = React.createRef();

        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={selected} unmountOnExit options={props.transitionOptions}>
                <div ref={contentRef} id={contentId} className={className} style={style} role="region" aria-labelledby={ariaLabelledby}>
                    <div className="p-accordion-content">
                        {tab.props.children}
                    </div>
                </div>
            </CSSTransition>
        )
    }

    const createTab = (tab, index) => {
        if (shouldUseTab(tab)) {
            const key = idState + '_' + index;
            const selected = isSelected(index);
            const otherProps = ObjectUtils.findDiffKeys(tab.props, AccordionTab.defaultProps);
            const tabHeader = createTabHeader(tab, selected, index);
            const tabContent = createTabContent(tab, selected, index);
            const tabClassName = classNames('p-accordion-tab', {
                'p-accordion-tab-active': selected
            });

            return (
                <div key={key} className={tabClassName} {...otherProps}>
                    {tabHeader}
                    {tabContent}
                </div>
            )
        }

        return null;
    }

    const createTabs = () => {
        return React.Children.map(props.children, createTab);
    }

    const otherProps = ObjectUtils.findDiffKeys(props, Accordion.defaultProps);
    const className = classNames('p-accordion p-component', props.className);
    const tabs = createTabs();

    return (
        <div id={idState} className={className} style={props.style} {...otherProps}>
            {tabs}
        </div>
    )
});

AccordionTab.displayName = 'AccordionTab';
AccordionTab.defaultProps = {
    __TYPE: 'AccordionTab',
    header: null,
    disabled: false,
    style: null,
    className: null,
    headerStyle: null,
    headerClassName: null,
    headerTemplate: null,
    contentStyle: null,
    contentClassName: null
}

Accordion.displayName = 'Accordion';
Accordion.defaultProps = {
    __TYPE: 'Accordion',
    id: null,
    activeIndex: null,
    className: null,
    style: null,
    multiple: false,
    expandIcon: 'pi pi-chevron-right',
    collapseIcon: 'pi pi-chevron-down',
    transitionOptions: null,
    onTabOpen: null,
    onTabClose: null,
    onTabChange: null
}
