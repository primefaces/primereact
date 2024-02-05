import * as React from 'react';
import { PrimeReactContext, ariaLabel } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { TimesIcon } from '../icons/times';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { TabPanelBase, TabViewBase } from './TabViewBase';

export const TabPanel = () => {};

export const TabView = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
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
    const count = React.Children.count(props.children);

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

    const { ptm, ptmo, cx, sx, isUnstyled } = TabViewBase.setMetaData({
        ...metaData
    });

    useHandleStyle(TabViewBase.css.styles, isUnstyled, { name: 'tabview' });

    const getTabPT = (tab, key, index) => {
        const tabMetaData = {
            props: tab.props,
            parent: metaData,
            context: {
                index,
                count,
                first: index === 0,
                last: index === count - 1,
                active: index == activeIndexState,
                disabled: getTabProp(tab, 'disabled')
            }
        };

        return mergeProps(ptm(`tab.${key}`, { tab: tabMetaData }), ptm(`tabpanel.${key}`, { tabpanel: tabMetaData }), ptm(`tabpanel.${key}`, tabMetaData), ptmo(getTabProp(tab, 'pt'), key, tabMetaData));
    };

    const isSelected = (index) => index === activeIndex;
    const getTabProp = (tab, name) => TabPanelBase.getCProp(tab, name);

    const shouldUseTab = (tab) => {
        return tab && getTabProp(tab, 'visible') && ObjectUtils.isValidChild(tab, 'TabPanel') && hiddenTabsState.every((_i) => _i !== tab.key);
    };

    const findVisibleActiveTab = (i) => {
        const tabsInfo = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab)) {
                return { tab, index };
            }
        });

        return tabsInfo.find(({ tab, index }) => !getTabProp(tab, 'disabled') && index >= i) || tabsInfo.reverse().find(({ tab, index }) => !getTabProp(tab, 'disabled') && i > index);
    };

    const onTabHeaderClose = (event, index) => {
        event.preventDefault();

        const { onBeforeTabClose, onTabClose, children } = props;
        const { key } = children[index];

        // give caller a chance to stop the selection
        if (onBeforeTabClose && onBeforeTabClose({ originalEvent: event, index }) === false) {
            return;
        }

        setHiddenTabsState([...hiddenTabsState, key]);

        if (onTabClose) {
            onTabClose({ originalEvent: event, index });
        }
    };

    const onTabHeaderClick = (event, tab, index) => {
        changeActiveIndex(event, tab, index);
    };

    const changeActiveIndex = (event, tab, index) => {
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

        updateScrollBar({ index });
    };

    const onKeyDown = (event, tab, index) => {
        switch (event.code) {
            case 'ArrowLeft':
                onTabArrowLeftKey(event);
                break;

            case 'ArrowRight':
                onTabArrowRightKey(event);
                break;

            case 'Home':
                onTabHomeKey(event);
                break;

            case 'End':
                onTabEndKey(event);
                break;

            case 'PageDown':
                onPageDownKey(event);
                break;

            case 'PageUp':
                onPageUpKey(event);
                break;

            case 'Enter':
            case 'Space':
                onTabEnterKey(event, tab, index);
                break;

            default:
                break;
        }
    };

    const onTabArrowRightKey = (event) => {
        const nextHeaderAction = findNextHeaderAction(event.target.parentElement);

        nextHeaderAction ? changeFocusedTab(nextHeaderAction) : onTabHomeKey(event);
        event.preventDefault();
    };

    const onTabArrowLeftKey = (event) => {
        const prevHeaderAction = findPrevHeaderAction(event.target.parentElement);

        prevHeaderAction ? changeFocusedTab(prevHeaderAction) : onTabEndKey(event);
        event.preventDefault();
    };

    const onTabHomeKey = (event) => {
        const firstHeaderAction = findFirstHeaderAction();

        changeFocusedTab(firstHeaderAction);
        event.preventDefault();
    };

    const onTabEndKey = (event) => {
        const lastHeaderAction = findLastHeaderAction();

        changeFocusedTab(lastHeaderAction);
        event.preventDefault();
    };

    const onPageDownKey = (event) => {
        updateScrollBar({ index: React.Children.count(props.children) - 1 });
        event.preventDefault();
    };

    const onPageUpKey = (event) => {
        updateScrollBar({ index: 0 });
        event.preventDefault();
    };

    const onTabEnterKey = (event, tab, index) => {
        changeActiveIndex(event, tab, index);
        event.preventDefault();
    };

    const findNextHeaderAction = (tabElement, selfCheck = false) => {
        const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;

        return headerElement
            ? DomHandler.getAttribute(headerElement, 'data-p-disabled') || DomHandler.getAttribute(headerElement, 'data-pc-section') === 'inkbar'
                ? findNextHeaderAction(headerElement)
                : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]')
            : null;
    };

    const findPrevHeaderAction = (tabElement, selfCheck = false) => {
        const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;

        return headerElement
            ? DomHandler.getAttribute(headerElement, 'data-p-disabled') || DomHandler.getAttribute(headerElement, 'data-pc-section') === 'inkbar'
                ? findPrevHeaderAction(headerElement)
                : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]')
            : null;
    };

    const findFirstHeaderAction = () => {
        return findNextHeaderAction(navRef.current.firstElementChild, true);
    };

    const findLastHeaderAction = () => {
        return findPrevHeaderAction(navRef.current.lastElementChild, true);
    };

    const changeFocusedTab = (element) => {
        if (element) {
            DomHandler.focus(element);
            updateScrollBar({ element });
        }
    };

    const updateInkBar = () => {
        const tabHeader = tabsRef.current[`tab_${activeIndex}`];

        inkbarRef.current.style.width = DomHandler.getWidth(tabHeader) + 'px';
        inkbarRef.current.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(navRef.current).left + 'px';
    };

    const updateScrollBar = ({ index, element }) => {
        let tabHeader = element || tabsRef.current[`tab_${index}`];

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
        updateButtonState();
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
            updateScrollBar({ index: props.activeIndex });
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
        const headerId = idState + '_header_' + index;
        const ariaControls = idState + index + '_content';
        const tabIndex = disabled || !selected ? -1 : 0;
        const leftIconElement = leftIcon && IconUtils.getJSXIcon(leftIcon, undefined, { props });
        const headerTitleProps = mergeProps(
            {
                className: cx('tab.headertitle')
            },
            getTabPT(tab, 'headertitle', index)
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
                className: cx('tab.headeraction'),
                tabIndex,
                'aria-controls': ariaControls,
                'aria-selected': selected,
                'aria-disabled': disabled,
                onClick: (e) => onTabHeaderClick(e, tab, index),
                onKeyDown: (e) => onKeyDown(e, tab, index)
            },
            getTabPT(tab, 'headeraction', index)
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
                className: cx('tab.header', { selected, disabled, headerClassName, _className }),
                style: sx('tab.header', { headerStyle, _style }),
                role: 'presentation'
            },
            getTabPT(tab, 'root', index),
            getTabPT(tab, 'header', index)
        );

        return <li {...headerProps}>{content}</li>;
    };

    const createTabHeaders = () => {
        return React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab)) {
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
                className: cx('navcontent'),
                style: props.style,
                onScroll
            },
            ptm('navcontent')
        );

        const navProps = mergeProps(
            {
                ref: navRef,
                className: cx('nav'),
                role: 'tablist'
            },
            ptm('nav')
        );

        const inkbarProps = mergeProps(
            {
                ref: inkbarRef,
                'aria-hidden': 'true',
                role: 'presentation',
                className: cx('inkbar')
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
        const panelContainerProps = mergeProps(
            {
                className: cx('panelcontainer'),
                style: props.panelContainerStyle
            },
            ptm('panelcontainer')
        );
        const contents = React.Children.map(props.children, (tab, index) => {
            if (shouldUseTab(tab) && (!props.renderActiveOnly || isSelected(index))) {
                const selected = isSelected(index);
                const contentId = idState + index + '_content';
                const ariaLabelledBy = idState + '_header_' + index;
                const contentProps = mergeProps(
                    {
                        id: contentId,
                        className: cx('tab.content', { props, selected, getTabProp, tab, isSelected, shouldUseTab, index }),
                        style: sx('tab.content', { props, getTabProp, tab, isSelected, shouldUseTab, index }),
                        role: 'tabpanel',
                        'aria-labelledby': ariaLabelledBy
                    },
                    TabPanelBase.getCOtherProps(tab),
                    getTabPT(tab, 'root', index),
                    getTabPT(tab, 'content', index)
                );

                return <div {...contentProps}>{!props.renderActiveOnly ? getTabProp(tab, 'children') : selected && getTabProp(tab, 'children')}</div>;
            }
        });

        return <div {...panelContainerProps}>{contents}</div>;
    };

    const createPrevButton = () => {
        const prevIconProps = mergeProps(
            {
                'aria-hidden': 'true'
            },
            ptm('previcon')
        );
        const icon = props.prevButton || <ChevronLeftIcon {...prevIconProps} />;
        const leftIcon = IconUtils.getJSXIcon(icon, { ...prevIconProps }, { props });
        const prevButtonProps = mergeProps(
            {
                ref: prevBtnRef,
                type: 'button',
                className: cx('prevbutton'),
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
                className: cx('nextbutton'),
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

    const rootProps = mergeProps(
        {
            id: idState,
            ref: elementRef,
            style: props.style,
            className: cx('root')
        },
        TabViewBase.getOtherProps(props),
        ptm('root')
    );

    const navContainerProps = mergeProps(
        {
            className: cx('navcontainer')
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
