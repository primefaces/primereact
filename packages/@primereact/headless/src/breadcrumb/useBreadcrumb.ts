import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useBreadcrumb.props';

export const useBreadcrumb = withHeadless({
    name: 'useBreadcrumb',
    defaultProps,
    setup({ props }) {
        const onAction = (event: React.MouseEvent, key: string) => {
            if (props.onAction) {
                event.preventDefault();
                props.onAction(key);
            }
        };

        return { onAction };
    }
});
