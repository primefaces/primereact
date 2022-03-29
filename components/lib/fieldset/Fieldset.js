import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Ripple } from '../ripple/Ripple';
import { CSSTransition } from '../csstransition/CSSTransition';
import { classNames, UniqueComponentId } from '../utils/Utils';
import { useMountEffect } from '../hooks/Hooks';

export const Fieldset = forwardRef((props, ref) => {
    const [idState, setIdState] = useState(props.id);
    const [collapsedState, setCollapsedState] = useState(props.collapsed);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const contentRef = useRef(null);
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
        if (!props.id) {
            setIdState(UniqueComponentId());
        }
    })

    const createContent = () => {
        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit options={props.transitionOptions}>
                <div ref={contentRef} id={contentId} className="p-toggleable-content" aria-hidden={collapsed} role="region" aria-labelledby={headerId}>
                    <div className="p-fieldset-content">
                        {props.children}
                    </div>
                </div>
            </CSSTransition>
        )
    }

    const createToggleIcon = () => {
        if (props.toggleable) {
            const className = classNames('p-fieldset-toggler pi', {
                'pi-plus': collapsed,
                'pi-minus': !collapsed
            });

            return <span className={className}></span>
        }

        return null;
    }

    const createLegendContent = () => {
        if (props.toggleable) {
            const toggleIcon = createToggleIcon();

            return (
                <a href={'#' + contentId} aria-controls={contentId} id={headerId} aria-expanded={!collapsed} tabIndex={props.toggleable ? null : -1}>
                    {toggleIcon}
                    <span className="p-fieldset-legend-text">{props.legend}</span>
                    <Ripple />
                </a>
            )
        }

        return <span className="p-fieldset-legend-text" id={headerId}>{props.legend}</span>
    }

    const createLegend = () => {
        if (props.legend != null || props.toggleable) {
            const legendContent = createLegendContent();

            return (
                <legend className="p-fieldset-legend p-unselectable-text" onClick={toggle}>
                    {legendContent}
                </legend>
            )
        }
    }

    const className = classNames('p-fieldset p-component', {
        'p-fieldset-toggleable': props.toggleable
    }, props.className);
    const legend = createLegend();
    const content = createContent();

    return (
        <fieldset id={idState} className={className} style={props.style} onClick={props.onClick}>
            {legend}
            {content}
        </fieldset>
    )
});

Fieldset.defaultProps = {
    __TYPE: 'Fieldset',
    id: null,
    legend: null,
    className: null,
    style: null,
    toggleable: null,
    collapsed: null,
    transitionOptions: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null,
    onClick: null
};

Fieldset.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    legend: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    toggleable: PropTypes.bool,
    collapsed: PropTypes.bool,
    transitionOptions: PropTypes.object,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onToggle: PropTypes.func,
    onClick: PropTypes.func
};
