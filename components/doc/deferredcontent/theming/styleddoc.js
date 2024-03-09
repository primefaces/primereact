import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Component does not apply any styling.</p>
            </DocSectionText>
        </>
    );
}
