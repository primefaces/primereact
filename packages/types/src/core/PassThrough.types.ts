import type { AvatarPassThrough } from '../shared/avatar';
import type { BadgePassThrough } from '../shared/badge';
import type { ButtonPassThrough } from '../shared/button';
import type { CheckboxPassThrough } from '../shared/checkbox';
import type { ChipPassThrough } from '../shared/chip';
import type { InplacePassThrough } from '../shared/inplace';
import type { InputTextPassThrough } from '../shared/inputtext';
import type { MeterGroupPassThrough } from '../shared/metergroup';
import type { PanelPassThrough } from '../shared/panel';
import type { ProgressBarPassThrough } from '../shared/progressbar';
import type { ProgressSpinnerPassThrough } from '../shared/progressspinner';
import type { RadioButtonPassThrough } from '../shared/radiobutton';
import type { SkeletonPassThrough } from '../shared/skeleton';
import type { StyleClassPassThrough } from '../shared/styleclass';
import type { TagPassThrough } from '../shared/tag';

/**
 * Defines the pass-through options.
 */
export declare type PassThroughOptions = {
    /**
     * @todo Define the type.
     * Defines whether the props should be merged.
     * @default false
     * @type {(boolean | (() => void))}
     * @example
     * ```tsx
     * ...
     * ```
     */
    mergeProps?: boolean | ((global: unknown, self: unknown, datasets?: unknown) => unknown);
    /**
     * Defines whether the sections should be merged.
     * @default true
     * @type {(boolean | (() => void) | undefined)}
     * @example
     * ```tsx
     * ...
     * ```
     */
    mergeSections?: boolean | (() => void) | undefined;
};

/**
 * Defines the pass-through props.
 */
export declare type PassThroughProps = {
    /**
     * Defines the pass-through value.
     * @todo Define the type.
     */
    value?: {
        avatar?: AvatarPassThrough;
        badge?: BadgePassThrough;
        button?: ButtonPassThrough;
        checkbox?: CheckboxPassThrough;
        chip?: ChipPassThrough;
        inplace?: InplacePassThrough;
        inputtext?: InputTextPassThrough;
        metergroup?: MeterGroupPassThrough;
        panel?: PanelPassThrough;
        progressbar?: ProgressBarPassThrough;
        progressspinner?: ProgressSpinnerPassThrough;
        radiobutton?: RadioButtonPassThrough;
        skeleton?: SkeletonPassThrough;
        styleclass?: StyleClassPassThrough;
        tag?: TagPassThrough;
    };
} & PassThroughOptions;
