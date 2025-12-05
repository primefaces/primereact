import { createStyles } from '@primereact/styles/utils';
import type { BreadcrumbInstance } from '@primereact/types/shared/breadcrumb';
import { style } from '@primeuix/styles/breadcrumb';

const _style = /*css*/ `
    ${style}

    .p-breadcrumb-item a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item a:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item a:hover{
        color: dt('breadcrumb.item.hover.color');
    }
`;

export const styles = createStyles<BreadcrumbInstance>({
    name: 'breadcrumb',
    style: _style,
    classes: {
        root: 'p-breadcrumb p-component',
        list: 'p-breadcrumb-list',
        item: ({ context }) => [
            'p-breadcrumb-item',
            {
                'p-disabled': context.disabled
            }
        ],
        separator: 'p-breadcrumb-separator',
        icon: 'p-breadcrumb-separator-icon'
    }
});
