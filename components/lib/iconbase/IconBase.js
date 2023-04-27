import { ObjectUtils, classNames } from '../utils/Utils';

export const IconBase = {
    defaultProps: {
        __TYPE: 'IconBase',
        className: null,
        label: null,
        spin: false
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, IconBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, IconBase.defaultProps),
    getPTI: (props) => {
        const isLabelEmpty = ObjectUtils.isEmpty(props.label);
        const otherProps = IconBase.getOtherProps(props);
        const ptiProps = {
            className: classNames(
                'p-icon',
                {
                    'p-icon-spin': props.spin
                },
                props.className
            ),
            role: !isLabelEmpty ? 'img' : undefined,
            'aria-label': !isLabelEmpty ? props.label : undefined,
            'aria-hidden': isLabelEmpty
        };

        return ObjectUtils.getMergedProps(otherProps, ptiProps);
    }
};
