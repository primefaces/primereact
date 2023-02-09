import { ObjectUtils } from '../utils/Utils';

export const ImageBase = {
    defaultProps: {
        __TYPE: 'Image',
        alt: null,
        className: null,
        downloadable: false,
        height: null,
        imageClassName: null,
        imageStyle: null,
        onError: null,
        onHide: null,
        onShow: null,
        preview: false,
        src: null,
        template: null,
        width: null,
        zoomSrc: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ImageBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ImageBase.defaultProps)
};
