export type Instance<Options> = {
    enter: () => Promise<(() => void) | void>;
    leave: () => Promise<(() => void) | void>;
    cancel: () => void;
    update: (options: Options) => void;
};

export type ClassNameOptions = {
    from?: string | undefined;
    to?: string | undefined;
    active?: string | undefined;
};

export type ClassNames = {
    enterClass: ClassNameOptions;
    leaveClass: ClassNameOptions;
};

export type Duration = number | { enter?: number; leave?: number } | undefined;

export interface CommonOptions {
    name?: string | undefined;
    motionSafe?: boolean | undefined;
    appear?: boolean | undefined;
    enter?: boolean | undefined;
    enterClass?: ClassNameOptions | undefined;
    //enterFromClass?: string | undefined;
    //enterToClass?: string | undefined;
    //enterActiveClass?: string | undefined;
    leave?: boolean | undefined;
    leaveClass?: ClassNameOptions | undefined;
    //leaveFromClass?: string | undefined;
    //leaveToClass?: string | undefined;
    //leaveActiveClass?: string | undefined;
    duration?: Duration | undefined;
    onBeforeEnter?: (el?: HTMLElement) => void;
    onEnter?: (el?: HTMLElement) => void;
    onAfterEnter?: (el?: HTMLElement) => void;
    onEnterCancelled?: (el?: HTMLElement) => void;
    onBeforeLeave?: (el?: HTMLElement) => void;
    onLeave?: (el?: HTMLElement) => void;
    onAfterLeave?: (el?: HTMLElement) => void;
    onLeaveCancelled?: (el?: HTMLElement) => void;
}

export interface MotionOptions extends CommonOptions {
    type?: 'transition' | 'animation';
}

export interface TransitionOptions extends CommonOptions {}

/**
 * @todo - it is not ready yet, it is just a placeholder
 */
export interface AnimationOptions extends CommonOptions {}

/** INSTANCE TYPES **/
export type MotionInstance = Instance<MotionOptions>;
export type TransitionInstance = Instance<TransitionOptions>;
export type AnimationInstance = Instance<AnimationOptions>;
