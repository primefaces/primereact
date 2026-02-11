import type { AvatarRootPassThrough } from '@primereact/types/shared/avatar';
import type { BadgePassThrough } from '@primereact/types/shared/badge';
import type { ButtonPassThrough } from '@primereact/types/shared/button';
import type { CheckboxRootPassThrough } from '@primereact/types/shared/checkbox';
import type { ChipRootPassThrough } from '@primereact/types/shared/chip';
import type { InplaceRootPassThrough } from '@primereact/types/shared/inplace';
import type { InputTextPassThrough } from '@primereact/types/shared/inputtext';
import type { MeterGroupRootPassThrough } from '@primereact/types/shared/metergroup';
import type { PanelRootPassThrough } from '@primereact/types/shared/panel';
import type { ProgressBarRootPassThrough } from '@primereact/types/shared/progressbar';
import type { ProgressSpinnerPassThrough } from '@primereact/types/shared/progressspinner';
import type { RadioButtonRootPassThrough } from '@primereact/types/shared/radiobutton';
import type { SkeletonPassThrough } from '@primereact/types/shared/skeleton';
import type { StyleClassPassThrough } from '@primereact/types/shared/styleclass';
import type { TagPassThrough } from '@primereact/types/shared/tag';

/**
 * Defines the pass-through options.
 */
export interface PassThroughOptions {
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
}

/**
 * Defines the pass-through props.
 */
export interface PassThroughProps extends PassThroughOptions {
    /**
     * Defines the pass-through value.
     * @todo Define the type.
     */
    value?: {
        avatar?: AvatarRootPassThrough;
        badge?: BadgePassThrough;
        button?: ButtonPassThrough;
        checkbox?: CheckboxRootPassThrough;
        chip?: ChipRootPassThrough;
        inplace?: InplaceRootPassThrough;
        inputtext?: InputTextPassThrough;
        metergroup?: MeterGroupRootPassThrough;
        panel?: PanelRootPassThrough;
        progressbar?: ProgressBarRootPassThrough;
        progressspinner?: ProgressSpinnerPassThrough;
        radiobutton?: RadioButtonRootPassThrough;
        skeleton?: SkeletonPassThrough;
        styleclass?: StyleClassPassThrough;
        tag?: TagPassThrough;
    };
}
