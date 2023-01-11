import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="builtin" label="Built-in Filters">
                <p>Commonly used cases have their own built-in shortcuts.</p>
                <ul>
                    <li>pint: Positive integers</li>
                    <li>int: Integers</li>
                    <li>pnum: Positive numbers</li>
                    <li>num: Numbers</li>
                    <li>hex: Hexadecimal</li>
                    <li>email: Email</li>
                    <li>alpha: Alphabetic</li>
                    <li>alphanum: Alphanumeric</li>
                </ul>
            </DocSubSection>

            <DocSubSection id="custom" label="Custom Filter">
                <p>A custom filter is enabled by binding a regular expression, an example that blocks special characters would be;</p>
                <CodeHighlight>
                    {`
<InputText keyfilter={/^[^#<>*!]+$/}/>
`}
                </CodeHighlight>
            </DocSubSection>
        </>
    );
}
