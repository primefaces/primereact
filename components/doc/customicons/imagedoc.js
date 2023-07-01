import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ImageDoc(props) {
    const code = {
        basic: `
<Dropdown dropdownIcon={(options) => <img alt="dropdown icon" src="/icons/arrow_down.png" {...options.iconProps} />} />
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Any time of image can be used as an icon.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
