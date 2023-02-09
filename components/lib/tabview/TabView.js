import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { TabPanelBase, TabViewBase } from './TabViewBase';

export const TabPanel = () => {};

export const TabView = React.forwardRef((inProps, ref) => {
    const props = TabViewBase.getProps(inProps);

    const [idState, setIdState] = React.useState(props.id);
    const [backwardIsDisabledState, setBackwardIsDisabledState] = React.useState(true);
    const [forwardIsDisabledState, setForwardIsDisabledState] = React.useState(false);
    const [hiddenTabsState, setHiddenTabsState] = React.useState([]);
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const elementRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const navRef = React.useRef(null);
    const inkbarRef = React.useRef(null);
    const prevBtnRef = React.useRef(null);
    const nextBtnRef = React.useRef(null);
    const tabsRef = React.useRef({});
    const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

    const isSelected = (index) => index === activeIndex;
    const getTabProp = (tab, name) => TabPanelBase.getCProp(tab, name);

    const shouldUseTab = (tab, index) => {
        return ObjectUtils.isValidChild(tab, 'TabPanel') && hiddenTabsState.every((_i) => _i !== index);
    };

    const findVisibleActiveTab = (i) => {
        const tabsInfo = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab, index)) {
                return { tab, index };
            }
        });

        return tabsInfo.find(({ tab, index }) => !getTabProp(tab, 'disabled') && index >= i) || tabsInfo.reverse().find(({ tab, index }) => !getTabProp(tab, 'disabled') && i > index);
    };

    const onTabHeaderClose = (event, index) => {
        event.preventDefault();

        // give caller a chance to stop the selection
        if (props.onBeforeTabClose && props.onBeforeTabClose({ originalEvent: event, index }) === false) {
            return;
        }

        setHiddenTabsState([...hiddenTabsState, index]);

        if (props.onTabClose) {
            props.onTabClose({ originalEvent: event, index });
        }
    };

    const onTabHeaderClick = (event, tab, index) => {
        if (event) {
            event.preventDefault();
        }

        if (!getTabProp(tab, 'disabled')) {
            // give caller a chance to stop the selection
            if (props.onBeforeTabChange && props.onBeforeTabChange({ originalEvent: event, index }) === false) {
                return;
            }

            if (props.onTabChange) props.onTabChange({ originalEvent: event, index });
            else setActiveIndexState(index);
        }

        updateScrollBar(index);
    };

    const onKeyDown = (event, tab, index) => {
        if (event.key === 'Enter') {
            onTabHeaderClick(event, tab, index);
        }
    };

    const updateInkBar = () => {
        const tabHeader = tabsRef.current[`tab_${activeIndex}`];

        inkbarRef.current.style.width = DomHandler.getWidth(tabHeader) + 'px';
        inkbarRef.current.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(navRef.current).left + 'px';
    };

    const updateScrollBar = (index) => {
        let tabHeader = tabsRef.current[`tab_${index}`];

        if (tabHeader && tabHeader.scrollIntoView) {
            tabHeader.scrollIntoView({ block: 'nearest' });
        }
    };

    const updateButtonState = () => {
        const { scrollLeft, scrollWidth } = contentRef.current;
        const width = DomHandler.getWidth(contentRef.current);

        setBackwardIsDisabledState(scrollLeft === 0);
        setForwardIsDisabledState(scrollLeft === scrollWidth - width);
    };

    const onScroll = (event) => {
        props.scrollable && updateButtonState();
        event.preventDefault();
    };

    const getVisibleButtonWidths = () => {
        return [prevBtnRef.current, nextBtnRef.current].reduce((acc, el) => (el ? acc + DomHandler.getWidth(el) : acc), 0);
    };

    const navBackward = () => {
        const width = DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
        const pos = contentRef.current.scrollLeft - width;

        contentRef.current.scrollLeft = pos <= 0 ? 0 : pos;
    };

    const navForward = () => {
        const width = DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
        const pos = contentRef.current.scrollLeft + width;
        const lastPos = contentRef.current.scrollWidth - width;

        contentRef.current.scrollLeft = pos >= lastPos ? lastPos : pos;
    };

    const reset = () => {
        setBackwardIsDisabledState(true);
        setForwardIsDisabledState(false);
        setHiddenTabsState([]);

        if (props.onTabChange) props.onTabChange({ index: activeIndex });
        else setActiveIndexState(props.activeIndex);
    };

    React.useEffect(() => {
        updateInkBar();
    });

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    useUpdateEffect(() => {
        if (ObjectUtils.isNotEmpty(hiddenTabsState)) {
            const tabInfo = findVisibleActiveTab(hiddenTabsState[hiddenTabsState.length - 1]);

            tabInfo && onTabHeaderClick(null, tabInfo.tab, tabInfo.index);
        }
    }, [hiddenTabsState]);

    useUpdateEffect(() => {
        updateScrollBar(props.activeIndex);
    }, [props.activeIndex]);

    React.useImperativeHandle(ref, () => ({
        props,
        reset,
        getElement: () => elementRef.current
    }));

    const createTabHeader = (tab, index) => {
        const selected = isSelected(index);
        const { headerStyle, headerClassName, style: _style, className: _className, disabled, leftIcon, rightIcon, header, headerTemplate, closable } = TabPanelBase.getCProps(tab);
        const style = { ...(headerStyle || {}), ...(_style || {}) };
        const className = classNames('p-unselectable-text', { 'p-tabview-selected p-highlight': selected, 'p-disabled': disabled }, headerClassName, _className);
        const headerId = idState + '_header_' + index;
        const ariaControls = idState + '_content_' + index;
        const tabIndex = disabled ? null : 0;
        const leftIconElement = leftIcon && <i className={leftIcon}></i>;
        const titleElement = <span className="p-tabview-title">{header}</span>;
        const rightIconElement = rightIcon && <i className={rightIcon}></i>;
        const closableIconElement = closable && <i className="p-tabview-close pi pi-times" onClick={(e) => onTabHeaderClose(e, index)}></i>;

        let content = (
            // eslint-disable /
            <a role="tab" className="p-tabview-nav-link" onClick={(e) => onTabHeaderClick(e, tab, index)} id={headerId} onKeyDown={(e) => onKeyDown(e, tab, index)} aria-controls={ariaControls} aria-selected={selected} tabIndex={tabIndex}>
                {leftIconElement}
                {titleElement}
                {rightIconElement}
                {closableIconElement}
                <Ripple />
            </a>
            // eslint-enable /
        );

        if (headerTemplate) {
            const defaultContentOptions = {
                className: 'p-tabview-nav-link',
                titleClassName: 'p-tabview-title',
                onClick: (e) => onTabHeaderClick(e, tab, index),
                onKeyDown: (e) => onKeyDown(e, tab, index),
                leftIconElement,
                titleElement,
                rightIconElement,
                element: content,
                props,
                index,
                selected,
                ariaControls
            };

            content = ObjectUtils.getJSXElement(headerTemplate, defaultContentOptions);
        }

        return (
            <li ref={(el) => (tabsRef.current[`tab_${index}`] = el)} className={className} style={style} role="presentation">
                {content}
            </li>
        );
    };

    const createTabHeaders = () => {
        return React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab, index)) {
                return createTabHeader(tab, index);
            }
        });
    };

    const createNavigator = () => {
        const headers = createTabHeaders();

        return (
            <div ref={contentRef} id={idState} className="p-tabview-nav-content" style={props.style} onScroll={onScroll}>
                <ul ref={navRef} className="p-tabview-nav" role="tablist">
                    {headers}
                    <li ref={inkbarRef} className="p-tabview-ink-bar"></li>
                </ul>
            </div>
        );
    };

    const createContent = () => {
        const className = classNames('p-tabview-panels', props.panelContainerClassName);
        const contents = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index))) {
                const selected = isSelected(index);
                const style = { ...(getTabProp(tab, 'contentStyle') || {}), ...(getTabProp(tab, 'style') || {}) };
                const className = classNames(getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'), 'p-tabview-panel', { 'p-hidden': !selected });
                const contentId = idState + '_content_' + index;
                const ariaLabelledBy = idState + '_header_' + index;
                const otherProps = TabPanelBase.getCOtherProps(tab);

                return (
                    <div {...otherProps} id={contentId} aria-labelledby={ariaLabelledBy} aria-hidden={!selected} className={className} style={style} role="tabpanel">
                        {!props.renderActiveOnly ? getTabProp(tab, 'children') : selected && getTabProp(tab, 'children')}
                    </div>
                );
            }
        });

        return (
            <div className={className} style={props.panelContainerStyle}>
                {contents}
            </div>
        );
    };

    const createPrevButton = () => {
        if (props.scrollable && !backwardIsDisabledState) {
            return (
                <button ref={prevBtnRef} className="p-tabview-nav-prev p-tabview-nav-btn p-link" onClick={navBackward} type="button" aria-label={ariaLabel('previousPageLabel')}>
                    <span className="pi pi-chevron-left"></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createNextButton = () => {
        if (props.scrollable && !forwardIsDisabledState) {
            return (
                <button ref={nextBtnRef} className="p-tabview-nav-next p-tabview-nav-btn p-link" onClick={navForward} type="button" aria-label={ariaLabel('nextPageLabel')}>
                    <span className="pi pi-chevron-right" aria-hidden="true"></span>
                    <Ripple />
                </button>
            );
        }
    };

    const otherProps = TabViewBase.getOtherProps(props);
    const className = classNames(
        'p-tabview p-component',
        {
            'p-tabview-scrollable': props.scrollable
        },
        props.className
    );
    const navigator = createNavigator();
    const content = createContent();
    const prevButton = createPrevButton();
    const nextButton = createNextButton();

    return (
        <div ref={elementRef} className={className} {...otherProps}>
            <div className="p-tabview-nav-container">
                {prevButton}
                {navigator}
                {nextButton}
            </div>
            {content}
        </div>
    );
});

TabPanel.displayName = 'TabPanel';

TabView.displayName = 'TabView';
