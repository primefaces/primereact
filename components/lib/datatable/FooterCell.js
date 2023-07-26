import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { classNames, DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';

export const FooterCell = React.memo((props) => {
    const [styleObjectState, setStyleObjectState] = React.useState({});
    const elementRef = React.useRef(null);
    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProp(props.column, 'pt'), key, {
            props: getColumnProps(),
            parent: props.metaData,
            state: {
                styleObject: styleObjectState
            }
        });
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
                let next = elementRef.current.nextElementSibling;

                if (next) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }

                styleObject['right'] = right + 'px';
            } else {
                let left = 0;
                let prev = elementRef.current.previousElementSibling;

                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }

                styleObject['left'] = left + 'px';
            }

            const isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];

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
    const className = classNames(getColumnProp('footerClassName'), getColumnProp('className'), {
        'p-frozen-column': getColumnProp('frozen'),
        [`p-align-${align}`]: !!align
    });
    const content = ObjectUtils.getJSXElement(getColumnProp('footer'), { props: props.tableProps });
    const footerCellProps = mergeProps(
        {
            style,
            className,
            role: 'cell',
            colSpan,
            rowSpan
        },
        getColumnPTOptions('footerCell'),
        getColumnPTOptions('root')
    );

    return (
        <td ref={elementRef} {...footerCellProps}>
            {content}
        </td>
    );
});

FooterCell.displayName = 'FooterCell';
