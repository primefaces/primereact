import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function AccessibilityDoc() {
    const code = {
        basic: `
<span id="dd1">Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />
    `
    };

    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                MeterGroup component uses <i>meter</i> role in addition to the <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be defined using <i>aria-labelledby</i> prop.
            </p>
            <h3>Keyboard Support</h3>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
