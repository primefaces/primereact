import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Ripple } from '../ripple/Ripple';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ObjectUtils, classNames, IconUtils, UniqueComponentId } from '../utils/Utils';
import { useMountEffect } from '../hooks/Hooks';

export const Panel = forwardRef((props, ref) => {
    const [idState, setIdState] = useState(props.id);
    const [collapsedState, setCollapsedState] = useState(props.collapsed);
    const contentRef = useRef(null);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const headerId = idState + '_header';
    const contentId = idState + '_content';

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
    }

    const expand = (event) => {
        if (!props.onToggle) {
            setCollapsedState(false);
        }

        props.onExpand && props.onExpand(event);
    }

    const collapse = (event) => {
        if (!props.onToggle) {
            setCollapsedState(true);
        }

        props.onCollapse && props.onCollapse(event);
    }

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }
    });

    const createToggleIcon = () => {
        if (props.toggleable) {
            const buttonId = idState + '_label';
            const toggleIcon = collapsed ? props.expandIcon : props.collapseIcon;

            return (
                <button className="p-panel-header-icon p-panel-toggler p-link" onClick={toggle} id={buttonId} aria-controls={contentId} aria-expanded={!collapsed} role="tab">
                    {IconUtils.getJSXIcon(toggleIcon, undefined, { props, collapsed })}
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createHeader = () => {
        const header = ObjectUtils.getJSXElement(props.header, props);
        const icons = ObjectUtils.getJSXElement(props.icons, props);
        const togglerElement = createToggleIcon();
        const titleElement = <span className="p-panel-title" id={headerId}>{header}</span>;
        const iconsElement = (
            <div className="p-panel-icons">
                {icons}
                {togglerElement}
            </div>
        );
        const content = (
            <div className="p-panel-header">
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
                togglerIconClassName: collapsed ? props.expandIcon : props.collapseIcon,
                onTogglerClick: toggle,
                titleElement,
                iconsElement,
                togglerElement,
                element: content,
                props,
                collapsed
            };

            return ObjectUtils.getJSXElement(props.headerTemplate, defaultContentOptions);
        }
        else if (props.header || props.toggleable) {
            return content;
        }

        return null;
    }

    const createContent = () => {
        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit options={props.transitionOptions}>
                <div ref={contentRef} className="p-toggleable-content" aria-hidden={collapsed} role="region" id={contentId} aria-labelledby={headerId}>
                    <div className="p-panel-content">
                        {props.children}
                    </div>
                </div>
            </CSSTransition>
        )
    }

    const className = classNames('p-panel p-component', {
        'p-panel-toggleable': props.toggleable
    }, props.className);
    const header = createHeader();
    const content = createContent();

    return (
        <div id={props.id} className={className} style={props.style}>
            {header}
            {content}
        </div>
    )
});

Panel.defaultProps = {
    __TYPE: 'Panel',
    id: null,
    header: null,
    headerTemplate: null,
    toggleable: null,
    style: null,
    className: null,
    collapsed: null,
    expandIcon: 'pi pi-plus',
    collapseIcon: 'pi pi-minus',
    icons: null,
    transitionOptions: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null
}

Panel.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    header: PropTypes.any,
    headerTemplate: PropTypes.any,
    toggleable: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    expandIcon: PropTypes.string,
    collapseIcon: PropTypes.string,
    icons: PropTypes.any,
    transitionOptions: PropTypes.object,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onToggle: PropTypes.func
}
