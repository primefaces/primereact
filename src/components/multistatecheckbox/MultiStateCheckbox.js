import React from 'react';
import PropTypes from 'prop-types';
import {classNames} from "../utils/ClassNames";
import Option from "./Option";

export const defaultProps = {
    id: null,
    inputId: null,
    value: null,
    name: null,
    style: null,
    className: null,
    disabled: false,
    readOnly: false,
    ariaLabelledBy: null,
    onChange: null,
    children: PropTypes.element,
}

export const propTypes = {
    id: PropTypes.string,
    inputId: PropTypes.string,
    value: PropTypes.bool,
    name: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    ariaLabelledBy: PropTypes.string,
    onChange: PropTypes.func
}

export function MultiStateCheckbox(props) {
    const { value, children, id } = props;
    const { style, className } = props;
    const { inputId, name, ariaLabelledBy, disabled, readOnly } = props;
    const [focused, setFocused] = React.useState(false);
    const input = React.useRef();

    const options = React.useMemo(() => {
        const optionsComponents = Array.isArray(children) ? children : [children]
        const options = optionsComponents
            .map(it => it.props)
            .filter(it => it.eligible === undefined || !!it.eligible)

        if (new Set(options.map(it => it.value)).size !== options.length) {
            console.warn("MultiStateCheckbox contains one or more Options with duplicated values, which are not supported. Expect weird behavior")
        }

        return options;
    }, [children])

    function onFocus() {
        !disabled && setFocused(true)
    }

    function onBlur() {
        setFocused(false)
    }

    function findNext() {
        const current = options.findIndex(it => value === it.value)
        const next = current >= options.length -1 ? 0 : current + 1
        return options[next]
    }

    function onClick(e) {
        input.current?.focus && input.current.focus()
        if (!disabled && !readOnly) {
            const next = findNext()
            if (next && typeof props.onChange === 'function') {
                const value = next.value
                props.onChange({
                    value,
                    originalEvent: e,
                    stopPropagation : () => {},
                    preventDefault : () => {},
                    target: {id, name, value}
                })
            }
        }

        props.onClick && props.onClick(e)
    }

    const currentOption = options.find(option => value === option.value)

    const containerClass = classNames('p-multistatecheckbox p-checkbox p-component', className);
    const boxClass = classNames('p-checkbox-box', currentOption?.boxClassName,{
        'p-highlight': !!currentOption,
        'p-disabled': disabled || readOnly,
        'p-focus': focused
    });

    return (
        <div id={id} className={containerClass} style={style} onClick={onClick}>
            <div className="p-hidden-accessible">
                <input
                    type="checkbox"
                    id={inputId}
                    name={name}
                    ref={input}
                    aria-labelledby={ariaLabelledBy}
                    onFocus={onFocus}
                    onfocusout={onBlur}
                    onBlur={onBlur}
                    disabled={disabled}
                    readOnly={readOnly}
                />
            </div>
            <div className={boxClass} style={currentOption?.boxStyle} role="checkbox" aria-checked={!!currentOption}>
                { currentOption && <Option {...currentOption}/> }
            </div>
        </div>
    )
}

export { Option }
