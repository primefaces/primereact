import React from 'react';
import { CodeHighlight } from '../common/codehighlight';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Used to create custom menuitem elements.</p>
            </DocSectionText>
            <CodeHighlight lang="js">
                {`
const items =
[
    {
        label: 'New',
        template: (item, options) => {
            return (
                /* custom element */
                <a className={options.className} target={item.target} onClick={options.onClick}>
                    <span className={classNames(options.iconClassName, 'pi pi-home')}></span>;
                    <span className={options.labelClassName}>{item.label}</span>;
                </a>
            );
        }
    }
];

`}
            </CodeHighlight>

            <CodeHighlight lang="js">
                {`
template: (item, options) => {
    // item: Current item object.
    // options.onClick: Click event for the default element.
    // options.className: Style class of the default element.
    // options.labelClassName: Style class of the default label element.
    // options.iconClassName: Style class of the default icon element.
    // options.element: Default element created by the component.
    // options.props: component props.

    // Note: Extra options may come according to the components.
}
`}
            </CodeHighlight>
        </>
    );
}
