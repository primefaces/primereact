import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './usePanel.props';

export const usePanel = withHeadless({
    setup: ({ props }) => {
        const [collapsedState, setCollapsedState] = React.useState<boolean | undefined>(props.collapsed);
        const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
        const state = {
            collapsed
        };

        // element refs
        const contentRef = React.useRef(null);

        // methods
        const toggle = (event: React.SyntheticEvent) => {
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

        const expand = (event: React.SyntheticEvent) => {
            if (!props.onToggle) {
                setCollapsedState(false);
            }

            props.onExpand?.(event);
        };

        const collapse = (event: React.SyntheticEvent) => {
            if (!props.onToggle) {
                setCollapsedState(true);
            }

            props.onCollapse?.(event);
        };

        const onButtonClick = (event: React.SyntheticEvent) => {
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
    },
    defaultProps
});
