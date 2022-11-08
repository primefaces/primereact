import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h5>Built-in Filters</h5>
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

            <h5>Custom Filter</h5>
            <p>A custom filter is enabled by binding a regular expression, an example that blocks special characters would be;</p>
            <CodeHighlight>
                {`
<InputText keyfilter={/^[^#<>*!]+$/}/>
`}
            </CodeHighlight>

            <h5>Accessibility</h5>
            <DevelopmentSection>
                <p>
                    Refer to <Link href="/inputtext">InputText</Link> for accessibility as KeyFilter is a built-in add-on of the InputText.
                </p>
            </DevelopmentSection>
            <h5>Dependencies</h5>
            <p>None.</p>
        </>
    );
}
