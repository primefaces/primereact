import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { FloatLabelBase } from './FloatLabelBase';

export const FloatLabel = React.memo(
    React.forwardRef((inProps) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = FloatLabelBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled } = FloatLabelBase.setMetaData({
            props
        });

        useHandleStyle(FloatLabelBase.css.styles, isUnstyled, { name: 'floatlabel' });

        const rootProps = mergeProps(
            {
                className: classNames(cx('root'))
            },
            FloatLabelBase.getOtherProps(props),
            ptm('root')
        );

        return <span {...rootProps}>{props.children}</span>;
    })
);

FloatLabel.displayName = 'FloatLabel';
