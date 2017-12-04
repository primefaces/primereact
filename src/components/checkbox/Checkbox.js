import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Checkbox extends Component {

    static defaultProps = {
        id: null,
        value: null,
        name: null,
        onChange: null,
        checked: false,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
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
        let containerClass = classNames('ui-chkbox ui-widget', this.props.className);
        let boxClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active':this.props.checked});
        let iconClass = classNames('ui-chkbox-icon ui-c', {'fa fa-check': this.props.checked});
        
        return (
            <div id={this.props.id} className={containerClass} onContextMenu={this.props.onContextMenu} onMouseDown={this.props.onMouseDown}>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox" name={this.props.name} />
                </div>
                <div className={boxClass} onClick={this.onClick}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}