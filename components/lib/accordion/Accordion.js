import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect } from '../hooks/Hooks';
import { classNames, IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { AccordionBase, AccordionTabBase } from './AccordionBase';

export const AccordionTab = () => {};

export const Accordion = React.forwardRef((inProps, ref) => {
    const props = AccordionBase.getProps(inProps);

    const [idState, setIdState] = React.useState(props.id);
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const elementRef = React.useRef(null);
    const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

    const getTabProp = (tab, name) => AccordionTabBase.getCProp(tab, name);

    const onTabHeaderClick = (event, tab, index) => {
        if (!getTabProp(tab, 'disabled')) {
            const selected = isSelected(index);
            let newActiveIndex = null;

            if (props.multiple) {
                const indexes = activeIndex || [];

                newActiveIndex = selected ? indexes.filter((i) => i !== index) : [...indexes, index];
            } else {
                newActiveIndex = selected ? null : index;
            }

            const callback = selected ? props.onTabClose : props.onTabOpen;

            callback && callback({ originalEvent: event, index: index });

            if (props.onTabChange) {
                props.onTabChange({
                    originalEvent: event,
                    index: newActiveIndex
                });
            } else {
                setActiveIndexState(newActiveIndex);
            }
        }

        event.preventDefault();
    };

    const isSelected = (index) => {
        return props.multiple ? activeIndex && activeIndex.some((i) => i === index) : activeIndex === index;
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    if (!idState) {
        return null;
    }

    const createTabHeader = (tab, selected, index) => {
        const style = { ...(getTabProp(tab, 'style') || {}), ...(getTabProp(tab, 'headerStyle') || {}) };
        const className = classNames(
            'p-accordion-header',
            {
                'p-highlight': selected,
                'p-disabled': getTabProp(tab, 'disabled')
            },
            getTabProp(tab, 'headerClassName'),
            getTabProp(tab, 'className')
        );
        const headerId = idState + '_header_' + index;
        const ariaControls = idState + '_content_' + index;
        const tabIndex = getTabProp(tab, 'disabled') ? -1 : getTabProp(tab, 'tabIndex');
        const header = getTabProp(tab, 'headerTemplate') ? ObjectUtils.getJSXElement(getTabProp(tab, 'headerTemplate'), AccordionTabBase.getCProps(tab)) : <span className="p-accordion-header-text">{getTabProp(tab, 'header')}</span>;
        const icon = IconUtils.getJSXIcon(selected ? props.collapseIcon : props.expandIcon, { className: 'p-accordion-toggle-icon' }, { props, selected });
        const label = selected ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');

        return (
            <div className={className} style={style}>
                <a href={'#' + ariaControls} id={headerId} className="p-accordion-header-link" aria-controls={ariaControls} role="tab" aria-expanded={selected} onClick={(e) => onTabHeaderClick(e, tab, index)} tabIndex={tabIndex} aria-label={label}>
                    {icon}
                    {header}
                </a>
            </div>
        );
    };

    const createTabContent = (tab, selected, index) => {
        const style = { ...(getTabProp(tab, 'style') || {}), ...(getTabProp(tab, 'contentStyle') || {}) };
        const className = classNames('p-toggleable-content', getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'));
        const contentId = idState + '_content_' + index;
        const ariaLabelledby = idState + '_header_' + index;
        const contentRef = React.createRef();

        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={selected} unmountOnExit options={props.transitionOptions}>
                <div ref={contentRef} id={contentId} className={className} style={style} role="region" aria-labelledby={ariaLabelledby}>
                    <div className="p-accordion-content">{getTabProp(tab, 'children')}</div>
                </div>
            </CSSTransition>
        );
    };

    const createTab = (tab, index) => {
        if (ObjectUtils.isValidChild(tab, 'AccordionTab')) {
            const key = idState + '_' + index;
            const selected = isSelected(index);
            const otherProps = AccordionTabBase.getCOtherProps(tab);
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
            );
        }

        return null;
    };

    const createTabs = () => {
        return React.Children.map(props.children, createTab);
    };

    const otherProps = AccordionBase.getOtherProps(props);
    const className = classNames('p-accordion p-component', props.className);
    const tabs = createTabs();

    return (
        <div id={idState} ref={elementRef} className={className} style={props.style} {...otherProps}>
            {tabs}
        </div>
    );
});

AccordionTab.displayName = 'AccordionTab';

Accordion.displayName = 'Accordion';
