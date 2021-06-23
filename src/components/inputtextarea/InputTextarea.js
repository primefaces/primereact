import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { tip } from '../tooltip/Tooltip';

class InputTextareaComponent extends Component {

    static defaultProps = {
        autoResize: false,
        tooltip: null,
        tooltipOptions: null,
        onInput: null,
        forwardRef: null
    };

    static propTypes = {
        autoResize: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        onInput: PropTypes.func,
        forwardRef: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onInput = this.onInput.bind(this);

        this.elementRef = createRef(this.props.forwardRef);
    }

    onFocus(e) {
        if (this.props.autoResize) {
            this.resize();
        }

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    onBlur(e) {
        if (this.props.autoResize) {
            this.resize();
        }

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    onKeyUp(e) {
        if (this.props.autoResize) {
            this.resize();
        }

        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    }

    onInput(e) {
        if (this.props.autoResize) {
            this.resize();
        }

        if (!this.props.onChange) {
            if (e.target.value.length > 0)
                DomHandler.addClass(e.target, 'p-filled');
            else
                DomHandler.removeClass(e.target, 'p-filled');
        }

        if (this.props.onInput) {
            this.props.onInput(e);
        }
    }

    resize(initial) {
        const inputEl = this.elementRef && this.elementRef.current;

        if (inputEl && DomHandler.isVisible(inputEl)) {
            if (!this.cachedScrollHeight) {
                this.cachedScrollHeight = inputEl.scrollHeight;
                inputEl.style.overflow = "hidden";
            }

            if (this.cachedScrollHeight !== inputEl.scrollHeight || initial) {
                inputEl.style.height = ''
                inputEl.style.height = inputEl.scrollHeight + 'px';

                if (parseFloat(inputEl.style.height) >= parseFloat(inputEl.style.maxHeight)) {
                    inputEl.style.overflowY = "scroll";
                    inputEl.style.height = inputEl.style.maxHeight;
                }
                else {
                    inputEl.style.overflow = "hidden";
                }

                this.cachedScrollHeight = inputEl.scrollHeight;
            }
        }
    }

    updateForwardRef() {
        let ref = this.props.forwardRef;

        if (ref) {
            if (typeof ref === 'function') {
                ref(this.elementRef.current);
            }
            else {
                ref.current = this.elementRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateForwardRef();

        if (this.props.tooltip) {
            this.renderTooltip();
        }

        if (this.props.autoResize) {
            this.resize(true);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }

        if (this.props.autoResize) {
            this.resize(true);
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
            target: this.elementRef.current,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        const className = classNames('p-inputtextarea p-inputtext p-component', {
            'p-disabled': this.props.disabled,
            'p-filled': (this.props.value != null && this.props.value.toString().length > 0) || (this.props.defaultValue != null && this.props.defaultValue.toString().length > 0),
            'p-inputtextarea-resizable': this.props.autoResize
        }, this.props.className);

        let textareaProps = ObjectUtils.findDiffKeys(this.props, InputTextareaComponent.defaultProps);

        return (
            <textarea ref={this.elementRef} {...textareaProps} className={className}
                onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyUp} onInput={this.onInput}></textarea>
        );
    }
}

export const InputTextarea = React.forwardRef((props, ref) => <InputTextareaComponent forwardRef={ref} {...props} />);
