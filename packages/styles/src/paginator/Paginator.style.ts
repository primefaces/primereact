import { createStyles } from '@primereact/styles/utils';
import type { PaginatorInstance } from '@primereact/types/shared/paginator';
import { style } from '@primeuix/styles/paginator';

const theme = `
${style}
.p-paginator-ellipsis {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: dt('paginator.nav.button.background');
    border: 0 none;
    color: dt('paginator.nav.button.color');
    min-width: dt('paginator.nav.button.width');
    height: dt('paginator.nav.button.height');
    transition:
        background dt('paginator.transition.duration'),
        color dt('paginator.transition.duration'),
        outline-color dt('paginator.transition.duration'),
        box-shadow dt('paginator.transition.duration');
    border-radius: dt('paginator.nav.button.border.radius');
    padding: 0;
    margin: 0;
}
`;

export const styles = createStyles<PaginatorInstance>({
    name: 'paginator',
    style: theme,
    classes: {
        paginator: () => ['p-paginator p-component'],
        content: 'p-paginator-content',
        contentStart: 'p-paginator-content-start',
        contentEnd: 'p-paginator-content-end',
        first: ({ context }) => [
            'p-paginator-first',
            {
                'p-disabled': context.disabled
            }
        ],
        firstIcon: 'p-paginator-first-icon',
        prev: ({ context }) => [
            'p-paginator-prev',
            {
                'p-disabled': context.disabled
            }
        ],
        prevIcon: 'p-paginator-prev-icon',
        next: ({ context }) => [
            'p-paginator-next',
            {
                'p-disabled': context.disabled
            }
        ],
        nextIcon: 'p-paginator-next-icon',
        last: ({ context }) => [
            'p-paginator-last',
            {
                'p-disabled': context.disabled
            }
        ],
        lastIcon: 'p-paginator-last-icon',
        pages: 'p-paginator-pages',
        page: ({ context }) => [
            'p-paginator-page',
            {
                'p-paginator-page-selected': context.selected === true,
                'p-disabled': context.disabled
            }
        ],
        ellipsis: 'p-paginator-ellipsis',
        current: 'p-paginator-current',
        pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
        pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
        pcJumpToPageInputText: 'p-paginator-jtp-input'
    }
});
