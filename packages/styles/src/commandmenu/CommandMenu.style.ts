import { createStyles } from '@primereact/styles/utils';
import type { CommandMenuInstance } from '@primereact/types/shared/commandmenu';

const theme = `
    .p-commandmenu {
        position: relative;
        overflow: hidden;
        border: 1px solid light-dark(var(--p-surface-300), var(--p-surface-800));
        background-color: light-dark(var(--p-surface-0), var(--p-surface-950));
        border-radius: 0.75rem;
        max-width: 40rem;
        height: 25rem;
        display:flex;
        flex-direction: column;
    }

    .p-commandmenu-group {
        overflow:hidden;
        padding: 0.375rem 0;
    }

    .p-commandmenu-groupheading {
        margin: 0.375rem 0;
        padding-left: 0.75rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: light-dark(var(--p-surface-400), var(--p-surface-500));
        text-transform: capitalize;
    }

    .p-commandmenu-list {
        padding: 0.375rem;
        position: relative;
        overflow-x:hidden;
        overflow-y:auto;
        scroll-padding-block: 0.5rem;
        flex: 1;
    }

    .p-commandmenu-list:focus-visible{
        outline: none;
    }

    .p-commandmenu-item {
        height: 2.75rem;
        display: flex;
        align-items: center;
        user-select: none;
        border-radius: 0.5rem;
        gap: 1rem;
        padding: 0 0.75rem;
        cursor: pointer;
    }

    .p-commandmenu-item[data-selected='true'] {
        transition:none;
        background:light-dark(color-mix(in srgb, var(--p-surface-200) 50%, transparent 50%), color-mix(in srgb, var(--p-surface-800) 50%, transparent 50%));
    }

    .p-commandmenu-input{
        width: 100%;
        outline:none;
        padding: 0.375rem 0;
        font-size: 1.125rem;
        background-color: transparent;
    }

    .p-commandmenu-empty{
        text-align: center;
        padding: 2rem 0;
        color: var(--p-surface-500);
    }
`;

export const styles = createStyles<CommandMenuInstance>({
    name: 'commandmenu',
    style: theme,
    classes: {
        root: 'p-commandmenu p-component',
        group: 'p-commandmenu-group',
        groupheading: 'p-commandmenu-groupheading',
        list: 'p-commandmenu-list',
        item: 'p-commandmenu-item',
        input: 'p-commandmenu-input',
        empty: 'p-commandmenu-empty'
    }
});
