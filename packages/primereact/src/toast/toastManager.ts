import type { ToastEvent, ToastId, ToastListener, ToastPromiseType, ToastType } from '@primereact/types/shared/toast';

class ToastManager {
    private toasts: ToastType[] = [];
    private listeners: Set<ToastListener> = new Set();
    private toastCounter = 0;

    constructor() {
        this.toasts = [];
        this.listeners = new Set();
    }

    private generateId(): string {
        return `toast-${++this.toastCounter}-${Date.now()}`;
    }

    private emit(event: ToastEvent): void {
        this.listeners.forEach((listener) => listener(event));
    }

    // Subscribe to toast events
    subscribe(listener: ToastListener): () => void {
        this.listeners.add(listener);

        return () => this.listeners.delete(listener);
    }

    // Get all current toasts
    getToasts(): ToastType[] {
        return [...this.toasts];
    }

    // Add a new toast
    add = (id: ToastId, toast: ToastType): ToastId => {
        this.toasts.push({ ...toast, id });
        this.emit({ type: 'add', toast: { ...toast, id } });

        return id;
    };

    create = (toast: ToastType): ToastId => {
        const id = toast.id || this.generateId();

        const isAlreadyExists = this.toasts.find((t) => t.id === id);

        if (isAlreadyExists) {
            this.update(id, toast);

            return id;
        }

        return this.add(id, toast);
    };

    // Remove a toast by id or all toasts
    remove = (id?: ToastId): void => {
        if (id) {
            const toastIndex = this.toasts.findIndex((toast) => toast.id === id);

            if (toastIndex > -1) {
                this.toasts[toastIndex].removed = true;
                this.toasts[toastIndex].height = 0;

                this.emit({ type: 'remove', toastId: id });
            }
        } else {
            this.toasts.forEach((toast) => {
                this.remove(toast.id);
            });
        }
    };

    // Clear all toasts
    delete = (id?: ToastId): void => {
        if (id) {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
            this.emit({ type: 'delete', toastId: id });
        } else {
            this.toasts = [];
            this.emit({ type: 'clear' });
        }
    };

    // Update an existing toast
    update = (id: ToastId, updates: Partial<ToastType>): void => {
        const toastIndex = this.toasts.findIndex((toast) => toast.id === id);

        if (toastIndex > -1) {
            this.toasts[toastIndex] = { ...this.toasts[toastIndex], ...updates };
            this.emit({ type: 'update', toast: this.toasts[toastIndex] });
        }
    };

    // Helper methods for different toast types
    success = (toast: ToastType): ToastId => {
        return this.create({
            ...toast,
            variant: 'success'
        });
    };

    danger = (toast: ToastType): ToastId => {
        return this.create({
            ...toast,
            variant: 'danger'
        });
    };

    warn = (toast: ToastType): ToastId => {
        return this.create({
            ...toast,
            variant: 'warn'
        });
    };

    info = (toast: ToastType): ToastId => {
        return this.create({
            ...toast,
            variant: 'info'
        });
    };

    loading = (toast: ToastType): ToastId => {
        return this.create({
            ...toast,
            variant: 'loading'
        });
    };

    custom = (jsx: React.ReactElement | ((id: ToastId) => React.ReactElement), options?: Partial<ToastType>): ToastId => {
        const id = options?.id || this.generateId();

        const customToast: ToastType = {
            id,
            variant: 'custom',
            jsx: typeof jsx === 'function' ? jsx(id) : jsx,
            ...options
        };

        return this.create(customToast);
    };

    promise = async <T>(promise: Promise<T>, options: ToastPromiseType<T>): Promise<T> => {
        const loadingToast: ToastType = {
            id: options.loading.id ?? this.generateId(),
            variant: 'loading',
            ...options.loading
        };

        this.create(loadingToast);

        return promise
            .then((data) => {
                const successToast = typeof options.success === 'function' ? options.success(data) : options.success;

                if (successToast) {
                    this.update(loadingToast.id!, {
                        ...successToast,
                        id: loadingToast.id,
                        variant: 'success'
                    });
                } else {
                    this.remove(loadingToast.id);
                }

                return data;
            })
            .catch((error) => {
                const errorToast = typeof options.error === 'function' ? options.error(error) : options.error;

                if (errorToast) {
                    this.update(loadingToast.id!, {
                        ...errorToast,
                        id: loadingToast.id,
                        variant: 'danger'
                    });
                } else {
                    this.remove(loadingToast.id);
                }

                throw error;
            });
    };
}

export const ToastManagerInstance = new ToastManager();

export const toast = Object.assign(ToastManagerInstance.create, {
    success: ToastManagerInstance.success,
    danger: ToastManagerInstance.danger,
    warn: ToastManagerInstance.warn,
    info: ToastManagerInstance.info,
    loading: ToastManagerInstance.loading,
    remove: ToastManagerInstance.remove,
    clear: ToastManagerInstance.delete,
    promise: ToastManagerInstance.promise,
    custom: ToastManagerInstance.custom,
    update: ToastManagerInstance.update
});
