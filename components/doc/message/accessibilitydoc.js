import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function AccessibilityDoc() {
    return (
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Message components use <i>alert</i> role that implicitly defines <i>aria-live</i> as "assertive" and <i>aria-atomic</i> as "true". Since any attribute is passed to the root element, attributes like <i>aria-labelledby</i> and{' '}
                    <i>aria-label</i> can optionally be used as well.
                </p>

                <h3>Close Button Keyboard Support</h3>
                <p>Component does not include any interactive elements.</p>
            </DocSectionText>
    );
}
