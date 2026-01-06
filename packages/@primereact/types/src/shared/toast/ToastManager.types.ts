import type * as React from 'react';

export type ToastVariant = 'success' | 'danger' | 'warn' | 'info' | 'loading' | 'custom';

export type ToastId = string | number;

export type ToastCustomRenderer = React.ReactElement | ((id: ToastId) => React.ReactElement);

export type ToastType = {
    id?: ToastId;
    title?: React.ReactNode | string;
    description?: React.ReactNode | string;
    action?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    dismissible?: boolean;
    variant?: ToastVariant;
    removed?: boolean;
    icon?: React.ReactNode;
    jsx?: React.ReactElement;
    duration?: number;
    group?: string;
    promise?: unknown;
    onDismiss?: (toast: ToastType) => void;
    onTimeout?: (toast: ToastType) => void;
};

export type ToastPromiseType<T = unknown> = {
    loading: ToastType;
    success?: ToastType | ((data: T) => ToastType | void);
    error?: ToastType | ((error: unknown) => ToastType | void);
};

export interface ToastManager {
    snapshot(): ToastType[];
    subscribe(listener: () => void): () => void;
    add(toast: ToastType): ToastId;
    create(toast: ToastType): ToastId;
    update(id: ToastId, updates: Partial<ToastType>): void;
    dismiss(id?: ToastId): ToastId | undefined;
    remove(id: ToastId): ToastId | undefined;
    clear(): void;
    get(id: ToastId): ToastType | undefined;
    success(toast: ToastType): ToastId;
    danger(toast: ToastType): ToastId;
    warn(toast: ToastType): ToastId;
    info(toast: ToastType): ToastId;
    loading(toast: ToastType): ToastId;
    custom(jsx: ToastCustomRenderer, options?: Partial<ToastType>): ToastId;
    promise<T>(promise: Promise<T>, options: ToastPromiseType<T>): Promise<T>;
}

export type ToastFunction = ((toast: ToastType) => ToastId) & {
    success(toast: ToastType): ToastId;
    danger(toast: ToastType): ToastId;
    warn(toast: ToastType): ToastId;
    info(toast: ToastType): ToastId;
    loading(toast: ToastType): ToastId;
    dismiss(id?: ToastId): ToastId | undefined;
    remove(id: ToastId): ToastId | undefined;
    custom(jsx: ToastCustomRenderer, options?: Partial<ToastType>): ToastId;
    promise<T>(promise: Promise<T>, options: ToastPromiseType<T>): Promise<T>;
};
