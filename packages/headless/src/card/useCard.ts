import { withComponent } from '@primereact/core/component';
import * as React from 'react';
import { defaultProps } from './useCard.props';

export const useCard = withComponent(({ props }) => {
    const [collapsedState, setCollapsedState] = React.useState(props.collapsed);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const state = {
        collapsed
    };

    // element refs
    const contentRef = React.useRef(null);

    // methods
    const toggle = (event) => {
        if (!props.toggleable) {
            return;
        }

        if (collapsed) expand(event);
        else collapse(event);

        props.onToggle?.({
            originalEvent: event,
            value: !collapsed
        });
    };

    const expand = (event) => {
        if (!props.onToggle) {
            setCollapsedState(false);
        }

        props.onExpand?.(event);
    };

    const collapse = (event) => {
        if (!props.onToggle) {
            setCollapsedState(true);
        }

        props.onCollapse?.(event);
    };

    const onButtonClick = (event) => {
        toggle(event);
        event.preventDefault();
    };

    return {
        state,
        // element refs
        contentRef,
        // methods
        toggle,
        expand,
        collapse,
        onButtonClick
    };
}, defaultProps);
