import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                FileUpload uses a hidden native <i>input</i> element with <i>type="file"</i> for screen readers.
            </p>

            <h3>Keyboard Support</h3>
            <p>
                Interactive elements of the uploader are buttons, visit the <Link href="/button#accessibility">Button</Link> accessibility section for more information.
            </p>
        </DocSectionText>
    );
}
