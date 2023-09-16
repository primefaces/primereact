import { DocSectionText } from '../../common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Component does not apply any styling.</p>
            </DocSectionText>
        </>
    );
}
