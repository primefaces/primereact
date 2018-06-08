import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class RowRadioButton extends Component {

    static defaultProps = {
        rowData: null,
        onClick: null,
        selected: false
    }

    static propTypes = {
        rowData: PropTypes.object,
        onClick: PropTypes.func,
        selected: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData
            })
        }
    }
    
    render() {
        let className = classNames('ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default', {'ui-state-active': this.props.selected});
        let iconClassName = classNames('ui-radiobutton-icon ui-clickable', {'pi pi-circle-on': this.props.selected});

        return <div className="ui-radiobutton ui-widget">
                    <div className="ui-helper-hidden-accessible">
                        <input type="radio" />
                    </div>
                    <div className={className} onClick={this.onClick}>
                        <span className={iconClassName}></span>
                    </div>
                </div>
    }
}