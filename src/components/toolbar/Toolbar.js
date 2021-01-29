import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class Toolbar extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        left: null,
        right: null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        left: PropTypes.any,
        right: PropTypes.any
    };

    render() {
        const toolbarClass = classNames('p-toolbar p-component', this.props.className);
        const left = ObjectUtils.getJSXElement(this.props.left, this.props);
        const right = ObjectUtils.getJSXElement(this.props.right, this.props);

        return (
            <div id={this.props.id} className={toolbarClass} style={this.props.style} role="toolbar">
                <div className="p-toolbar-group-left">
                    {left}
                </div>
                <div className="p-toolbar-group-right">
                    {right}
                </div>
            </div>
        );
    }
}
