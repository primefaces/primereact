import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class RowTogglerButton extends Component {

    static defaultProps = {
        rowData: null,
        onClick: null,
        expanded: false
    }

    static propTypes = {
        rowData: PropTypes.object,
        onClick: PropTypes.func,
        expanded: PropTypes.bool
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
        let iconClassName = classNames('p-row-toggler-icon pi pi-fw p-clickable', {
            'pi-chevron-down': this.props.expanded,
            'pi-chevron-right': !this.props.expanded
        });

        return  <button type="button" onClick={this.onClick} className="p-row-toggler p-link">
                    <span className={iconClassName}></span>
                </button>
    }
}
