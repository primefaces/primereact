import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';
import { ToolbarBase } from './ToolbarBase';

export const Toolbar = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ToolbarBase.getProps(inProps, context);
        const elementRef = React.useRef(null);
        const start = ObjectUtils.getJSXElement(props.left || props.start, props);
        const center = ObjectUtils.getJSXElement(props.center, props);
        const end = ObjectUtils.getJSXElement(props.right || props.end, props);
        const { ptm, cx, isUnstyled } = ToolbarBase.setMetaData({
            props
        });

        useHandleStyle(ToolbarBase.css.styles, isUnstyled, { name: 'toolbar' });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const startProps = mergeProps(
            {
                className: cx('start')
            },
            ptm('start')
        );

        const centerProps = mergeProps(
            {
                className: cx('center')
            },
            ptm('center')
        );

        const endProps = mergeProps(
            {
                className: cx('end')
            },
            ptm('end')
        );

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: cx('root'),
                role: 'toolbar'
            },
            ToolbarBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                <div {...startProps}>{start}</div>
                <div {...centerProps}>{center}</div>
                <div {...endProps}>{end}</div>
            </div>
        );
    })
);

Toolbar.displayName = 'Toolbar';
