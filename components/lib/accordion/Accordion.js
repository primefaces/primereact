import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect } from '../hooks/Hooks';
import { classNames, IconUtils, mergeProps, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { AccordionBase, AccordionTabBase } from './AccordionBase';
import { ChevronRightIcon } from '../icons/chevronright';
import { ChevronDownIcon } from '../icons/chevrondown';
import { PrimeReactContext } from '../api/Api';

export const AccordionTab = () => {};

export const Accordion = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = AccordionBase.getProps(inProps, context);
    const [idState, setIdState] = React.useState(props.id);
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const elementRef = React.useRef(null);
    const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

    const metaData = {
        props,
        state: {
            id: idState,
            activeIndex: activeIndexState
        }
    };

    const { ptm, ptmo } = AccordionBase.setMetaData({
        ...metaData
    });

    const getTabPT = (tab, key) => {
        return ptmo(getTabProp(tab, 'pt'), key, {
            props: tab.props,
            parent: metaData
        });
    };

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
        const headerTitleProps = mergeProps(
            {
                className: 'p-accordion-header-text'
            },
            getTabPT(tab, 'headertitle')
        );
        const header = getTabProp(tab, 'headerTemplate') ? ObjectUtils.getJSXElement(getTabProp(tab, 'headerTemplate'), AccordionTabBase.getCProps(tab)) : <span {...headerTitleProps}>{getTabProp(tab, 'header')}</span>;
        const iconClassName = 'p-accordion-toggle-icon';
        const headerIconProps = mergeProps(
            {
                className: iconClassName
            },
            getTabPT(tab, 'headericon')
        );
        const icon = selected ? props.collapseIcon || <ChevronDownIcon {...headerIconProps} /> : props.expandIcon || <ChevronRightIcon {...headerIconProps} />;
        const toggleIcon = IconUtils.getJSXIcon(icon, { ...headerIconProps }, { props, selected });
        const label = selected ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
        const headerProps = mergeProps(
            {
                className,
                style
            },
            getTabPT(tab, 'header')
        );
        const headerActionProps = mergeProps(
            {
                id: headerId,
                href: '#' + ariaControls,
                className: 'p-accordion-header-link',
                role: 'tab',
                tabIndex,
                onClick: (e) => onTabHeaderClick(e, tab, index),
                'aria-label': label,
                'aria-controls': ariaControls,
                'aria-expanded': selected
            },
            getTabPT(tab, 'headeraction')
        );

        return (
            <div {...headerProps}>
                <a {...headerActionProps}>
                    {toggleIcon}
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
        const toggleableContentProps = mergeProps(
            {
                id: contentId,
                ref: contentRef,
                className,
                style,
                role: 'region',
                'aria-labelledby': ariaLabelledby
            },
            getTabPT(tab, 'toggleablecontent')
        );

        const contentProps = mergeProps(
            {
                className: 'p-accordion-content'
            },
            getTabPT(tab, 'content')
        );

        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={selected} unmountOnExit options={props.transitionOptions}>
                <div {...toggleableContentProps}>
                    <div {...contentProps}>{getTabProp(tab, 'children')}</div>
                </div>
            </CSSTransition>
        );
    };

    const createTab = (tab, index) => {
        if (ObjectUtils.isValidChild(tab, 'AccordionTab')) {
            const key = idState + '_' + index;
            const selected = isSelected(index);
            const tabHeader = createTabHeader(tab, selected, index);
            const tabContent = createTabContent(tab, selected, index);
            const tabClassName = classNames('p-accordion-tab', {
                'p-accordion-tab-active': selected
            });

            const rootProps = mergeProps(
                {
                    key,
                    className: tabClassName
                },
                AccordionTabBase.getCOtherProps(tab),
                getTabPT(tab, 'root')
            );

            return (
                <div {...rootProps}>
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

    const className = classNames('p-accordion p-component', props.className);
    const tabs = createTabs();
    const rootProps = mergeProps(
        {
            id: idState,
            ref: elementRef,
            className,
            style: props.style
        },
        AccordionBase.getOtherProps(props),
        ptm('root')
    );

    return <div {...rootProps}>{tabs}</div>;
});

AccordionTab.displayName = 'AccordionTab';

Accordion.displayName = 'Accordion';
