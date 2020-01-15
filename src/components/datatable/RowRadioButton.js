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
        let className = classNames('p-radiobutton-box p-component p-radiobutton-relative', {'p-highlight': this.props.selected});
        let iconClassName = classNames('p-radiobutton-icon p-clickable', {'pi pi-circle-on': this.props.selected});

        return <div className="p-radiobutton p-component">
                    <div className="p-hidden-accessible">
                        <input type="radio" />
                    </div>
                    <div className={className} onClick={this.onClick} role="checkbox" aria-checked={this.props.selected}>
                        <span className={iconClassName}></span>
                    </div>
                </div>
    }
}
