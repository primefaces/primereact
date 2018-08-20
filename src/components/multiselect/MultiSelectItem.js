import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class MultiSelectItem extends Component {
    
    static defaultProps = {
        option: null,
        label: null,
        selected: false,
        template: null,
        onClick: null
    };

    static propTypes = {
        option: PropTypes.object,
        label: PropTypes.string,
        selected: PropTypes.bool,
        template: PropTypes.func,
        onClick: PropTypes.func
    };
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
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
    
    render() {
        let className = classNames('p-multiselect-item', {'p-highlight': this.props.selected});
        let checkboxClassName = classNames('p-checkbox-box p-component', {'p-highlight': this.props.selected});
        let checkboxIcon = classNames('p-checkbox-icon p-c', {'pi pi-check': this.props.selected});
        let content = this.props.template ? this.props.template(this.props.option) : this.props.label;
        
        return (
            <li className={className} onClick={this.onClick}>
                <div className="p-checkbox p-component">
                    <div className="p-hidden-accessible">
                        <input readOnly="readonly" type="checkbox" />
                    </div>
                    <div className={checkboxClassName}>
                        <span className={checkboxIcon}></span>
                    </div>
                </div>
                <label>{content}</label>
            </li>
        );
    }

}