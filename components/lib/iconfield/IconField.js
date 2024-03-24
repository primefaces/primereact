import React, { useContext, useRef } from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { PrimeReactContext } from '../api/Api';
import { IconFieldBase } from './IconFieldBase';

export const IconField = React.memo(
    React.forwardRef((inProps, ref) => {
        const elementRef = useRef(ref);
        const mergeProps = useMergeProps();
        const context = useContext(PrimeReactContext);
        const props = IconFieldBase.getProps(inProps, context);

        const { ptm, cx } = IconFieldBase.setMetaData({
            props,
            ...props.__parentMetadata,
            context: {
                iconPosition: props.iconPosition
            }
        });

        const rootProps = mergeProps(
            {
                className: cx('root', { iconPosition: props.iconPosition })
            },
            IconFieldBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps} ref={elementRef}>
                <>{props.children}</>
            </div>
        );
    })
);

IconField.displayName = 'IconField';
