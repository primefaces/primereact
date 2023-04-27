import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DownloadDoc(props) {
    const code = {
        basic: `
npm install primeicons
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
