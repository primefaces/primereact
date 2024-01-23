import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

const styles = ``;

export const FocusTrapBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'FocusTrap',
        children: undefined
    },
    css: {
        styles
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, FocusTrapBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, FocusTrapBase.defaultProps)
});
