import type { PopoverContentProps } from '@primereact/types/shared/popover';
import { FocusTrap } from 'primereact/focustrap';

export const defaultContentProps: PopoverContentProps = {
    as: FocusTrap,
    autoFocus: true
};
