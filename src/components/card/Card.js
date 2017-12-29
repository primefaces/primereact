import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Card extends Component {

    static defaultProps = {
        id: null,
        header: null,
        footer: null,
        title: null,
        subtitle: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    constructor() {
        super();
        this.state = {};
    }
    renderHeader(){
        return <div className="ui-card-header">
                    {this.props.header}
                </div>;
    }
    renderBody(){
        let title, subtitle, footer, children;

        if(this.props.title) {
            title = <div className="ui-card-title">{this.props.title}</div>;
        }
        if(this.props.subtitle) {
            subtitle = <div className="ui-card-subtitle">{this.props.subtitle}</div>;
        }
        if(this.props.footer) {
            footer = <div className="ui-card-footer"> {this.props.footer}</div>;
        }
        if(this.props.children) {
            children = <div className="ui-card-content"> {this.props.children} </div>;
        }
        return (
            <div className="ui-card-body">
                {title}
                {subtitle}
                {children}
                {footer}
            </div>
        );
    }

    render(){

        let header, body;
        let className = classNames('ui-card ui-widget ui-widget-content ui-corner-all',this.props.className);

        if(this.props.header) {
            header = this.renderHeader();
        }
        body = this.renderBody();

        return(
            <div className={className} style={this.props.style}>
                {header}
                {body}
            </div>
        );
    }
}