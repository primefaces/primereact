import * as HeadlessToastItem from '@primereact/headless/toast/item';
import type { ToastItemProps } from '@primereact/types/shared/toast';

export const defaultItemProps: ToastItemProps = {
    ...HeadlessToastItem.defaultProps,
    as: 'div'
};
