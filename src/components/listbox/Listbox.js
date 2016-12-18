import React, {Component} from 'react';
import classNames from 'classnames';

export class Listbox extends Component {
    
    onOptionClick(event, option, index) {
        this.props.onChange({
            originalEvent: event,
            value: option.value,
            index: index
        });
        event.preventDefault();
    }

    render() {
        var styleClass = classNames('ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        return (
            <div className={styleClass}>
                <ul className="ui-listbox-list">
                    {this.props.options && this.props.options.map((option, index) => {
                        return <li className="ui-listbox-item ui-corner-all" key={option.value}
                                onClick={(event) => this.onOptionClick(event, option, index)}>
                            {option.label}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

Listbox.defaultProps = {
    options: null,
    onChange: null
};

Listbox.propTypes = {
    options: React.PropTypes.array,
    onChange: React.PropTypes.func
};