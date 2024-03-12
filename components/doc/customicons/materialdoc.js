import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function MaterialDoc(props) {
    const code = {
        basic: `
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

<Dropdown dropdownIcon={(options) => <ArrowDropDownIcon {...options.iconProps} />} />
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://fonts.google.com/icons">Material icons</a> is the official icon library based on Google Material Design.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
