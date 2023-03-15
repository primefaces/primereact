import { ObjectUtils } from '../utils/Utils';

export const RatingBase = {
    defaultProps: {
        __TYPE: 'Rating',
        id: null,
        value: null,
        disabled: false,
        readOnly: false,
        stars: 5,
        cancel: true,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onIcon: 'pi pi-star-fill',
        offIcon: 'pi pi-star',
        cancelIcon: 'pi pi-ban',
        cancelIconProps: null,
        onIconProps: null,
        offIconProps: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RatingBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RatingBase.defaultProps)
};
