import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { useState } from 'react';

export function WAIAriaDoc(props) {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ARIA refers to "Accessible Rich Internet Applications" is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components
                    such as a datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeReact. These types of
                    components must provide keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized.
                </p>
                <p>
                    ARIA consists of roles, properties and attributes. <b>Roles</b> define what the element is mainly used for e.g. <i>checkbox</i>, <i>dialog</i>, <i>tablist</i> whereas <b>States</b> and <b>Properties</b> define the metadata of the
                    element like <i>aria-checked</i>, <i>aria-disabled</i>.
                </p>

                <p>Consider the following case of a native checkbox. It has built-in keyboard and screen reader support.</p>
            </DocSectionText>
            <CodeHighlight>
                {`
<input type="checkbox" value="Prime" name="ui" checked>
`}
            </CodeHighlight>

            <p className="doc-section-description">
                A fancy checkbox with css animations might look more appealing but accessibility might be lacking. Checkbox below may display a checked font icon with animations however it is not tabbable, cannot be checked with space key and cannot
                be read by a reader.
            </p>
            <CodeHighlight>
                {`
<div className="fancy-checkbox">
    {checked && <i className="checked-icon"></i>}
</div>
`}
            </CodeHighlight>

            <p className="doc-section-description">
                One alternative is using ARIA roles for readers and use javascript for keyboard support. Notice the usage of <i>aria-labelledby</i> as a replacement of the <i>label</i> tag with htmlFor.
            </p>
            <CodeHighlight>
                {`
<span id="chk-label">Remember Me</span>
<div className="fancy-checkbox" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk-label"
    onClick="() => toggle()" onKeyDown="(e) => e.keyCode === 32 && toggle()">
    {checked && <i className="checked-icon"></i>}
</div>
`}
            </CodeHighlight>

            <p className="doc-section-description">
                However the best practice is combining semantic HTML for accessibility while keeping the design for UX. This approach involves hiding a native checkbox for accessibility and using javascript events to update its state. Notice the
                usage of <i>p-sr-only</i>
                that hides the elements from the user but not from the screen reader.
            </p>
            <CodeHighlight>
                {`
<label htmlFor="chkbox">Remember Me</label>
<div className="fancy-checkbox" onClick="() => toggle()">
    <input className="p-sr-only" type="checkbox" id="chkbox" onFocus="() => updateParentVisuals()" onBlur="() => updateParentVisuals()"
        onKeyDown="(e) => e.keyCode === 32 && updateParentVisuals()">
    {checked && <i className="checked-icon"></i>}
</div>
`}
            </CodeHighlight>

            <p className="doc-section-description">A working sample is the PrimeReact checkbox that is tabbable, keyboard accessible and is compliant with a screen reader. Instead of ARIA roles it relies on a hidden native checkbox.</p>

            <div className="card flex align-items-center justify-content-center">
                <label htmlFor="binary" className="mr-2">
                    Remember Me
                </label>
                <Checkbox inputId="binary" checked={checked} onChange={(e) => setChecked(e.checked)} />
            </div>
        </>
    );
}
