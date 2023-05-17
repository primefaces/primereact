import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function QuillDoc(props) {
    const code = {
        basic: `
npm install quill
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Editor uses <a href="https://quilljs.com/">Quill</a> editor underneath so it needs to be installed as a dependency.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
