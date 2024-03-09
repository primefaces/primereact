import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { MinusIcon } from '../icons/minus';
import { PlusIcon } from '../icons/plus';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { PanelBase } from './PanelBase';

export const Panel = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = PanelBase.getProps(inProps, context);
    const [idState, setIdState] = React.useState(props.id);
    const [collapsedState, setCollapsedState] = React.useState(props.collapsed);
    const elementRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const headerId = idState + '_header';
    const contentId = idState + '_content';

    const { ptm, cx, isUnstyled } = PanelBase.setMetaData({
        props,
        state: {
            id: idState,
            collapsed: collapsed
        }
    });

    useHandleStyle(PanelBase.css.styles, isUnstyled, { name: 'panel' });

    const toggle = (event) => {
        if (!props.toggleable) {
            return;
        }

        collapsed ? expand(event) : collapse(event);

        if (event) {
            if (props.onToggle) {
                props.onToggle({
                    originalEvent: event,
                    value: !collapsed
                });
            }

            event.preventDefault();
        }
    };

    const expand = (event) => {
        if (!props.onToggle) {
            setCollapsedState(false);
        }

        props.onExpand && event && props.onExpand(event);
    };

    const collapse = (event) => {
        if (!props.onToggle) {
            setCollapsedState(true);
        }

        props.onCollapse && event && props.onCollapse(event);
    };

    React.useImperativeHandle(ref, () => ({
        props,
        toggle,
        expand,
        collapse,
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
                    className: cx('toggler'),
                    onClick: toggle,
                    id: buttonId,
                    'aria-controls': contentId,
                    'aria-expanded': !collapsed,
                    type: 'button',
                    role: 'button',
                    'aria-label': props.header
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
                className: cx('title')
            },
            ptm('title')
        );
        const titleElement = <span {...titleProps}>{header}</span>;

        const iconsProps = mergeProps(
            {
                className: cx('icons')
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
                className: cx('header')
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
                id: idState + '_header',
                props,
                collapsed
            };

            return ObjectUtils.getJSXElement(props.headerTemplate, defaultContentOptions);
        } else if (props.header || props.toggleable) {
            return content;
        }

        return null;
    };

    const createFooter = () => {
        const footer = ObjectUtils.getJSXElement(props.footer, props);

        const footerProps = mergeProps(
            {
                className: cx('footer')
            },
            ptm('footer')
        );

        const content = <div {...footerProps}>{footer}</div>;

        if (props.footerTemplate) {
            const defaultContentOptions = {
                className: cx('footer'),
                element: content,
                props
            };

            return ObjectUtils.getJSXElement(props.footerTemplate, defaultContentOptions);
        } else if (props.footer) {
            return content;
        }

        return null;
    };

    const createContent = () => {
        const toggleableContentProps = mergeProps(
            {
                ref: contentRef,
                className: cx('toggleableContent'),
                'aria-hidden': collapsed,
                role: 'region',
                id: contentId,
                'aria-labelledby': headerId
            },
            ptm('toggleablecontent')
        );
        const contentProps = mergeProps(
            {
                className: cx('content')
            },
            ptm('content')
        );

        const transitionProps = mergeProps(
            {
                classNames: cx('transition'),
                timeout: { enter: 1000, exit: 450 },
                in: !collapsed,
                unmountOnExit: true,
                options: props.transitionOptions
            },
            ptm('transition')
        );

        return (
            <CSSTransition nodeRef={contentRef} {...transitionProps}>
                <div {...toggleableContentProps}>
                    <div {...contentProps}>{props.children}</div>
                </div>
            </CSSTransition>
        );
    };

    const rootProps = mergeProps(
        {
            id: idState,
            ref: elementRef,
            style: props.style,
            className: classNames(props.className, cx('root'))
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
