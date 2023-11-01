import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { ObjectUtils, mergeProps } from '../utils/Utils';
import { ToolbarBase } from './ToolbarBase';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const Toolbar = React.memo(
    React.forwardRef((inProps, ref) => {
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
            [
                {
                    className: cx('start')
                },
                ptm('start')
            ],
            { useTailwind: context.useTailwind }
        );

        const centerProps = mergeProps(
            [
                {
                    className: cx('center')
                },
                ptm('center')
            ],
            { useTailwind: context.useTailwind }
        );

        const endProps = mergeProps(
            [
                {
                    className: cx('end')
                },
                ptm('end')
            ],
            { useTailwind: context.useTailwind }
        );

        const rootProps = mergeProps(
            [
                {
                    id: props.id,
                    ref: elementRef,
                    style: props.style,
                    className: cx('root'),
                    role: 'toolbar'
                },
                ToolbarBase.getOtherProps(props),
                ptm('root')
            ],
            { useTailwind: context.useTailwind }
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
