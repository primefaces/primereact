import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames, DomHandler } from '../utils/Utils';
import { OrganizationChartBase } from './OrganizationChartBase';
import { OrganizationChartNode } from './OrganizationChartNode';

export const OrganizationChart = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = OrganizationChartBase.getProps(inProps, context);
        const { ptm, cx, sx, isUnstyled } = OrganizationChartBase.setMetaData({
            props
        });

        useHandleStyle(OrganizationChartBase.css.styles, isUnstyled, { name: 'orgchart' });
        const elementRef = React.useRef(null);
        const root = props.value && props.value.length ? props.value[0] : null;

        const onNodeClick = (event, node) => {
            if (props.selectionMode) {
                const target = event.target;

                if (node.selectable === false || DomHandler.hasClass(target, 'p-node-toggler') || DomHandler.hasClass(target, 'p-node-toggler-icon')) {
                    return;
                }

                const index = findIndexInSelection(node);
                const selected = index >= 0;
                let selection;

                if (props.selectionMode === 'single') {
                    if (selected) {
                        selection = null;
                        props.onNodeUnselect && props.onNodeUnselect({ originalEvent: event, node });
                    } else {
                        selection = node;
                        props.onNodeSelect && props.onNodeSelect({ originalEvent: event, node });
                    }
                } else if (props.selectionMode === 'multiple') {
                    if (selected) {
                        selection = props.selection.filter((_, i) => i !== index);
                        props.onNodeUnselect && props.onNodeUnselect({ originalEvent: event, node });
                    } else {
                        selection = [...(props.selection || []), node];
                        props.onNodeSelect && props.onNodeSelect({ originalEvent: event, node });
                    }
                }

                if (props.onSelectionChange) {
                    props.onSelectionChange({
                        originalEvent: event,
                        data: selection
                    });
                }
            }
        };

        const findIndexInSelection = (node) => {
            if (props.selectionMode && props.selection) {
                if (props.selectionMode === 'single') return props.selection === node ? 0 : -1;
                else if (props.selectionMode === 'multiple') return props.selection.findIndex((selectedNode) => selectedNode === node);
            }

            return -1;
        };

        const isSelected = (node) => {
            return findIndexInSelection(node) !== -1;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: classNames(props.className, cx('root'))
            },
            OrganizationChartBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                <OrganizationChartNode
                    hostName="OrganizationChart"
                    node={root}
                    nodeTemplate={props.nodeTemplate}
                    selectionMode={props.selectionMode}
                    onNodeClick={onNodeClick}
                    isSelected={isSelected}
                    togglerIcon={props.togglerIcon}
                    ptm={ptm}
                    cx={cx}
                    sx={sx}
                />
            </div>
        );
    })
);

OrganizationChart.displayName = 'OrganizationChart';
