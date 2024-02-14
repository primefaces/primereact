import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import Link from 'next/link';
import { useState } from 'react';

export function SpecificityDoc(props) {
    const [checked, setChecked] = useState(false);
    const css = `
        .my-switch-slider {
            border-radius: 0;
        }

        .my-switch-slider:before {
            border-radius: 0;
        }
    `;

    const code = {
        basic: `
import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export function SpecificityDemo() {
    const [checked, setChecked] = useState(false);
    const css = \`
        .my-switch-slider {
            border-radius: 0;
        }

        .my-switch-slider:before {
            border-radius: 0;
        }
    \`;

    return (
        <div className="card">
            <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                pt={{
                    slider: {
                        className: 'my-switch-slider'
                    }
                }}
            />
            <style>{css}</style>
        </div>
    );
}
`
    };

    return (
        <DocSectionText {...props}>
            <p className="notification">A CSS layer is utilized in styled mode only, in unstyled mode the built-in CSS classes are not included and as a result no layer is defined. This documentation only applies to styled mode.</p>
            <p>
                The <i>@layer</i> is a standard CSS feature to define cascade layers for a customizable order of precedence. If you need to become more familiar with layers, visit the documentation at&nbsp;
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">MDN</a> to begin with. In styled mode, PrimeReact wraps the built-in style classes under the <i>primereact</i> cascade layer to make the library styles easy to
                override. CSS in your app without a layer has the highest CSS specificity, so you'll be able to override styles regardless of the location or how strong a class is written.
            </p>
            <p>
                For example, let's assume you need to remove the rounded borders of the InputSwitch component defined by the theme in use. In order to achieve this, <i>.p-inputswitch .p-inputswitch-slider</i> selector needs to be overriden. Without
                the layers, we'd have to write a stronger css or use <i>!important</i> however, with layers, this does not present an issue as your CSS can always override PrimeReact with a more straightforward class name such as&nbsp;
                <i>my-switch-slider</i>. Another advantage of this approach is that it does not force you to figure out the built-in class names of the components.
            </p>
            <div className="card flex justify-content-center">
                <InputSwitch
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                    pt={{
                        slider: {
                            className: 'my-switch-slider'
                        }
                    }}
                />
                <style>{css}</style>
            </div>
            <DocSectionCode code={code} hideToggleCode hideStackBlitz />
            <p>
                Layers also make it possible to use CSS Modules, view the <Link href="/theming/#cssmodules">CSS Modules</Link> guide for examples.
            </p>
        </DocSectionText>
    );
}
