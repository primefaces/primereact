import React, { Component } from 'react';
import classNames from 'classnames';

export class SelectButton extends Component {

    static defaultProps = {
        activeIndex: null,
        options: null,
        tabindex: null,
        multiple: null,
        disabled: null,
        style: null,
        className: null,
        onChange: null
    };

    static propTypes = {
        activeIndex: React.PropTypes.any,
        options: React.PropTypes.array,
        tabindex: React.PropTypes.number,
        multiple: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        onChange: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(e, option, i) {
        var selected = this.isSelected(i);

        if (this.props.multiple) {
            var indexes = this.state.activeIndex||[];
            if(selected)
                indexes = indexes.filter(index => index !== i);
            else
                indexes.push(i);

            this.setState({activeIndex: indexes});
        }
        else {
            if(selected)
                this.setState({activeIndex: null});
            else
                this.setState({activeIndex: i});
        }
        
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: option.value,
                index: i
            });
            event.preventDefault();
        }
    }

    isSelected(i) {
        return this.props.multiple ? this.state.activeIndex && this.state.activeIndex.includes(i) : this.state.activeIndex === i;
    }

    render() {
        var styleClass = classNames('ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-3', this.props.className);

        return (
            <div>
                <div className={styleClass} style={this.props.style}>
                    {this.props.options.map((option, index) => {
                        var selected = this.isSelected(index);
                        var innerStyleClass = classNames('ui-button ui-widget ui-state-default ui-button-text-only', {
                            'ui-state-active': selected,
                            'ui-state-disabled': this.props.disabled
                        });
                        var buttonset = <div className={innerStyleClass} key={option.label} onClick={() => this.onItemClick(event, option, index)}>
                            <span className="ui-button-text ui-c">{option.label}</span>
                        </div>;
                        return buttonset;
                    })}
                </div>
            </div>
        );
    }
}