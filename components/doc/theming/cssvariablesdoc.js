import Link from 'next/link';
import { DocSectionText } from '../common/docsectiontext';

export function CSSVariablesDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Each PrimeReact theme exports numerous CSS variables, refer to <Link href="/colors">Colors</Link> page for more details.
                </p>
            </DocSectionText>
        </>
    );
}
