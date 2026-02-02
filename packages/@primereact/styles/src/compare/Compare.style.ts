import { createStyles } from '@primereact/styles/utils';
import type { CompareRootInstance } from '@primereact/types/shared/compare';

const theme = /*css*/ `
    .p-compare {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .p-compare-slider{
        background: light-dark(var(--p-surface-0), var(--p-surface-950));
    }

    .p-compare-slider[data-orientation="horizontal"]{
        width: 0.15rem;
        height: 100%;
    }

    .p-compare-slider[data-orientation="vertical"]{
        width: 100%;
        height: 0.15rem;
    }

    .p-compare-thumb{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.5rem;
        height:1.5rem;
        transform: translate(-50%, -50%);
        background: light-dark(var(--p-surface-0), var(--p-surface-950));
        cursor: pointer;
        border-radius: 0.325rem;

        &:has(.p-compare-input:focus-visible){
            outline: 2px solid light-dark(var(--p-surface-0), var(--p-surface-950));
            outline-offset: 2px;
        }
    }

    .p-compare-input{
        clip-path: inset(50%);
        overflow: hidden;
        white-space: nowrap;
        border: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        margin: -1px;
        position: fixed;
        top: 0;
        left: 0;
    }


`;

export const styles = createStyles<CompareRootInstance>({
    name: 'compare',
    style: theme,
    classes: {
        root: 'p-compare',
        item: 'p-compare-item',
        input: 'p-compare-input',
        thumb: ({ context }) => {
            return [
                'p-compare-thumb',
                {
                    'p-disabled': context.disabled
                }
            ];
        },
        slider: ({ context }) => {
            return [
                'p-compare-slider',
                {
                    'p-disabled': context.disabled
                }
            ];
        }
    }
});
