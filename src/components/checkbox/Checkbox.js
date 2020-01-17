import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from "../tooltip/Tooltip";

export class Checkbox extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        value: null,
        name: null,
        checked: false,
        style: null,
        className: null,
        disabled: false,
        required: false,
        readOnly: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
        checked: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        readOnly: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(e) {
        if (!this.props.disabled && !this.props.readOnly && this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    type: 'checkbox',
                    name: this.props.name,
                    id: this.props.id,
                    value: this.props.value,
                    checked: !this.props.checked,
                }
            });

            this.input.checked = !this.props.checked;
            this.input.focus();

            e.preventDefault();
        }
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    componentDidUpdate(prevProps) {
        this.input.checked = this.props.checked;

        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }

    onFocus() {
        this.setState({focused: true});
    }

    onBlur() {
        this.setState({focused: false});
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        let containerClass = classNames('p-checkbox p-component', this.props.className);
        let boxClass = classNames('p-checkbox-box p-component', {'p-highlight': this.props.checked, 'p-disabled': this.props.disabled, 'p-focus': this.state.focused});
        let iconClass = classNames('p-checkbox-icon p-c', {'pi pi-check': this.props.checked});

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick} onContextMenu={this.props.onContextMenu} onMouseDown={this.props.onMouseDown}>
                <div className="p-hidden-accessible">
                    <input type="checkbox" aria-labelledby={this.props.ariaLabelledBy} ref={el => this.input = el} id={this.props.inputId} name={this.props.name} defaultChecked={this.props.checked}
                             onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} readOnly={this.props.readOnly} required={this.props.required}/>
                </div>
                <div className={boxClass} ref={el => this.box = el} role="checkbox" aria-checked={this.props.checked}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}
