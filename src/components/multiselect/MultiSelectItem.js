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
        let className = classNames('ui-multiselect-item ui-corner-all', {'ui-state-highlight': this.props.selected});
        let checkboxClassName = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active': this.props.selected});
        let checkboxIcon = classNames('ui-chkbox-icon ui-c', {'pi pi-check': this.props.selected});
        let content = this.props.template ? this.props.template(this.props.option) : this.props.label;
        
        return (
            <li className={className} onClick={this.onClick}>
                <div className="ui-chkbox ui-widget">
                    <div className="ui-helper-hidden-accessible">
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