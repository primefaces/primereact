import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ListBoxItem extends Component {
    
    static defaultProps = {
        option: null,
        label: null,
        selected: false,
        onClick: null,
        onTouchEnd: null,
        template: null
    }
    
    static propTypes = {
        option: PropTypes.any,
        label: PropTypes.string,
        selected: PropTypes.bool,
        onClick: PropTypes.func,
        onTouchEnd: PropTypes.func,
        template: PropTypes.func
    }
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }
    
    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            });
        }
        
        event.preventDefault();
    }
    
    onTouchEnd(event) {
        if(this.props.onTouchEnd) {
            this.props.onTouchEnd({
                originalEvent: event,
                option: this.props.option
            });
        }
    }
    
    render() {
        let className = classNames('ui-listbox-item ui-corner-all', {'ui-state-highlight': this.props.selected});
        let content = this.props.template ? this.props.template(this.props.option) : this.props.label;
        
        return (
               <li className={className} onClick={this.onClick} onTouchEnd={this.onTouchEnd}>
                   {content}
               </li>
        );
    }
}