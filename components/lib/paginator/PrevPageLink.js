import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Button } from '../button/Button';
import { classNames, ObjectUtils } from '../utils/Utils';

export const PrevPageLink = React.memo((props) => {
    const className = classNames('p-paginator-prev p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon pi pi-angle-left';
    const element = (
        <Button type='button' className={className} icon={iconClassName} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('previousPageLabel')}/>
    );

    if (props.template) {
        const defaultOptions = {
            onClick: props.onClick,
            className,
            iconClassName,
            disabled: props.disabled,
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

PrevPageLink.displayName = 'PrevPageLink';
PrevPageLink.defaultProps = {
    __TYPE: 'PrevPageLink',
    disabled: false,
    onClick: null,
    template: null
}
