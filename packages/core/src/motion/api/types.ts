export type MotionType = 'transition' | 'animation';
export type MotionPhase = 'enter' | 'leave';
export type MotionStage = 'Before' | 'Start' | 'After' | 'Cancelled';

export type MotionDuration = number | { [P in MotionPhase]?: number } | undefined;

export type ClassNameOptions = {
    from?: string | undefined;
    to?: string | undefined;
    active?: string | undefined;
};

export interface MotionClassNames {
    enterClass?: ClassNameOptions | undefined;
    leaveClass?: ClassNameOptions | undefined;
}

export interface MotionHooks {
    onBeforeEnter?: (el?: Element) => void;
    onEnter?: (el?: Element) => void;
    onAfterEnter?: (el?: Element) => void;
    onEnterCancelled?: (el?: Element) => void;
    onBeforeLeave?: (el?: Element) => void;
    onLeave?: (el?: Element) => void;
    onAfterLeave?: (el?: Element) => void;
    onLeaveCancelled?: (el?: Element) => void;
}

export type MotionHooksWithPhase = {
    [P in MotionPhase]?: {
        [S in MotionStage as `on${S}`]?: (MotionHooks & { [key: string]: unknown })[`on${S extends 'Start' | 'Cancelled' ? '' : S}${Capitalize<P>}${S extends 'Cancelled' ? S : ''}`];
    };
};

export type MotionClassNamesWithPhase = {
    [P in MotionPhase]: Required<ClassNameOptions>;
};

export interface MotionOptions extends MotionClassNames, MotionHooks {
    name?: string | undefined;
    type?: MotionType | undefined;
    safe?: boolean | undefined;
    appear?: boolean | undefined;
    enter?: boolean | undefined;
    leave?: boolean | undefined;
    duration?: MotionDuration | undefined;
}

export type MotionMetadata = {
    type: MotionType | undefined;
    timeout: number | 0;
    count: number | 0;
};

/** INSTANCE TYPES **/
export type MotionInstance = {
    enter: () => Promise<(() => void) | void>;
    leave: () => Promise<(() => void) | void>;
    cancel: () => void;
    update: (element: Element, options?: MotionOptions) => void;
};
