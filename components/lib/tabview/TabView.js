import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { TimesIcon } from '../icons/times';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames, mergeProps } from '../utils/Utils';
import { TabPanelBase, TabViewBase } from './TabViewBase';
import { PrimeReactContext } from '../api/Api';

export const TabPanel = () => {};

export const TabView = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = TabViewBase.getProps(inProps, context);

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

    const metaData = {
        props,
        state: {
            id: idState,
            isPrevButtonDisabled: backwardIsDisabledState,
            isNextButtonDisabled: forwardIsDisabledState,
            hiddenTabsState: hiddenTabsState,
            activeIndex: activeIndexState
        }
    };

    const { ptm, ptmo } = TabViewBase.setMetaData({
        ...metaData
    });

    const getTabPT = (tab, key) => {
        return ptmo(getTabProp(tab, 'pt'), key, {
            props: tab.props,
            parent: metaData
        });
    };

    const isSelected = (index) => index === activeIndex;
    const getTabProp = (tab, name) => TabPanelBase.getCProp(tab, name);

    const shouldUseTab = (tab, index) => {
        return tab && ObjectUtils.isValidChild(tab, 'TabPanel') && hiddenTabsState.every((_i) => _i !== index);
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
        if (props.activeIndex !== activeIndexState) {
            updateScrollBar(props.activeIndex);
        }
    }, [props.activeIndex]);

    React.useImperativeHandle(ref, () => ({
        props,
        reset,
        getElement: () => elementRef.current
    }));

    const createTabHeader = (tab, index) => {
        const selected = isSelected(index);
        const { headerStyle, headerClassName, style: _style, className: _className, disabled, leftIcon, rightIcon, header, headerTemplate, closable, closeIcon } = TabPanelBase.getCProps(tab);
        const style = { ...(headerStyle || {}), ...(_style || {}) };
        const className = classNames('p-unselectable-text', { 'p-tabview-selected p-highlight': selected, 'p-disabled': disabled }, headerClassName, _className);
        const headerId = idState + '_header_' + index;
        const ariaControls = idState + '_content_' + index;
        const tabIndex = disabled ? null : 0;
        const leftIconElement = leftIcon && IconUtils.getJSXIcon(leftIcon, undefined, { props });
        const headerTitleProps = mergeProps(
            {
                className: 'p-tabview-title'
            },
            getTabPT(tab, 'headertitle')
        );
        const titleElement = <span {...headerTitleProps}>{header}</span>;
        const rightIconElement = rightIcon && IconUtils.getJSXIcon(rightIcon, undefined, { props });
        const iconClassName = 'p-tabview-close';
        const icon = closeIcon || <TimesIcon className={iconClassName} onClick={(e) => onTabHeaderClose(e, index)} />;
        const closableIconElement = closable ? IconUtils.getJSXIcon(icon, { className: iconClassName, onClick: (e) => onTabHeaderClose(e, index) }, { props }) : null;

        const headerActionProps = mergeProps(
            {
                id: headerId,
                role: 'tab',
                className: 'p-tabview-nav-link',
                tabIndex,
                'aria-controls': ariaControls,
                'aria-selected': selected,
                onClick: (e) => onTabHeaderClick(e, tab, index),
                onKeyDown: (e) => onKeyDown(e, tab, index)
            },
            getTabPT(tab, 'headeraction')
        );

        let content = (
            // eslint-disable /
            <a {...headerActionProps}>
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

        const headerProps = mergeProps(
            {
                ref: (el) => (tabsRef.current[`tab_${index}`] = el),
                className,
                style,
                role: 'presentation'
            },
            getTabPT(tab, 'root'),
            getTabPT(tab, 'header')
        );

        return <li {...headerProps}>{content}</li>;
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

        const navContentProps = mergeProps(
            {
                id: idState,
                ref: contentRef,
                className: 'p-tabview-nav-content',
                style: props.style,
                onScroll
            },
            ptm('navcontent')
        );

        const navProps = mergeProps(
            {
                ref: navRef,
                className: 'p-tabview-nav',
                role: 'tablist'
            },
            ptm('nav')
        );

        const inkbarProps = mergeProps(
            {
                ref: inkbarRef,
                className: 'p-tabview-ink-bar'
            },
            ptm('inkbar')
        );

        return (
            <div {...navContentProps}>
                <ul {...navProps}>
                    {headers}
                    <li {...inkbarProps}></li>
                </ul>
            </div>
        );
    };

    const createContent = () => {
        const className = classNames('p-tabview-panels', props.panelContainerClassName);
        const panelContainerProps = mergeProps(
            {
                className,
                style: props.panelContainerStyle
            },
            ptm('panelcontainer')
        );
        const contents = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index))) {
                const selected = isSelected(index);
                const style = { ...(getTabProp(tab, 'contentStyle') || {}), ...(getTabProp(tab, 'style') || {}) };
                const className = classNames(getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'), 'p-tabview-panel', { 'p-hidden': !selected });
                const contentId = idState + '_content_' + index;
                const ariaLabelledBy = idState + '_header_' + index;
                const contentProps = mergeProps(
                    {
                        id: contentId,
                        className,
                        style,
                        role: 'tabpanel',
                        'aria-labelledby': ariaLabelledBy,
                        'aria-hidden': !selected
                    },
                    TabPanelBase.getCOtherProps(tab),
                    getTabPT(tab, 'root'),
                    getTabPT(tab, 'content')
                );

                return <div {...contentProps}>{!props.renderActiveOnly ? getTabProp(tab, 'children') : selected && getTabProp(tab, 'children')}</div>;
            }
        });

        return <div {...panelContainerProps}>{contents}</div>;
    };

    const createPrevButton = () => {
        const prevIconProps = mergeProps(ptm('previcon'));
        const icon = props.prevButton || <ChevronLeftIcon {...prevIconProps} />;
        const leftIcon = IconUtils.getJSXIcon(icon, { ...prevIconProps }, { props });
        const prevButtonProps = mergeProps(
            {
                ref: prevBtnRef,
                type: 'button',
                className: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
                'aria-label': ariaLabel('previousPageLabel'),
                onClick: (e) => navBackward(e)
            },
            ptm('prevbutton')
        );

        if (props.scrollable && !backwardIsDisabledState) {
            return (
                <button {...prevButtonProps}>
                    {leftIcon}
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createNextButton = () => {
        const nextIconProps = mergeProps(
            {
                'aria-hidden': 'true'
            },
            ptm('nexticon')
        );
        const icon = props.nextButton || <ChevronRightIcon {...nextIconProps} />;
        const rightIcon = IconUtils.getJSXIcon(icon, { ...nextIconProps }, { props });
        const nextButtonProps = mergeProps(
            {
                ref: nextBtnRef,
                type: 'button',
                className: 'p-tabview-nav-next p-tabview-nav-btn p-link',
                'aria-label': ariaLabel('nextPageLabel'),
                onClick: (e) => navForward(e)
            },
            ptm('nextbutton')
        );

        if (props.scrollable && !forwardIsDisabledState) {
            return (
                <button {...nextButtonProps}>
                    {rightIcon}
                    <Ripple />
                </button>
            );
        }
    };

    const className = classNames(
        'p-tabview p-component',
        {
            'p-tabview-scrollable': props.scrollable
        },
        props.className
    );

    const rootProps = mergeProps(
        {
            id: idState,
            ref: elementRef,
            style: props.style,
            className
        },
        TabViewBase.getOtherProps(props),
        ptm('root')
    );

    const navContainerProps = mergeProps(
        {
            className: 'p-tabview-nav-container'
        },
        ptm('navcontainer')
    );
    const navigator = createNavigator();
    const content = createContent();
    const prevButton = createPrevButton();
    const nextButton = createNextButton();

    return (
        <div {...rootProps}>
            <div {...navContainerProps}>
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
