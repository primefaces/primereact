import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DownloadDoc(props) {
    const code = {
        basic: `
// with npm
npm install primereact primeicons

// with yarn
yarn add primereact primeicons
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact is available for download at <a href="https://www.npmjs.com/package/primereact">npm</a>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
