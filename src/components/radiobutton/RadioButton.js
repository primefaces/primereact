import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';

export class RadioButton extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        name: null,
        value: null,
        checked: false,
        style: null,
        className: null,
        disabled: false,
        required: false,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.any,
        checked: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        tabIndex: PropTypes.number,
        onChange: PropTypes.func,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {};

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    select(e) {
        this.input.checked = true;
        this.onClick(e);
    }

    onClick(e) {
        if(!this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value:  this.props.value,
                    checked: !this.props.checked
                }
            });

            this.input.checked = !this.props.checked;
            this.input.focus();
        }
    }

    onFocus() {
        this.setState({focused: true});
    }

    onBlur() {
        this.setState({focused: false});
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        if (this.input) {
            this.input.checked = this.props.checked;
        }

        let containerClass = classNames('p-radiobutton p-component', {
            'p-radiobutton-checked': this.props.checked,
            'p-radiobutton-disabled': this.props.disabled,
            'p-radiobutton-focused': this.state.focused
        }, this.props.className);
        let boxClass = classNames('p-radiobutton-box', {
            'p-highlight': this.props.checked,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick}>
                <div className="p-hidden-accessible">
                    <input id={this.props.inputId} ref={(el) => this.input = el} type="radio" aria-labelledby={this.props.ariaLabelledBy} name={this.props.name} defaultChecked={this.props.checked}
                        onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} required={this.props.required} tabIndex={this.props.tabIndex}/>
                </div>
                <div className={boxClass} ref={(el) => { this.box = el; }} role="radio" aria-checked={this.props.checked}>
                    <div className="p-radiobutton-icon"></div>
                </div>
            </div>
        )
    }
}
