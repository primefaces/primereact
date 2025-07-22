import { createStyles } from '@primereact/styles/utils';
import type { TooltipInstance } from '@primereact/types/shared/tooltip';

const style = `
    .p-tooltip2 {
        transform: scale(0.95);
        opacity: 0;
        transform-origin: var(--placer-transform-origin);
        max-width: dt('tooltip.max.width');
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip2-text {
        white-space: pre-line;
        word-break: break-word;
    }

    .p-tooltip2-arrow {
        display: block;
        clip-path: polygon(0 100%, 0 0, 100% 100%);
        border-bottom-left-radius: 2px;
        width: 0.5rem;
        height: 0.5rem;
        background: dt('tooltip.background');
    }

    .p-tooltip2-arrow[data-side='right'] {
        transform: translateX(50%) rotate(45deg);
    }

    .p-tooltip2-arrow[data-side='left'] {
        transform: translateX(-50%) rotate(-135deg);
    }
    
    .p-tooltip2-arrow[data-side='top'] {
        transform: translateY(-50%) rotate(-45deg);
    }

    .p-tooltip2-arrow[data-side='bottom'] {
        transform: translateY(50%) rotate(135deg);
    }
`;

export const styles = createStyles<TooltipInstance>({
    name: 'tooltip',
    style,
    classes: {
        root: () => {
            return ['p-tooltip2 p-component'];
        },
        arrow: 'p-tooltip2-arrow',
        text: 'p-tooltip2-text'
    }
});
