import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import { DropdownItem } from './DropdownItem';

export class DropdownPanel extends Component {

    static defaultProps = {
        options: null,
        optionLabel: null,
        filter: false,
        filterPlaceholder: null,
        panelStyle: null,
        panelClassName: null,
        itemTemplate: null,
        scrollHeight: null,
        selectedOption: null,
        onOptionClick: null,
        onAfterFilter: null,
        onClick: null
    };

    static propTypes = {
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        filter: PropTypes.bool,
        filterPlaceholder: PropTypes.string,
        panelStyle: PropTypes.object,
        panelClassName: PropTypes.string,
        itemTemplate: PropTypes.func,
        scrollHeight: PropTypes.string,
        selectedOption: PropTypes.object,
        onOptionClick: PropTypes.func,
        onAfterFilter: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };

        this.onFilterInputChange = this.onFilterInputChange.bind(this);
        this.onFilterInputKeyDown = this.onFilterInputKeyDown.bind(this);
    }
    
    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option.label;
    }

    filter(option) {
        let filterValue = this.state.filter.trim().toLowerCase();
        let optionLabel = this.getOptionLabel(option);

        return optionLabel.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    }

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    onFilterInputChange(event) {
        this.setState({ filter: event.target.value });
        this.filterChanged = true;
    }

    onFilterInputKeyDown(event) {
        if (event.which === 13) {
            event.preventDefault();
        }
    }

    componentDidUpdate() {
        if (this.filterChanged) {
            this.props.onAfterFilter();
            this.filterChanged = false;
        }
    }

    renderFilter() {
        if (this.props.filter) {
            return <div className="ui-dropdown-filter-container">
                <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all" placeholder={this.props.filterPlaceholder}
                    onKeyDown={this.onFilterInputKeyDown} onChange={this.onFilterInputChange} />
                <span className="fa fa-search"></span>
            </div>;
        }
        else {
            return null;
        }
    }

    renderElement() {
        let className = classNames('ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow', this.props.panelClassName);
        let options = this.props.options;
        let filter = this.renderFilter();

        if (this.hasFilter() && options) {
            options = options.filter((option) => {
                return this.filter(option);
            });
        }

        let items = options && options.map((option, index) => {
            let optionLabel = this.getOptionLabel(option);

            return (
                <DropdownItem key={optionLabel} label={optionLabel} option={option} template={this.props.itemTemplate}
                            selected={this.props.selectedOption === option} onClick={this.props.onOptionClick} />
            );
        });

        return (
            <div ref={(el) => this.element = el} className={className} style={this.props.panelStyle} onClick={this.props.onClick}>
                {filter}
                <div className="ui-dropdown-items-wrapper" style={{ maxHeight: this.props.scrollHeight || 'auto' }}>
                    <ul className="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                        {items}
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
    }
}