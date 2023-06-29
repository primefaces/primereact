import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect } from '../hooks/Hooks';
import { MinusIcon } from '../icons/minus';
import { PlusIcon } from '../icons/plus';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { PanelBase } from './PanelBase';

export const Panel = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = PanelBase.getProps(inProps, context);
    const [idState, setIdState] = React.useState(props.id);
    const [collapsedState, setCollapsedState] = React.useState(props.collapsed);
    const elementRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const headerId = idState + '_header';
    const contentId = idState + '_content';

    const { ptm } = PanelBase.setMetaData({
        props,
        state: {
            id: idState,
            collapsed: collapsed
        }
    });

    const toggle = (event) => {
        if (props.toggleable) {
            collapsed ? expand(event) : collapse(event);

            if (props.onToggle) {
                props.onToggle({
                    originalEvent: event,
                    value: !collapsed
                });
            }
        }

        event.preventDefault();
    };

    const expand = (event) => {
        if (!props.onToggle) {
            setCollapsedState(false);
        }

        props.onExpand && props.onExpand(event);
    };

    const collapse = (event) => {
        if (!props.onToggle) {
            setCollapsedState(true);
        }

        props.onCollapse && props.onCollapse(event);
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current,
        getContent: () => contentRef.current
    }));

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    const createToggleIcon = () => {
        if (props.toggleable) {
            const buttonId = idState + '_label';
            const togglerProps = mergeProps(
                {
                    className: 'p-panel-header-icon p-panel-toggler p-link',
                    onClick: toggle,
                    id: buttonId,
                    'aria-controls': contentId,
                    'aria-expanded': !collapsed,
                    role: 'tab'
                },
                ptm('toggler')
            );
            const togglerIconProps = mergeProps(ptm('togglericon'));

            const icon = collapsed ? props.expandIcon || <PlusIcon {...togglerIconProps} /> : props.collapseIcon || <MinusIcon {...togglerIconProps} />;
            const toggleIcon = IconUtils.getJSXIcon(icon, togglerIconProps, { props, collapsed });

            return (
                <button {...togglerProps}>
                    {toggleIcon}
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createHeader = () => {
        const header = ObjectUtils.getJSXElement(props.header, props);
        const icons = ObjectUtils.getJSXElement(props.icons, props);
        const togglerElement = createToggleIcon();

        const titleProps = mergeProps(
            {
                id: headerId,
                className: 'p-panel-title'
            },
            ptm('title')
        );
        const titleElement = <span {...titleProps}>{header}</span>;

        const iconsProps = mergeProps(
            {
                className: 'p-panel-icons'
            },
            ptm('icons')
        );
        const iconsElement = (
            <div {...iconsProps}>
                {icons}
                {togglerElement}
            </div>
        );

        const headerProps = mergeProps(
            {
                className: 'p-panel-header'
            },
            ptm('header')
        );
        const content = (
            <div {...headerProps}>
                {titleElement}
                {iconsElement}
            </div>
        );

        if (props.headerTemplate) {
            const defaultContentOptions = {
                className: 'p-panel-header',
                titleClassName: 'p-panel-title',
                iconsClassName: 'p-panel-icons',
                togglerClassName: 'p-panel-header-icon p-panel-toggler p-link',
                onTogglerClick: toggle,
                titleElement,
                iconsElement,
                togglerElement,
                element: content,
                props,
                collapsed
            };

            return ObjectUtils.getJSXElement(props.headerTemplate, defaultContentOptions);
        } else if (props.header || props.toggleable) {
            return content;
        }

        return null;
    };

    const createContent = () => {
        const toggleableContentProps = mergeProps(
            {
                ref: contentRef,
                className: 'p-toggleable-content',
                'aria-hidden': collapsed,
                role: 'region',
                id: contentId,
                'aria-labelledby': headerId
            },
            ptm('toggleablecontent')
        );
        const contentProps = mergeProps(
            {
                className: 'p-panel-content'
            },
            ptm('content')
        );

        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit options={props.transitionOptions}>
                <div {...toggleableContentProps}>
                    <div {...contentProps}>{props.children}</div>
                </div>
            </CSSTransition>
        );
    };

    const createFooter = () => {
        const footer = ObjectUtils.getJSXElement(props.footer, props);

        const footerProps = mergeProps(
            {
                className: 'p-panel-footer'
            },
            ptm('footer')
        );

        const content = <div {...footerProps}>{footer}</div>;

        if (props.footerTemplate) {
            const defaultContentOptions = {
                className: 'p-panel-footer',
                element: content,
                props
            };

            return ObjectUtils.getJSXElement(props.footerTemplate, defaultContentOptions);
        } else if (props.footer) {
            return content;
        }

        return null;
    };

    const rootProps = mergeProps(
        {
            id: idState,
            ref: elementRef,
            style: props.style,
            className: classNames(
                'p-panel p-component',
                {
                    'p-panel-toggleable': props.toggleable
                },
                props.className
            )
        },
        PanelBase.getOtherProps(props),
        ptm('root')
    );
    const header = createHeader();
    const content = createContent();
    const footer = createFooter();

    return (
        <div {...rootProps}>
            {header}
            {content}
            {footer}
        </div>
    );
});

Panel.displayName = 'Panel';
