import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function FormControlsDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be
                    used with space key as well to trigger.
                </p>
            </DocSectionText>
            <CodeHighlight>
                {`
<button onClick={e => console.log(e)}>Click</button>
`}
            </CodeHighlight>

            <p className="doc-section-description">On the other hand, a fancy css based button using a div has no keyboard or screen reader support.</p>
            <CodeHighlight>
                {`
<div className="fancy-button" onClick={e => console.log(e)}>Click</div>
`}
            </CodeHighlight>

            <p className="doc-section-description">
                <i>tabIndex</i> is required to make a div element accessible in addition to use a keydown to bring the keyboard support back. To avoid the overload and implementing functionality that is already provided by the browser, native form
                controls should be preferred.
            </p>
            <CodeHighlight>
                {`
<div className="fancy-button" onClick={e => console.log(e)} onKeyDown={e => e.code === 'Space' && console.log(e) } tabIndex="0">Click</div>
`}
            </CodeHighlight>

            <p className="doc-section-description">
                Form components must be related to another element that describes what the form element is used for. This is usually achieved with the <i>label</i> element.
            </p>
            <CodeHighlight>
                {`
<label htmlFor="myinput">Username:</label>
<input id="myinput" type="text" name="username" />
`}
            </CodeHighlight>
        </>
    );
}
