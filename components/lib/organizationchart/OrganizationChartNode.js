import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronUpIcon } from '../icons/chevronup';
import { IconUtils, ObjectUtils } from '../utils/Utils';

const chunkArray = (array, size) => {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
};

const MAX_CHILDREN_PER_ROW = 10;

export const OrganizationChartNode = React.memo((props) => {
    const mergeProps = useMergeProps();
    const node = props.node;
    const [expandedState, setExpandedState] = React.useState(node.expanded);
    const leaf = node.leaf === false ? false : !(node.children && node.children.length);
    const selected = props.isSelected(node);
    const visibility = !leaf && expandedState ? 'inherit' : 'hidden';
    const { ptm, cx, sx } = props;

    const _ptm = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const getPTOptions = (key) => {
        return _ptm(key, {
            state: {
                expanded: expandedState
            },
            context: {
                selected: props.isSelected(node)
            }
        });
    };

    const getNodePTOptions = (lineTop, key) => {
        return _ptm(key, {
            context: {
                lineTop
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

    const onKeyDown = (event, node) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
            toggleNode(event, node);
            event.preventDefault();
        }
    };

    const createChildNodes = (row) => {
        if (!node.children || node.expanded === false) {
            return null;
        }

        const rows = chunkArray(node.children, MAX_CHILDREN_PER_ROW);

        return rows.map((row, rowIndex) => {
            const colspan = row.length * 2;

            const nodesProps = mergeProps(
                {
                    className: cx('nodes'),
                    style: { visibility }
                },
                _ptm('nodes')
            );

            const nodeCellProps = mergeProps(
                {
                    colSpan: '2'
                },
                _ptm('nodeCell')
            );

            return (
                <tr {...nodesProps} key={rowIndex}>
                    {row.map((child, index) => (
                        <td key={index} {...nodeCellProps}>
                            <OrganizationChartNode
                                node={child}
                                nodeTemplate={props.nodeTemplate}
                                selectionMode={props.selectionMode}
                                onNodeClick={props.onNodeClick}
                                isSelected={props.isSelected}
                                togglerIcon={props.togglerIcon}
                                ptm={ptm}
                                cx={cx}
                                sx={sx}
                            />
                        </td>
                    ))}
                </tr>
            );
        });
    };

    const createLinesMiddle = (row) => {
        if (!node.children || node.expanded === false) {
            return null;
        }

        const rows = chunkArray(node.children, MAX_CHILDREN_PER_ROW);

        return rows.map((row, rowIndex) => {
            const nodeChildLength = row.length;

            const linesProps = mergeProps(
                {
                    className: cx('lines'),
                    style: { visibility }
                },
                _ptm('lines')
            );

            return (
                <tr {...linesProps} key={rowIndex}>
                    {row.map((_, index) => {
                        const lineLeftProps = mergeProps(
                            {
                                className: cx('lineLeft', { index })
                            },
                            getNodePTOptions(index !== 0, 'lineLeft')
                        );

                        const lineRightProps = mergeProps(
                            {
                                className: cx('lineRight', { index, nodeChildLength })
                            },
                            getNodePTOptions(index !== nodeChildLength - 1, 'lineRight')
                        );

                        return (
                            <React.Fragment key={index}>
                                <td {...lineLeftProps}>&nbsp;</td>
                                <td {...lineRightProps}>&nbsp;</td>
                            </React.Fragment>
                        );
                    })}
                </tr>
            );
        });
    };

    const createLinesDown = (row) => {
        if (!node.children || node.expanded === false) {
            return null;
        }

        const rows = chunkArray(node.children, MAX_CHILDREN_PER_ROW);

        return rows.map((row, rowIndex) => {
            const colspan = row.length * 2;

            const linesProps = mergeProps(
                {
                    className: cx('lines'),
                    style: { visibility }
                },
                _ptm('lines')
            );

            const lineCellProps = mergeProps(
                {
                    colSpan: colspan
                },
                _ptm('lineCell')
            );

            const lineDownProps = mergeProps(
                {
                    className: cx('lineDown')
                },
                _ptm('lineDown')
            );

            return (
                <tr {...linesProps} key={rowIndex}>
                    <td {...lineCellProps}>
                        <div {...lineDownProps} />
                    </td>
                </tr>
            );
        });
    };

    const createToggler = () => {
        if (!leaf) {
            const nodeTogglerIconProps = mergeProps(
                {
                    className: cx('nodeTogglerIcon')
                },
                _ptm('nodeTogglerIcon')
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
                    className: cx('nodeToggler'),
                    tabIndex: 0,
                    onKeyDown: (e) => onKeyDown(e, node),
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
        const label = createNodeLabel();
        const toggler = createToggler();

        const cellProps = mergeProps(
            {
                colSpan: node.children && node.children.length ? Math.min(node.children.length, MAX_CHILDREN_PER_ROW) * 2 : 2
            },
            _ptm('cell')
        );

        const nodeProps = mergeProps(
            {
                className: cx('node', { selected, node, nodeProps: props }),
                style: node.style,
                onClick: (e) => onNodeClick(e, node)
            },
            getPTOptions('node')
        );

        const rowProps = mergeProps(_ptm('row'));

        return (
            <tr {...rowProps}>
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

    const createChildrenSection = () => {
        if (!node.children || node.expanded === false) {
            return null;
        }

        const rows = chunkArray(node.children, MAX_CHILDREN_PER_ROW);

        return rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
                {createLinesDown(row)}
                {createLinesMiddle(row)}
                {createChildNodes(row)}
            </React.Fragment>
        ));
    };

    const tableProps = mergeProps(
        {
            className: cx('table')
        },
        _ptm('table')
    );

    return (
        <table {...tableProps}>
            <tbody>
                {nodeContent}
                {createChildrenSection()}
            </tbody>
        </table>
    );
});

OrganizationChartNode.displayName = 'OrganizationChartNode';
