import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';

export class TriStateCheckbox extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        value: null,
        name: null,
        style: null,
        className: null,
        disabled: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.bool,
        name: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onClick(event) {
        if (!this.props.disabled) {
            this.toggle(event);
            this.inputEL.focus();
        }
    }

    toggle(event) {
        let newValue;
        if (this.props.value === null || this.props.value === undefined)
            newValue = true;
        else if (this.props.value === true)
            newValue = false;
        else if (this.props.value === false)
            newValue = null;

        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: newValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: newValue
                }
            })
        }
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    componentDidMount() {
        if (this.props.tooltip && !this.props.disabled) {
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
        let containerClass = classNames('p-tristatecheckbox p-checkbox p-component', this.props.className);
        let boxClass = classNames('p-checkbox-box', {
            'p-highlight': (this.props.value || !this.props.value) && this.props.value !== null,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });
        let iconClass = classNames('p-checkbox-icon p-c', {
            'pi pi-check': this.props.value === true,
            'pi pi-times': this.props.value === false
        });

        return (
            <div ref={el => this.element = el} id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick}>
                <div className="p-hidden-accessible">
                    <input ref={(el) => this.inputEL = el} type="checkbox" aria-labelledby={this.props.ariaLabelledBy} id={this.props.inputId} name={this.props.name}
                           onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} />
                </div>
                <div className={boxClass} ref={el => this.box = el} role="checkbox" aria-checked={this.props.value === true}>
                    <span className={iconClass}></span>
                </div>
            </div>
        );
    }
}
