import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KeyFilter from "../keyfilter/KeyFilter";
import Tooltip from "../tooltip/Tooltip";
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';

export class InputText extends Component {

    static defaultProps = {
        onInput: null,
        onKeyPress: null,
        keyfilter: null,
        validateOnly: false,
        tooltip: null,
        tooltipOptions: null
    };

    static propTypes = {
        onInput: PropTypes.func,
        onKeyPress: PropTypes.func,
        keyfilter: PropTypes.any,
        validateOnly: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(event) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(event);
        }

        if (this.props.keyfilter) {
            KeyFilter.onKeyPress(event, this.props.keyfilter, this.props.validateOnly)
        }
    }

    onInput(event) {
        let validatePattern = true;
        if (this.props.keyfilter && this.props.validateOnly) {
            validatePattern = KeyFilter.validate(event, this.props.keyfilter);
        }

        if (this.props.onInput) {
            this.props.onInput(event, validatePattern);
        }

        if (!this.props.onChange) {
            if (event.target.value.length > 0)
                DomHandler.addClass(event.target, 'p-filled');
            else
                DomHandler.removeClass(event.target, 'p-filled');
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
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        const className = classNames('p-inputtext p-component', this.props.className, {
            'p-disabled': this.props.disabled,
            'p-filled': (this.props.value != null && this.props.value.toString().length > 0) || (this.props.defaultValue != null && this.props.defaultValue.toString().length > 0)
        });

        let inputProps = ObjectUtils.findDiffKeys(this.props, InputText.defaultProps);

        return <input ref={(el) => this.element = el} {...inputProps} className={className} onInput={this.onInput} onKeyPress={this.onKeyPress}/>;
    }
}