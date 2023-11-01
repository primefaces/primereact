import * as React from 'react';
import { mergeProps } from '../utils/Utils';
import { DividerBase } from './DividerBase';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const Divider = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = DividerBase.getProps(inProps, context);

    const { ptm, cx, sx, isUnstyled } = DividerBase.setMetaData({
        props
    });

    useHandleStyle(DividerBase.css.styles, isUnstyled, { name: 'divider' });

    const elementRef = React.useRef(null);
    const horizontal = props.layout === 'horizontal';
    const vertical = props.layout === 'vertical';

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const rootProps = mergeProps(
        [
            {
                ref: elementRef,
                style: sx('root'),
                className: cx('root', { horizontal, vertical }),
                role: 'separator'
            },
            DividerBase.getOtherProps(props),
            ptm('root')
        ],
        { useTailwind: context.useTailwind }
    );

    const contentProps = mergeProps(
        [
            {
                className: cx('content')
            },
            ptm('content')
        ],
        { useTailwind: context.useTailwind }
    );

    return (
        <div {...rootProps}>
            <div {...contentProps}>{props.children}</div>
        </div>
    );
});

Divider.displayName = 'Divider';
