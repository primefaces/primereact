import React, { memo, useEffect, useRef, useState } from 'react';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const FooterCell = memo((props) => {
    const [styleObjectState, setStyleObjectState] = useState({});
    const elementRef = useRef(null);

    const getColumnProp = (prop) => {
        return props.column.props[prop];
    }

    const getStyle = () => {
        const footerStyle = getColumnProp('footerStyle');
        const columnStyle = getColumnProp('style');

        return getColumnProp('frozen') ? Object.assign({}, columnStyle, footerStyle, styleObjectState) : Object.assign({}, columnStyle, footerStyle);
    }

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
            }
            else {
                let left = 0;
                let prev = elementRef.current.previousElementSibling;
                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }
                styleObject['left'] = left + 'px';
            }

            setStyleObjectState(styleObject);
        }
    }

    useEffect(() => {
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

    return (
        <td ref={elementRef} style={style} className={className} role="cell" colSpan={colSpan} rowSpan={rowSpan}>
            {content}
        </td>
    )
});
