import * as React from 'react';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronUpIcon } from '../icons/chevronup';
import { PrimeReactContext } from '../api/Api';
import { IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';

export const OrganizationChartNode = React.memo((props) => {
    const node = props.node;
    const [expandedState, setExpandedState] = React.useState(node.expanded);
    const leaf = node.leaf === false ? false : !(node.children && node.children.length);
    const colspan = node.children && node.children.length ? node.children.length * 2 : null;
    const selected = props.isSelected(node);
    const visibility = !leaf && expandedState ? 'inherit' : 'hidden';
    const { ptm, cx, sx } = props;
    const context = React.useContext(PrimeReactContext);

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

    const createChildNodes = () => {
        const nodesProps = mergeProps(
            [
                {
                    className: cx('nodes'),
                    style: { visibility }
                },
                _ptm('nodes')
            ],
            { useTailwind: context.useTailwind }
        );
        const nodeCellProps = mergeProps(
            [
                {
                    colSpan: '2'
                },
                _ptm('nodeCell')
            ],
            { useTailwind: context.useTailwind }
        );

        return (
            <tr {...nodesProps}>
                {node.children &&
                    node.children.map((child, index) => {
                        return (
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
                        );
                    })}
            </tr>
        );
    };

    const createLinesMiddle = () => {
        const nodeChildLength = node.children && node.children.length;
        const linesProps = mergeProps(
            [
                {
                    className: cx('lines'),
                    style: { visibility }
                },
                _ptm('lines')
            ],
            { useTailwind: context.useTailwind }
        );
        const lineCellProps = mergeProps(
            [
                {
                    colSpan: colspan
                },
                _ptm('lineCell')
            ],
            { useTailwind: context.useTailwind }
        );
        const lineDownProps = mergeProps(
            [
                {
                    className: cx('lineDown')
                },
                _ptm('lineDown')
            ],
            { useTailwind: context.useTailwind }
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
                        const lineLeftProps = mergeProps(
                            [
                                {
                                    className: cx('lineLeft', { index })
                                },
                                getNodePTOptions(index !== 0, 'lineLeft')
                            ],
                            { useTailwind: context.useTailwind }
                        );
                        const lineRightProps = mergeProps(
                            [
                                {
                                    className: cx('lineRight', { index, nodeChildLength })
                                },
                                getNodePTOptions(index !== nodeChildLength - 1, 'lineRight')
                            ],
                            { useTailwind: context.useTailwind }
                        );

                        return [
                            <td key={index + '_lineleft'} {...lineLeftProps}>
                                &nbsp;
                            </td>,
                            <td key={index + '_lineright'} {...lineRightProps}>
                                &nbsp;
                            </td>
                        ];
                    })}
            </tr>
        );
    };

    const createLinesDown = () => {
        const linesProps = mergeProps(
            [
                {
                    className: cx('lines'),
                    style: { visibility }
                },
                _ptm('lines')
            ],
            { useTailwind: context.useTailwind }
        );

        const lineCellProps = mergeProps(
            [
                {
                    colSpan: colspan
                },
                _ptm('lineCell')
            ],
            { useTailwind: context.useTailwind }
        );

        const lineDownProps = mergeProps(
            [
                {
                    className: cx('lineDown')
                },
                _ptm('lineDown')
            ],
            { useTailwind: context.useTailwind }
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
            const nodeTogglerIconProps = mergeProps(
                [
                    {
                        className: cx('nodeTogglerIcon')
                    },
                    _ptm('nodeTogglerIcon')
                ],
                { useTailwind: context.useTailwind }
            );

            let icon;

            if (expandedState) {
                icon = props.togglerIcon || <ChevronDownIcon {...nodeTogglerIconProps} />;
            } else {
                icon = props.togglerIcon || <ChevronUpIcon {...nodeTogglerIconProps} />;
            }

            const togglerIcon = IconUtils.getJSXIcon(icon, { ...nodeTogglerIconProps }, { props });

            const nodeTogglerProps = mergeProps(
                [
                    {
                        className: cx('nodeToggler'),
                        onClick: (e) => toggleNode(e, node),
                        href: '#'
                    },
                    getPTOptions('nodeToggler')
                ],
                { useTailwind: context.useTailwind }
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
            [
                {
                    colSpan: colspan
                },
                _ptm('cell')
            ],
            { useTailwind: context.useTailwind }
        );

        const nodeProps = mergeProps(
            [
                {
                    className: cx('node', { selected, node, nodeProps: props }),
                    style: node.style,
                    onClick: (e) => onNodeClick(e, node)
                },
                getPTOptions('node')
            ],
            { useTailwind: context.useTailwind }
        );

        const rowProps = mergeProps([_ptm('row')], { useTailwind: context.useTailwind });

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
    const linesDown = createLinesDown();
    const linesMiddle = createLinesMiddle();
    const childNodes = createChildNodes();

    const tableProps = mergeProps(
        [
            {
                className: cx('table')
            },
            _ptm('table')
        ],
        { useTailwind: context.useTailwind }
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
