import React, { Children, cloneElement, useContext, useRef } from 'react';
import { PrimeReactContext } from '../api/Api';
import { useMergeProps } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
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
            ptm('root'),
            {
                className: classNames(props.className, cx('root', { iconPosition: props.iconPosition }))
            },
            IconFieldBase.getOtherProps(props)
        );

        return (
            <div {...rootProps} ref={elementRef}>
                {Children.map(props.children, (child, index) =>
                    cloneElement(child, {
                        iconPosition: props.iconPosition
                    })
                )}
            </div>
        );
    })
);

IconField.displayName = 'IconField';
