import React, {Component} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class PickListItem extends Component {
    
    static defaultProps = {
        value: null,
        className: null,
        template: null,
        selected: false,
        onClick: null
    }

    static propsTypes = {
        value: PropTypes.any,
        className: PropTypes.string,
        template: PropTypes.func,
        selected: PropTypes.bool,
        onClick: PropTypes.func
    }
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                value: this.props.value
            })
        }
    }
    
    render() {
        let content = this.props.template ? this.props.template(this.props.value) : this.props.value;
        let className = classNames('ui-picklist-item', this.props.className, {'ui-state-highlight': this.props.selected});
        
        return <li className={className} onClick={this.onClick}>
                  {content}
               </li>;
    }
}