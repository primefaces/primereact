import React, { useRef, useContext, useState } from 'react'
import { useMergeProps } from '../hooks/Hooks';
import { PrimeReactContext } from '../api/Api';
import { InputOtpBase } from './BaseInputOtp';
import { InputText } from '@/components/lib/inputtext/InputText';
import { ObjectUtils } from '../utils/Utils';

export const InputOtp = React.memo(
    React.forwardRef((inProps, ref) => {
	const elementRef = useRef(ref);
	const mergeProps = useMergeProps();
	const context = useContext(PrimeReactContext);
	const props = InputOtpBase.getProps(inProps, context);
	const { ptm, cx } = InputOtpBase.setMetaData({
		props,
		...props.__parentMetadata,
		context: {
			disabled: props.disabled,		
		}
	});

	const defaultValue = props.value ? props.value?.toString()?.split?.('') : new Array(props.length);
	const [tokens, setTokens] = useState(defaultValue);

	const moveToNextInput = (event) => {
		const nextInput = event.target.nextElementSibling;

		if (!nextInput) return;

		if (nextInput.nodeName === 'INPUT') {
			nextInput.focus();
			nextInput.select();
		}
	}

	const moveToPrevInput = (event) => {
		const prevInput = event.target.previousElementSibling;

		if (!prevInput) return;

		if (prevInput.nodeName === 'INPUT') {
			prevInput.focus();
			prevInput.select();
		}
	}

	const onChange = (event, value) => {
		props?.onChange?.({
			originalEvent: event,
			value: value.join('')
		})
	}

	const updateTokens = (event, index) => {
		const inputValue = event.target.value;
		const newTokens = [...tokens];

		newTokens[index] = inputValue;
		newTokens = newTokens.join('');
		newTokens = newTokens ? newTokens.split('') : new Array(props.length);

		setTokens(newTokens);
		onChange(event, newTokens);
	}

	const onInput = (event,index) => {
		updateTokens(event, index);
		

		if (event.nativeEvent.inputType === 'deleteContentBackward') {
			moveToPrevInput(event);
		} else if (event.nativeEvent.inputType === 'insertText' || event.nativeEvent.inputType === 'deleteContentForward') {
			moveToNextInput(event);
		}
	}

	const onPaste = (event) => {
		let paste = event.clipboardData.getData('text');

		if (paste.length) {
			let pastedCode = paste.substring(0, props.length + 1);

			if (!props.integerOnly || !isNaN(pastedCode)) {
				const newTokens = pastedCode.split('');

				setTokens(newTokens);
				onChange(event, newTokens);
			}
		}
	}

	const onFocus = (event) => {
		event.target.select();
		props?.focus?.(event);
	}

	const onBlur = (event) => {
		props?.blur?.(event);
	}

	const onKeydown = (event) => {
		switch (event.code) {
			case 'ArrowLeft': {
				moveToPrevInput(event);
				event.preventDefault();
				break;
			}

			case 'ArrowRight': {
				moveToNextInput(event);
				event.preventDefault();
				break;
			}

			case 'Backspace': {
				if (event.target.value.length === 0) {
					moveToPrevInput(event);
					event.preventDefault();
				}

				break;
			}

			case 'ArrowUp':

			case 'ArrowDown': {
				event.preventDefault();
				break;
			}

			default: {
				// Prevent non-numeric characters from being entered if integerOnly is true or if the length of the input is greater than the specified length
				if ((props?.integerOnly && !((event.code.startsWith('Digit') || event.code.startsWith('Numpad')) && Number(event.key) >= 0 && Number(event.key) <= 9)) || (tokens.join('').length >= props.length && event.code !== 'Delete')) {
					event.preventDefault();
				}

				break;
			}
		}
	}

	const createInputElements = (remainingInputs) => {
		if (remainingInputs <= 0) {
			return [];
		}

		const inputElementIndex = props.length - remainingInputs;
		const inputElementActions = {
			onInput: (event) => onInput(event, inputElementIndex),
			onKeyDown: onKeydown,
			onFocus,
			onBlur,
			onPaste,
		}
		const inputElementProps = mergeProps(
            {
				id: inputElementIndex,
				key: inputElementIndex,
				value: tokens[inputElementIndex] || '',
				inputMode: props?.integerOnly ? 'numeric' : 'text',
				type: props?.mask ? 'password' : 'text',
				variant: props?.variant,
				readOnly: props?.readOnly,
				disabled: props?.disabled,
				invalid: props?.invalid,
				tabIndex: props?.tabIndex,  
                className: cx('input'),
				...inputElementActions
            },
            ptm('input')
        );		
		const inputElement = props?.inputTemplate ? ObjectUtils.getJSXElement(props?.inputTemplate, {...inputElementActions, props: inputElementProps}) : <InputText {...inputElementProps} />;
		const inputElements = [inputElement, ...createInputElements(remainingInputs - 1)];

		return inputElements;
	}

	const rootElementProps = mergeProps(
		{
			className: cx('root'),
			ref: elementRef
		},
		ptm('root')
	);

    return (
        <div {...rootElementProps}>
            {createInputElements(props.length)}
        </div>
    );
}));
