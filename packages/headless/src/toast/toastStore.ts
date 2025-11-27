import type { ToastId, ToastPromiseType, ToastType } from '@primereact/types/shared/toast';
import type * as React from 'react';

type ToastStateAction = ToastType[] | ((prev: ToastType[]) => ToastType[]);

let toastCounter = 0;
const generateId = (): string => `toast-${++toastCounter}-${Date.now()}`;

class ToastManager {
    private toasts: ToastType[];
    private listeners: Set<() => void>;

    constructor() {
        this.toasts = [];
        this.listeners = new Set();
    }

    private emit() {
        this.listeners.forEach((listener) => listener());
    }

    snapshot = (): ToastType[] => this.toasts;

    subscribe(listener: () => void): () => void {
        this.listeners.add(listener);

        return () => this.listeners.delete(listener);
    }

    private commit(action: ToastStateAction) {
        const nextState = typeof action === 'function' ? (action as (prev: ToastType[]) => ToastType[])(this.snapshot()) : [...action];

        this.toasts = nextState;
        this.emit();
    }

    private ensureId(id?: ToastId): ToastId {
        if ((typeof id === 'number' && !Number.isNaN(id)) || (typeof id === 'string' && id.length > 0)) {
            return id;
        }

        return generateId();
    }

    add = (toast: ToastType): ToastId => {
        return this.create(toast);
    };

    create(toast: ToastType): ToastId {
        const id = this.ensureId(toast.id);
        const dismissible = toast.dismissible ?? true;

        this.commit((prev) => {
            const index = prev.findIndex((t) => t.id === id);

            if (index !== -1) {
                const next = [...prev];

                next[index] = { ...next[index], ...toast, id, dismissible, removed: false };

                return next;
            }

            return [{ ...toast, id, dismissible, removed: false }, ...prev];
        });

        return id;
    }

    update = (id: ToastId, updates: Partial<ToastType>) => {
        this.commit((prev) => prev.map((toast) => (toast.id === id ? { ...toast, ...updates, id } : toast)));
    };

    dismiss = (id?: ToastId): ToastId | undefined => {
        if (id === undefined) {
            this.commit((prev) => prev.map((toast) => ({ ...toast, removed: true })));

            return undefined;
        }

        const exists = this.toasts.some((toast) => toast.id === id);

        if (!exists) {
            return undefined;
        }

        this.commit((prev) => prev.map((toast) => (toast.id === id ? { ...toast, removed: true } : toast)));

        return id;
    };

    remove = (id: ToastId): ToastId | undefined => {
        const exists = this.toasts.some((toast) => toast.id === id);

        if (!exists) {
            return undefined;
        }

        this.commit((prev) => prev.filter((toast) => toast.id !== id));

        return id;
    };

    clear = () => {
        if (!this.toasts.length) {
            return;
        }

        this.commit([]);
    };

    get = (id: ToastId): ToastType | undefined => {
        return this.toasts.find((toast) => toast.id === id);
    };

    success = (toast: ToastType): ToastId => {
        return this.create({ ...toast, variant: 'success' });
    };

    danger = (toast: ToastType): ToastId => {
        return this.create({ ...toast, variant: 'danger' });
    };

    warn = (toast: ToastType): ToastId => {
        return this.create({ ...toast, variant: 'warn' });
    };

    info = (toast: ToastType): ToastId => {
        return this.create({ ...toast, variant: 'info' });
    };

    loading = (toast: ToastType): ToastId => {
        return this.create({ ...toast, variant: 'loading', dismissible: toast.dismissible ?? false });
    };

    custom = (jsx: React.ReactElement | ((id: ToastId) => React.ReactElement), options?: Partial<ToastType>): ToastId => {
        const id = this.ensureId(options?.id);
        const element = typeof jsx === 'function' ? jsx(id) : jsx;

        return this.create({
            ...options,
            id,
            variant: 'custom',
            jsx: element
        });
    };

    promise = async <T>(promise: Promise<T>, options: ToastPromiseType<T>): Promise<T> => {
        const loadingToast: ToastType = {
            ...options.loading,
            id: options.loading.id ?? generateId(),
            variant: 'loading'
        };

        const toastId = this.create(loadingToast);

        try {
            const data = await promise;
            const successToast = typeof options.success === 'function' ? options.success(data) : options.success;

            if (successToast) {
                this.update(toastId, {
                    ...successToast,
                    id: toastId,
                    variant: successToast.variant ?? 'success',
                    removed: false
                });
            } else {
                this.remove(toastId);
            }

            return data;
        } catch (error) {
            const errorToast = typeof options.error === 'function' ? options.error(error) : options.error;

            if (errorToast) {
                this.update(toastId, {
                    ...errorToast,
                    id: toastId,
                    variant: errorToast.variant ?? 'danger',
                    removed: false
                });
            } else {
                this.remove(toastId);
            }

            throw error;
        }
    };
}

export const ToastStore = new ToastManager();

const baseToast = (toast: ToastType) => ToastStore.add(toast);

export const toast = Object.assign(baseToast, {
    success: ToastStore.success,
    danger: ToastStore.danger,
    warn: ToastStore.warn,
    info: ToastStore.info,
    loading: ToastStore.loading,
    dismiss: ToastStore.dismiss,
    custom: ToastStore.custom,
    remove: ToastStore.remove,
    promise: ToastStore.promise
});
