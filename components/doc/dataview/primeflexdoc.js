import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function PrimeFlexDoc(props) {
    const code1 = {
        basic: `
npm install primeflex
        `
    };

    const code2 = {
        basic: `
import 'primeflex/primeflex.css';
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>DataView depends on PrimeFlex Grid functionality so it needs to be installed and imported.</p>
            </DocSectionText>
            <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
            <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
