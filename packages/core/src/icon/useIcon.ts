import { withHeadless } from '@primereact/core/headless';
import { isEmpty } from '@primeuix/utils';

export const useIcon = withHeadless({
    name: 'useIcon',
    setup: ({ attrs }) => {
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

/*export const useIcon = withComponent(
    ({ props, attrs, ref }) => {
        const instance = useComponent({ props, attrs, style }, ref);

        const pti = () => {
            const isLabelEmpty = isEmpty(props.label);

            return mergeProps(
                {
                    ...(!instance.isUnstyled && {
                        className: classNames([
                            'p-icon',
                            {
                                'p-icon-spin': props.spin
                            }
                        ])
                    }),
                    role: !isLabelEmpty ? 'img' : undefined,
                    'aria-label': !isLabelEmpty ? props.label : undefined,
                    'aria-hidden': isEmpty(attrs.tabIndex) && isLabelEmpty
                },
                attrs
            );
        };

        return {
            ...instance,
            pti
        };
    },
    { spin: false }
);*/
