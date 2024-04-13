import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { ObjectUtils, classNames } from '../utils/Utils';
import { ButtonGroupBase } from './ButtonGroupBase';

export const ButtonGroup = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ButtonGroupBase.getProps(inProps, context);
        const elementRef = React.useRef(ref);
        const { ptm, cx, isUnstyled } = ButtonGroupBase.setMetaData({
            props
        });

        useHandleStyle(ButtonGroupBase.css.styles, isUnstyled, { name: 'buttongroup' });

        React.useEffect(() => {
            ObjectUtils.combinedRefs(elementRef, ref);
        }, [elementRef, ref]);

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: classNames(cx('root')),
                role: 'group'
            },
            ButtonGroupBase.getOtherProps(props),
            ptm('root')
        );

        return <span {...rootProps}>{props.children}</span>;
    })
);

ButtonGroup.displayName = 'ButtonGroup';
