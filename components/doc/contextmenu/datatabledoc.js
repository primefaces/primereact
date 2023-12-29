import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function DataTableDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    DataTable has built-in support for ContextMenu, see the <Link href="/datatable/#contextmenu">Context Menu</Link> demo for an example.
                </p>
            </DocSectionText>
        </>
    );
}
