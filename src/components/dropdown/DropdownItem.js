import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class DropdownItem extends Component {
    
    static defaultProps = {
        option: null,
        label: null,
        template: null,
        selected: false,
        onClick: null
    };

    static propTypes = {
        option: PropTypes.object,
        label: PropTypes.any,
        template: PropTypes.func,
        selected: PropTypes.bool,
        onClick: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            })
        }
    }
    
    render() {
        let className = classNames('ui-dropdown-item ui-corner-all', {
            'ui-state-highlight': this.props.selected,
            'ui-dropdown-item-empty': (!this.props.label || this.props.label.length === 0)
        });
        let content = this.props.template ? this.props.template(this.props.option) : this.props.label;
        
        return (
            <li className={className} onClick={this.onClick}>
                {content}
            </li>
        );
    }
}

