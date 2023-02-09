import Link from 'next/link';
import { DocSectionText } from '../common/docsectiontext';

export function LocaleDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The locale configuration sets up the language and region specific preferences. Visit the <Link href="/locale">Locale API</Link>
                    for more information.
                </p>
            </DocSectionText>
        </>
    );
}
