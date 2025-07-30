import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const FooterCell = React.memo((props) => {
    const [styleObjectState, setStyleObjectState] = React.useState({});
    const elementRef = React.useRef(null);
    const mergeProps = useMergeProps();
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps();
        const columnMetaData = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                styleObject: styleObjectState
            },
            context: {
                index: props.index,
                size: props.metaData.props.size,
                showGridlines: props.metaData.props.showGridlines
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
    };

    const getColumnProp = (name) => ColumnBase.getCProp(props.column, name);

    const getStyle = () => {
        const footerStyle = getColumnProp('footerStyle');
        const columnStyle = getColumnProp('style');

        return getColumnProp('frozen') ? Object.assign({}, columnStyle, footerStyle, styleObjectState) : Object.assign({}, columnStyle, footerStyle);
    };

    const updateStickyPosition = () => {
        if (getColumnProp('frozen')) {
            let styleObject = { ...styleObjectState };
            let align = getColumnProp('alignFrozen');

            if (align === 'right') {
                let right = 0;
                let next = elementRef.current && elementRef.current.nextElementSibling;

                if (next && next.classList.contains('p-frozen-column')) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }

                styleObject.right = right + 'px';
            } else {
                let left = 0;
                let prev = elementRef.current && elementRef.current.previousElementSibling;

                while (prev) {
                    if (prev && prev.classList.contains('p-frozen-column')) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                        elementRef.current.style.left = left + 'px';
                        break;
                    }

                    prev = prev.previousElementSibling;
                }

                styleObject.left = left + 'px';
            }

            const isSameStyle = styleObjectState.left === styleObject.left && styleObjectState.right === styleObject.right;

            !isSameStyle && setStyleObjectState(styleObject);
        }
    };

    React.useEffect(() => {
        if (getColumnProp('frozen')) {
            updateStickyPosition();
        }
    });

    const style = getStyle();
    const align = getColumnProp('align');
    const colSpan = getColumnProp('colSpan');
    const rowSpan = getColumnProp('rowSpan');
    const content = ObjectUtils.getJSXElement(getColumnProp('footer'), { props: props.tableProps });
    const footerCellProps = mergeProps(
        {
            style,
            className: classNames(getColumnProp('footerClassName'), getColumnProp('className'), cx('footerCell', { getColumnProp, align })),
            role: 'cell',
            colSpan,
            rowSpan
        },
        getColumnPTOptions('root'),
        getColumnPTOptions('footerCell')
    );

    return (
        <td ref={elementRef} {...footerCellProps}>
            {content}
        </td>
    );
});

FooterCell.displayName = 'FooterCell';
