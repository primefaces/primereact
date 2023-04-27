import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NonceDoc(props) {
    const code = {
        basic: `
PrimeReact.nonce = '.........';
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce">nonce</a> value to use on dynamically generated style elements.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
