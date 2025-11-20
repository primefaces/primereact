'use client';
import { Component } from '@primereact/core/component';
import { ChevronDownIcon } from '@primereact/icons/chevrondown';
import { ChevronUpIcon } from '@primereact/icons/chevronup';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useOrgChartContext } from '../OrgChart.context';
import { useOrgChartTreeContext } from '../tree/OrgChartTree.context';
import { defaultCollapseButtonProps } from './OrgChartCollapseButton.props';

export const OrgChartCollapseButton = withComponent({
    name: 'OrgChartCollapseButton',
    defaultProps: defaultCollapseButtonProps,
    setup() {
        const orgchart = useOrgChartContext();
        const orgcharttree = useOrgChartTreeContext();

        return { orgchart, orgcharttree };
    },
    render(instance) {
        const { props, ptmi, orgchart, orgcharttree } = instance;

        const item = orgcharttree?.props.item;
        const itemKey = item?.key;
        const isCollapsed = orgchart?.isCollapsed(item);
        const isCollapsible = orgchart?.isCollapsible(item);

        const handleCollapseClick = React.useCallback(
            (event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                orgchart?.toggleNodeCollapse(itemKey);
            },
            [itemKey, orgchart]
        );

        const rootProps = mergeProps(
            {
                role: 'button',
                className: orgchart?.cx('collapseButton'),
                onClick: handleCollapseClick,
                onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => orgchart?.handleCollapseKeyDown(event, itemKey)
            },
            orgchart?.ptm('collapseButton'),
            ptmi('root')
        );

        const createCollapseButtonDownIcon = () => {
            const iconProps = mergeProps(
                {
                    className: orgchart?.cx('collapseButtonDownIcon')
                },
                orgchart?.ptm('collapseButtonDownIcon'),
                ptmi('root')
            );

            return <ChevronDownIcon {...iconProps} />;
        };

        const createCollapseButtonUpIcon = () => {
            const iconProps = mergeProps(
                {
                    className: orgchart?.cx('collapseButtonUpIcon')
                },
                orgchart?.ptm('collapseButtonUpIcon'),
                ptmi('root')
            );

            return <ChevronUpIcon {...iconProps} />;
        };

        if (!isCollapsible) return null;

        return (
            <Component
                instance={instance}
                attrs={rootProps}
                children={
                    props.children ??
                    (isCollapsed ? (
                        <>
                            +{item?.children?.length}
                            {createCollapseButtonDownIcon()}
                        </>
                    ) : (
                        <>
                            Collapse
                            {createCollapseButtonUpIcon()}
                        </>
                    ))
                }
            />
        );
    }
});
