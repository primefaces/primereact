import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenubarSub} from './MenubarSub';

export class Menubar extends Component {

    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
    };

    renderCustomContent() {
        if (this.props.children) {
            return (
                <div className="p-menubar-custom">
                    {this.props.children}
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('p-menubar p-component', this.props.className);
        const customContent = this.renderCustomContent();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                <MenubarSub model={this.props.model} root={true} />
                {customContent}
            </div>
        );
    }
}