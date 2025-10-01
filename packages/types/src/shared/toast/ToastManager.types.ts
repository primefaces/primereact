type ToastVariant = 'success' | 'danger' | 'warn' | 'info' | 'loading' | 'custom';

type ToastId = string | number;

type ToastType = {
    id?: ToastId;
    title?: string;
    description?: string;
    action?: React.HTMLAttributes<HTMLButtonElement>;
    dismissible?: boolean;
    variant?: ToastVariant;
    removed?: boolean;
    height?: number;
    icon?: React.ReactNode;
    jsx?: React.ReactElement;
    duration?: number;
    group?: string;
    onDismiss?: () => void;
    onTimeout?: () => void;
};

type ToastEventType = 'add' | 'remove' | 'update' | 'clear' | 'delete' | 'promise' | 'custom';

type ToastEvent =
    | {
          type: 'add' | 'remove' | 'update' | 'clear' | 'delete';
          toast?: ToastType;
          toastId?: ToastId;
      }
    | ToastPromiseEvent
    | {
          type: 'custom';
          toast: ToastType;
      };

type ToastPromiseType<T = unknown> = {
    loading: ToastType;
    success?: ToastType | ((data: T) => ToastType);
    error?: ToastType | ((error: unknown) => ToastType);
};

type ToastPromiseEvent<T = unknown> = {
    type: 'promise';
    promise: Promise<T>;
    options: ToastPromiseType<T>;
};

type ToastListener = (event: ToastEvent) => void;

export type { ToastEvent, ToastEventType, ToastId, ToastListener, ToastPromiseEvent, ToastPromiseType, ToastType, ToastVariant };
