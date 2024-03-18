import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function BootstrapDoc(props) {
    const code = {
        basic: `
@layer bootstrap-reboot, primereact;

@import "bootstrap-reboot.css" layer(bootstrap-rebooot);
`
    };

    return (
        <DocSectionText {...props}>
            <p>
                Bootstrap has a <i>reboot</i> utility to reset the CSS of the standard elements. If you are including this utility, you may give it a layer while importing it.
            </p>
            <DocSectionCode code={code} hideToggleCode importCode hideStackBlitz />
        </DocSectionText>
    );
}
