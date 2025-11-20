import { createStyles } from '@primereact/styles/utils';
import type { OrgChartInstance } from '@primereact/types/shared/orgchart';
import { style } from '@primeuix/styles/organizationchart';

const theme = `
${style}

.p-orgchart{
    width: 100%;
    overflow: auto;
    padding: 1rem 0;
}

.p-orgchart-subtree{
    position: relative;
    display: flex;
    padding-inline-start: 0;
    margin: 0;
    padding-top: calc(var(--gap-y) * 1px * 2/3);
    gap: calc(var(--gap-x) * 1px);
}

.p-orgchart-subtree-root{
    padding-top: 0;
}

.p-orgchart-subtree-root::before {
    content: none !important;
}

.p-orgchart-subtree::before {
    content: "";
    position: absolute;
    top: 0;
    height: calc(var(--gap-y) * 1px * 2/3);
    box-sizing: border-box;
    left: calc(50% - 1px / 2);
    width: 0;
    border-left: 1px solid dt('organizationchart.connector.color');
}

.p-orgchart-tree {
    flex-shrink: 0;
    text-align: center;
    list-style-type: none;
    margin: 0 auto;
    position: relative;
    padding: calc(var(--gap-y) * 1px * 1/3) 0 0 0;
}

.p-orgchart-tree::before,
.p-orgchart-tree::after {
    content: "";
    position: absolute;
    height: calc(var(--gap-y) * 1px * 1/3);
    width: calc(50% + calc(var(--gap-x) / 2 * 1px));
    top: 0;
    right: 50%;
    border-top: 1px solid dt('organizationchart.connector.color');
    box-sizing: border-box;
}

.p-orgchart-tree::after {
    left: 50%;
    border-left: 1px solid dt('organizationchart.connector.color');
}

.p-orgchart-tree:only-of-type {
    padding: 0;
}

.p-orgchart-tree:only-of-type::before,
.p-orgchart-tree:only-of-type::after {
    display: none;
}

.p-orgchart-tree:first-of-type::before {
    border: none;
}

.p-orgchart-tree:first-of-type::after {
    border-radius: dt('organizationchart.connector.border.radius') 0 0 0;
}

.p-orgchart-tree:last-of-type::before {
    border-right: 1px solid dt('organizationchart.connector.color');
    border-radius: 0 dt('organizationchart.connector.border.radius') 0 0;
}

.p-orgchart-tree:last-of-type::after {
    border: 0 none;
}

.p-orgchart-node {
    position: relative;
    min-width: 4rem;
    width: fit-content;
    margin: 0 auto;
    background: dt('organizationchart.node.background');
    border: 1px solid dt('organizationchart.node.border.color');
    border-radius: dt('organizationchart.node.border.radius');
    color: dt('organizationchart.node.color');
    transition:
        background dt('organizationchart.transition.duration'),
        border-color dt('organizationchart.transition.duration'),
        color dt('organizationchart.transition.duration'),
        box-shadow dt('organizationchart.transition.duration');
}

.p-orgchart-node-content{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: dt('organizationchart.node.padding');
}

.p-orgchart-node[data-selectable="true"]:not([data-selected="true"]):hover {
    background: dt('organizationchart.node.hover.background');
    color: dt('organizationchart.node.hover.color');
}

.p-orgchart-node[data-selectable="true"][data-selected="true"] {
    background: dt('organizationchart.node.selected.background');
    color: dt('organizationchart.node.selected.color');
}

.p-orgchart-node[data-selectable="true"] {
    cursor: pointer;
    user-select: none;
}

.p-orgchart-collapse-button{
    pointer-events: auto;
    padding: 0.1rem 0.3rem;
    gap: 0.2rem;
    position: absolute;
    z-index:2;
    font-size: 0.75rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    cursor: pointer;
    user-select: none;
    background: dt('organizationchart.node.toggle.button.background');
    color: dt('organizationchart.node.toggle.button.color');
    border-radius: 99999px;
    border: 1px solid dt('organizationchart.node.toggle.button.border.color');
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition:
        background dt('organizationchart.transition.duration'),
        color dt('organizationchart.transition.duration'),
        border-color dt('organizationchart.transition.duration'),
        outline-color dt('organizationchart.transition.duration'),
        box-shadow dt('organizationchart.transition.duration');
}

.p-orgchart-node[data-collapsible="true"][data-collapsed="false"] .p-orgchart-collapse-button{
    bottom: 0;
    transform: translateX(-50%) translateY(calc(50% + calc(var(--gap-y) / 2 * 1px * 2/3)));
}

.p-orgchart-node:focus-visible{
    box-shadow: dt('breadcrumb.item.focus.ring.shadow');
    outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
    outline-offset: dt('breadcrumb.item.focus.ring.offset');
}

.p-orgchart-collapse-button:hover {
    background: dt('organizationchart.node.toggle.button.hover.background');
    color: dt('organizationchart.node.toggle.button.hover.color');
}

.p-orgchart-collapse-button:focus-visible {
    box-shadow: dt('breadcrumb.item.focus.ring.shadow');
    outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
    outline-offset: dt('breadcrumb.item.focus.ring.offset');
}

.p-orgchart-collapse-button > svg{
    width: 0.65rem !important;
    height: 0.65rem !important;
}

`;

export const styles = createStyles<OrgChartInstance>({
    name: 'organizationchart',
    style: theme,
    classes: {
        root: 'p-orgchart p-component',
        tree: 'p-orgchart-tree',
        subtree: ({ context }) => [
            'p-orgchart-subtree',
            {
                'p-orgchart-subtree-root': context?.root
            }
        ],
        node: 'p-orgchart-node',
        nodeContent: 'p-orgchart-node-content',
        collapseButton: 'p-orgchart-collapse-button'
    }
});
