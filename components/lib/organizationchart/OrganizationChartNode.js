import * as React from 'react';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronUpIcon } from '../icons/chevronup';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

export const OrganizationChartNode = React.memo((props) => {
    const node = props.node;
    const [expandedState, setExpandedState] = React.useState(node.expanded);
    const leaf = node.leaf === false ? false : !(node.children && node.children.length);
    const colspan = node.children && node.children.length ? node.children.length * 2 : null;
    const selected = props.isSelected(node);
    const visibility = !leaf && expandedState ? 'inherit' : 'hidden';

    const getPTOptions = (key) => {
        return props.ptm(key, {
            state: {
                expanded: expandedState
            },
            context: {
                selected: props.isSelected(node)
            }
        });
    };

    const onNodeClick = (event, node) => {
        props.onNodeClick(event, node);
    };

    const toggleNode = (event, node) => {
        setExpandedState((prevExpanded) => !prevExpanded);
        event.preventDefault();
    };

    const createChildNodes = () => {
        const nodesProps = mergeProps(
            {
                className: 'p-organizationchart-nodes',
                style: { visibility }
            },
            props.ptm('nodes')
        );
        const nodeCellProps = mergeProps(
            {
                colSpan: '2'
            },
            props.ptm('nodeCell')
        );

        return (
            <tr {...nodesProps}>
                {node.children &&
                    node.children.map((child, index) => {
                        return (
                            <td key={index} {...nodeCellProps}>
                                <OrganizationChartNode node={child} nodeTemplate={props.nodeTemplate} selectionMode={props.selectionMode} onNodeClick={props.onNodeClick} isSelected={props.isSelected} togglerIcon={props.togglerIcon} ptm={props.ptm} />
                            </td>
                        );
                    })}
            </tr>
        );
    };

    const createLinesMiddle = () => {
        const nodeChildLength = node.children && node.children.length;
        const linesProps = mergeProps(
            {
                className: 'p-organizationchart-lines',
                style: { visibility }
            },
            props.ptm('lines')
        );
        const lineCellProps = mergeProps(
            {
                colSpan: colspan
            },
            props.ptm('lineCell')
        );
        const lineDownProps = mergeProps(
            {
                className: 'p-organizationchart-line-down'
            },
            props.ptm('lineDown')
        );

        return (
            <tr {...linesProps}>
                {node.children && node.children.length === 1 && (
                    <td {...lineCellProps}>
                        <div {...lineDownProps}></div>
                    </td>
                )}
                {node.children &&
                    node.children.length > 1 &&
                    node.children.map((_, index) => {
                        const leftClassName = classNames('p-organizationchart-line-left', { 'p-organizationchart-line-top': index !== 0 });
                        const rightClassName = classNames('p-organizationchart-line-right', { 'p-organizationchart-line-top': index !== nodeChildLength - 1 });

                        return [
                            <td key={index + '_lineleft'} className={leftClassName}>
                                &nbsp;
                            </td>,
                            <td key={index + '_lineright'} className={rightClassName}>
                                &nbsp;
                            </td>
                        ];
                    })}
            </tr>
        );
    };

    const createLinesDown = () => {
        const linesProps = mergeProps(
            {
                className: 'p-organizationchart-lines',
                style: { visibility }
            },
            props.ptm('lines')
        );

        const lineCellProps = mergeProps(
            {
                colSpan: colspan
            },
            props.ptm('lineCell')
        );

        const lineDownProps = mergeProps(
            {
                className: 'p-organizationchart-line-down'
            },
            props.ptm('lineDown')
        );

        return (
            <tr {...linesProps}>
                <td {...lineCellProps}>
                    <div {...lineDownProps}></div>
                </td>
            </tr>
        );
    };

    const createToggler = () => {
        if (!leaf) {
            const iconClassName = 'p-node-toggler-icon';

            const nodeTogglerIconProps = mergeProps(
                {
                    className: iconClassName
                },
                props.ptm('nodeTogglerIcon')
            );

            let icon;

            if (expandedState) {
                icon = props.togglerIcon || <ChevronDownIcon {...nodeTogglerIconProps} />;
            } else {
                icon = props.togglerIcon || <ChevronUpIcon {...nodeTogglerIconProps} />;
            }

            const togglerIcon = IconUtils.getJSXIcon(icon, { ...nodeTogglerIconProps }, { props });

            const nodeTogglerProps = mergeProps(
                {
                    className: 'p-node-toggler',
                    onClick: (e) => toggleNode(e, node),
                    href: '#'
                },
                getPTOptions('nodeToggler')
            );

            return (
                /* eslint-disable */
                <a {...nodeTogglerProps}>
                    <i> {togglerIcon} </i>
                </a>
                /* eslint-enable */
            );
        }

        return null;
    };

    const createNodeLabel = () => {
        const label = (props.nodeTemplate && ObjectUtils.getJSXElement(props.nodeTemplate, node)) || node.label;

        return <div>{label}</div>;
    };

    const createNodeContent = () => {
        const nodeClassName = classNames(
            'p-organizationchart-node-content',
            {
                'p-organizationchart-selectable-node': props.selectionMode && node.selectable !== false,
                'p-highlight': selected
            },
            node.className
        );
        const label = createNodeLabel();
        const toggler = createToggler();

        const cellProps = mergeProps(
            {
                colSpan: colspan
            },
            props.ptm('cell')
        );

        const nodeProps = mergeProps(
            {
                className: nodeClassName,
                style: node.style,
                onClick: (e) => onNodeClick(e, node)
            },
            getPTOptions('node')
        );

        return (
            <tr>
                <td {...cellProps}>
                    <div {...nodeProps}>
                        {label}
                        {toggler}
                    </div>
                </td>
            </tr>
        );
    };

    const nodeContent = createNodeContent();
    const linesDown = createLinesDown();
    const linesMiddle = createLinesMiddle();
    const childNodes = createChildNodes();

    const tableProps = mergeProps(
        {
            className: 'p-organizationchart-table'
        },
        props.ptm('table')
    );

    return (
        <table {...tableProps}>
            <tbody>
                {nodeContent}
                {linesDown}
                {linesMiddle}
                {childNodes}
            </tbody>
        </table>
    );
});

OrganizationChartNode.displayName = 'OrganizationChartNode';
