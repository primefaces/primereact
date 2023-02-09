import { ObjectUtils } from '../utils/Utils';

export const MenubarBase = {
    defaultProps: {
        __TYPE: 'Menubar',
        id: null,
        model: null,
        style: null,
        className: null,
        start: null,
        end: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MenubarBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MenubarBase.defaultProps)
};
