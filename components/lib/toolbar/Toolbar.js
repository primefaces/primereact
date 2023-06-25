import * as React from 'react';
import { classNames, ObjectUtils, mergeProps } from '../utils/Utils';
import { ToolbarBase } from './ToolbarBase';
import { PrimeReactContext } from '../api/Api';

export const Toolbar = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ToolbarBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        const start = ObjectUtils.getJSXElement(props.left || props.start, props);
        const center = ObjectUtils.getJSXElement(props.center, props);
        const end = ObjectUtils.getJSXElement(props.right || props.end, props);

        const { ptm } = ToolbarBase.setMetaData({
            props
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const startProps = mergeProps(
            {
                className: 'p-toolbar-group-start p-toolbar-group-left'
            },
            ptm('start')
        );

        const centerProps = mergeProps(
            {
                className: 'p-toolbar-group-center'
            },
            ptm('center')
        );

        const endProps = mergeProps(
            {
                className: 'p-toolbar-group-end p-toolbar-group-right'
            },
            ptm('end')
        );

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: classNames('p-toolbar p-component', props.className),
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
