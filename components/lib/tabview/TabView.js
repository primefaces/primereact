import * as React from 'react';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';

export const TabPanel = () => { }

export const TabView = React.forwardRef((props, ref) => {
    const [idState, setIdState] = React.useState(props.id);
    const [backwardIsDisabledState, setBackwardIsDisabledState] = React.useState(true);
    const [forwardIsDisabledState, setForwardIsDisabledState] = React.useState(false);
    const [hiddenTabsState, setHiddenTabsState] = React.useState([]);
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const contentRef = React.useRef(null);
    const navRef = React.useRef(null);
    const inkbarRef = React.useRef(null);
    const prevBtnRef = React.useRef(null);
    const nextBtnRef = React.useRef(null);
    const tabsRef = React.useRef({});
    const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;

    const isSelected = (index) => index === activeIndex;

    const shouldUseTab = (tab, index) => {
        return tab && tab.props.__TYPE === 'TabPanel' && hiddenTabsState.every((_i) => _i !== index);
    }

    const findVisibleActiveTab = (i) => {
        const tabsInfo = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab, index)) {
                return { tab, index };
            }
        });

        return tabsInfo.find(({ tab, index }) => !tab.props.disabled && index >= i) || tabsInfo.reverse().find(({ tab, index }) => !tab.props.disabled && i > index);
    }

    const onTabHeaderClose = (event, index) => {
        setHiddenTabsState([...hiddenTabsState, index]);

        if (props.onTabClose) {
            props.onTabClose({ originalEvent: event, index });
        }

        event.preventDefault();
    }

    const onTabHeaderClick = (event, tab, index) => {
        if (!tab.props.disabled) {
            if (props.onTabChange)
                props.onTabChange({ originalEvent: event, index });
            else
                setActiveIndexState(index);
        }

        updateScrollBar(index);

        if (event) {
            event.preventDefault();
        }
    }

    const onKeyDown = (event, tab, index) => {
        if (event.code === 'Enter') {
            onTabHeaderClick(event, tab, index);
        }
    }

    const updateInkBar = () => {
        const tabHeader = tabsRef.current[`tab_${activeIndex}`];

        inkbarRef.current.style.width = DomHandler.getWidth(tabHeader) + 'px';
        inkbarRef.current.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(navRef.current).left + 'px';
    }

    const updateScrollBar = (index) => {
        let tabHeader = tabsRef.current[`tab_${index}`];

        if (tabHeader && tabHeader.scrollIntoView) {
            tabHeader.scrollIntoView({ block: 'nearest' });
        }
    }

    const updateButtonState = () => {
        const { scrollLeft, scrollWidth } = contentRef.current;
        const width = DomHandler.getWidth(contentRef.current);

        setBackwardIsDisabledState(scrollLeft === 0);
        setForwardIsDisabledState(scrollLeft === scrollWidth - width);
    }

    const onScroll = (event) => {
        props.scrollable && updateButtonState();
        event.preventDefault();
    }

    const getVisibleButtonWidths = () => {
        return [prevBtnRef.current, nextBtnRef.current].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
    }

    const navBackward = () => {
        const width = DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
        const pos = contentRef.current.scrollLeft - width;

        contentRef.current.scrollLeft = pos <= 0 ? 0 : pos;
    }

    const navForward = () => {
        const width = DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
        const pos = contentRef.current.scrollLeft + width;
        const lastPos = contentRef.current.scrollWidth - width;

        contentRef.current.scrollLeft = pos >= lastPos ? lastPos : pos;
    }

    const reset = () => {
        setBackwardIsDisabledState(true);
        setForwardIsDisabledState(false);
        setHiddenTabsState([]);

        if (props.onTabChange)
            props.onTabChange({ index: activeIndex });
        else
            setActiveIndexState(props.activeIndex);
    }

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
        reset
    }));

    const createTabHeader = (tab, index) => {
        const selected = isSelected(index);
        const { headerStyle, headerClassName, style: _style, className: _className, disabled, leftIcon, rightIcon, header, headerTemplate, closable } = tab.props;
        const style = { ...(headerStyle || {}), ...(_style || {}) };
        const className = classNames('p-unselectable-text', { 'p-tabview-selected p-highlight': selected, 'p-disabled': disabled }, headerClassName, _className);
        const headerId = idState + '_header_' + index;
        const ariaControls = idState + '_content_' + index;
        const tabIndex = disabled ? null : 0;
        const leftIconElement = leftIcon && <i className={leftIcon}></i>;
        const titleElement = <span className="p-tabview-title">{header}</span>;
        const rightIconElement = rightIcon && <i className={rightIcon}></i>;
        const closableIconElement = closable && <i className="p-tabview-close pi pi-times" onClick={(e) => onTabHeaderClose(e, index)}></i>

        let content = (
            // eslint-disable /
            <a role="tab" className="p-tabview-nav-link" onClick={(e) => onTabHeaderClick(e, tab, index)} id={headerId} onKeyDown={(e) => onKeyDown(e, tab, index)}
                aria-controls={ariaControls} aria-selected={selected} tabIndex={tabIndex}>
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
            <li ref={(el) => tabsRef.current[`tab_${index}`] = el} className={className} style={style} role="presentation">
                {content}
            </li>
        )
    }

    const createTabHeaders = () => {
        return (
            React.Children.map(props.children, (tab, index) => {
                if (shouldUseTab(tab, index)) {
                    return createTabHeader(tab, index);
                }
            })
        );
    }

    const createNavigator = () => {
        const headers = createTabHeaders();

        return (
            <div ref={contentRef} id={idState} className="p-tabview-nav-content" style={props.style} onScroll={onScroll}>
                <ul ref={navRef} className="p-tabview-nav" role="tablist">
                    {headers}
                    <li ref={inkbarRef} className="p-tabview-ink-bar"></li>
                </ul>
            </div>
        )
    }

    const createContent = () => {
        const className = classNames('p-tabview-panels', props.panelContainerClassName);
        const contents = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index))) {
                const selected = isSelected(index);
                const style = { ...(tab.props.contentStyle || {}), ...(tab.props.style || {}) };
                const className = classNames(tab.props.contentClassName, tab.props.className, 'p-tabview-panel', { 'p-hidden': !selected });
                const contentId = idState + '_content_' + index;
                const ariaLabelledBy = idState + '_header_' + index;
                const otherProps = ObjectUtils.findDiffKeys(tab.props, TabPanel.defaultProps);

                return (
                    <div {...otherProps} id={contentId} aria-labelledby={ariaLabelledBy} aria-hidden={!selected} className={className} style={style} role="tabpanel">
                        {!props.renderActiveOnly ? tab.props.children : (selected && tab.props.children)}
                    </div>
                )
            }
        });

        return (
            <div className={className} style={props.panelContainerStyle}>
                {contents}
            </div>
        )
    }

    const createPrevButton = () => {
        if (props.scrollable && !backwardIsDisabledState) {
            return (
                <button ref={prevBtnRef} className="p-tabview-nav-prev p-tabview-nav-btn p-link" onClick={navBackward} type="button">
                    <span className="pi pi-chevron-left"></span>
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createNextButton = () => {
        if (props.scrollable && !forwardIsDisabledState) {
            return (
                <button ref={nextBtnRef} className="p-tabview-nav-next p-tabview-nav-btn p-link" onClick={navForward} type="button">
                    <span className="pi pi-chevron-right"></span>
                    <Ripple />
                </button>
            )
        }
    }

    const otherProps = ObjectUtils.findDiffKeys(props, TabView.defaultProps);
    const className = classNames('p-tabview p-component', {
        'p-tabview-scrollable': props.scrollable
    }, props.className);
    const navigator = createNavigator();
    const content = createContent();
    const prevButton = createPrevButton();
    const nextButton = createNextButton();

    return (
        <div className={className} {...otherProps}>
            <div className="p-tabview-nav-container">
                {prevButton}
                {navigator}
                {nextButton}
            </div>
            {content}
        </div>
    )
});

TabPanel.displayName = 'TabPanel';
TabPanel.defaultProps = {
    __TYPE: 'TabPanel',
    header: null,
    headerTemplate: null,
    leftIcon: null,
    rightIcon: null,
    closable: false,
    disabled: false,
    style: null,
    className: null,
    headerStyle: null,
    headerClassName: null,
    contentStyle: null,
    contentClassName: null
}

TabView.displayName = 'TabView';
TabView.defaultProps = {
    __TYPE: 'TabView',
    id: null,
    activeIndex: 0,
    style: null,
    className: null,
    renderActiveOnly: true,
    onTabChange: null,
    onTabClose: null,
    scrollable: false,
    panelContainerStyle: null,
    panelContainerClassName: null
}
