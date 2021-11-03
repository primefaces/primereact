import React, { Component } from 'react';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export class FooterCell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleObject: {}
        };
    }

    getColumnProp(prop) {
        return this.props.column.props[prop];
    }

    getStyle() {
        const footerStyle = this.getColumnProp('footerStyle');
        const columnStyle = this.getColumnProp('style');

        return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, footerStyle, this.state.styleObject) : Object.assign({}, columnStyle, footerStyle);
    }

    updateStickyPosition() {
        if (this.getColumnProp('frozen')) {
            let styleObject = { ...this.state.styleObject };
            let align = this.getColumnProp('alignFrozen');
            if (align === 'right') {
                let right = 0;
                let next = this.el.nextElementSibling;
                if (next) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }
                styleObject['right'] = right + 'px';
            }
            else {
                let left = 0;
                let prev = this.el.previousElementSibling;
                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }
                styleObject['left'] = left + 'px';
            }

            this.setState({ styleObject });
        }
    }

    componentDidMount() {
        if (this.getColumnProp('frozen')) {
            this.updateStickyPosition();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.getColumnProp('frozen')) {
            this.updateStickyPosition();
        }
    }

    render() {
        const style = this.getStyle();
        const className = classNames(this.getColumnProp('footerClassName'), this.getColumnProp('className'), {
            'p-frozen-column': this.getColumnProp('frozen')
        });
        const colSpan = this.getColumnProp('colSpan');
        const rowSpan = this.getColumnProp('rowSpan');

        let content = ObjectUtils.getJSXElement(this.getColumnProp('footer'), { props: this.props.tableProps });

        return (
            <td ref={el => this.el = el} style={style} className={className} role="cell" colSpan={colSpan} rowSpan={rowSpan}>
                {content}
            </td>
        )
    }
}
