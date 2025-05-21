import { withHeadless } from '@primereact/core/headless';
import { isEmpty } from '@primeuix/utils';

export const useIcon = withHeadless({
    name: 'useIcon',
    setup({ attrs }) {
        const pti = () => {
            const isAriaLabelEmpty = isEmpty(attrs['aria-label']);

            return {
                role: !isAriaLabelEmpty ? 'img' : undefined,
                'aria-hidden': isEmpty(attrs.tabIndex) && isAriaLabelEmpty
            };
        };

        return {
            pti
        };
    }
});
