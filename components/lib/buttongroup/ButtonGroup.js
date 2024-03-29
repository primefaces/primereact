import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { ButtonGroupBase } from './ButtonGroupBase';

export const ButtonGroup = React.memo(
    React.forwardRef((inProps) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ButtonGroupBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled } = ButtonGroupBase.setMetaData({
            props
        });

        useHandleStyle(ButtonGroupBase.css.styles, isUnstyled, { name: 'buttongroup' });

        const rootProps = mergeProps(
            {
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
