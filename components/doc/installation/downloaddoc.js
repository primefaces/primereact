import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function DownloadDoc(props) {
    const code = {
        basic: `
// with npm
npm install primereact

// with yarn
yarn add primereact
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact is available for download at <a href="https://www.npmjs.com/package/primereact">npm</a>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
