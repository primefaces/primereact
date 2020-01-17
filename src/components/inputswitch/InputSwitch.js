import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Tooltip from "../tooltip/Tooltip";
import ObjectUtils from '../utils/ObjectUtils';

export class InputSwitch extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        inputId: null,
        name: null,
        checked: false,
        disabled: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onFocus: null,
        onBlur: null
    }

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        inputId: PropTypes.string,
        name: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if (this.props.disabled) {
            return;
        }

        this.toggle(event);
        this.input.focus();
    }

    toggle(event) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: !this.props.checked,
                }
            });
        }
    }

    onFocus(event) {
        this.setState({focused: true});

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onBlur(event) {
        this.setState({focused: false});

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onClick(event);
        }
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
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
        this.tooltip = new Tooltip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        const className = classNames('p-inputswitch p-component', this.props.className, {
            'p-inputswitch-checked': this.props.checked,
            'p-disabled': this.props.disabled,
            'p-inputswitch-focus': this.state.focused
        });

        let inputSwitchProps = ObjectUtils.findDiffKeys(this.props, InputSwitch.defaultProps);

        return (
            <div ref={el => this.container = el} id={this.props.id} className={className} style={this.props.style} onClick={this.onClick}
                role="checkbox" aria-checked={this.props.checked} {...inputSwitchProps}>
                <div className="p-hidden-accessible">
                    <input ref={el => this.input = el} type="checkbox" id={this.props.inputId} name={this.props.name} checked={this.props.checked} onChange={this.toggle}
                        onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} disabled={this.props.disabled}  role="switch" aria-checked={this.props.checked}
                        aria-labelledby={this.props.ariaLabelledBy}/>
                </div>
                <span className="p-inputswitch-slider"></span>
            </div>
        );
    }

}
