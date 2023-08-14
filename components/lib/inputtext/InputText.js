import * as React from 'react';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, classNames, mergeProps } from '../utils/Utils';
import { InputTextBase } from './InputTextBase';
import { PrimeReactContext } from '../api/Api';

export const InputText = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = InputTextBase.getProps(inProps, context);
        const { ptm } = InputTextBase.setMetaData({
            props
        });
        const elementRef = React.useRef(ref);

        const onKeyDown = (event) => {
            props.onKeyDown && props.onKeyDown(event);

            if (props.keyfilter) {
                KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
            }
        };

        const onBeforeInput = (event) => {
            props.onBeforeInput && props.onBeforeInput(event);

            if (props.keyfilter) {
                KeyFilter.onBeforeInput(event, props.keyfilter, props.validateOnly);
            }
        };

        const onInput = (event) => {
            const target = event.target;
            let validatePattern = true;

            if (props.keyfilter && props.validateOnly) {
                validatePattern = KeyFilter.validate(event, props.keyfilter);
            }

            props.onInput && props.onInput(event, validatePattern);

            // for uncontrolled changes
            ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, 'p-filled') : DomHandler.removeClass(target, 'p-filled');
        };

        const onPaste = (event) => {
            props.onPaste && props.onPaste(event);

            if (props.keyfilter) {
                KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
            }
        };

        React.useEffect(() => {
            ObjectUtils.combinedRefs(elementRef, ref);
        }, [elementRef, ref]);

        const isFilled = React.useMemo(() => ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue), [props.value, props.defaultValue]);
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const className = classNames(
            'p-inputtext p-component',
            {
                'p-disabled': props.disabled,
                'p-filled': isFilled
            },
            props.className
        );

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className,
                onBeforeInput: onBeforeInput,
                onInput: onInput,
                onKeyDown: onKeyDown,
                onPaste: onPaste
            },
            InputTextBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <input {...rootProps} />
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

InputText.displayName = 'InputText';
