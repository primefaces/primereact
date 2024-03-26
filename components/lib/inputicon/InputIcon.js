import React, { useContext, useRef } from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { PrimeReactContext } from '../api/Api';
import { InputIconBase } from './InputIconBase';
import { classNames } from '../utils/Utils';

export const InputIcon = React.memo(
    React.forwardRef((inProps, ref) => {
        const elementRef = useRef(ref);
        const mergeProps = useMergeProps();
        const context = useContext(PrimeReactContext);
        const props = InputIconBase.getProps(inProps, context);

        const { ptm, cx } = InputIconBase.setMetaData({
            props,
            ...props.__parentMetadata
        });

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root'))
            },
            InputIconBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <span {...rootProps} ref={elementRef}>
                    {props.children}
                </span>
            </>
        );
    })
);

InputIcon.displayName = 'InputIcon';
