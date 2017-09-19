import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Checkbox extends Component {

    static defaultProps = {
        id: null,
        label: null,
        value: null,
        onChange: null,
        checked: false,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
        checked: PropTypes.bool,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked
            });
        }
    }

    render() {
        var boxClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active':this.props.checked}),
        iconClass = classNames('ui-chkbox-icon ui-c', {'fa fa-check': this.props.checked});
        
        return (
            <div id={this.props.id} className={classNames('ui-chkbox-container', this.props.className)} onContextMenu={this.props.onContextMenu}
                 onMouseDown={this.props.onMouseDown}>
                <div className='ui-chkbox ui-widget'>
                    <div className="ui-helper-hidden-accessible">
                        <input type="checkbox" />
                    </div>
                    <div className={boxClass} onClick={this.onClick}>
                       <span className={iconClass}></span>
                    </div>
                </div>
                {this.props.label && <label className="ui-chkbox-label" onClick={this.onClick}>{this.props.label}</label>}
            </div>
        )
    }
}