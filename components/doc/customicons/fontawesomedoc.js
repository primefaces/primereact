import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function FontAwesomeDoc(props) {
    const code = {
        basic: `
// use the CSS style directly
<Dropdown dropdownIcon="fa-light fa-chevron-down" />

// use the pre-built icons
<Dropdown dropdownIcon={(options) => <FontAwesomeIcon icon={["fal", "chevron-down"]}  {...options.iconProps} /> } />
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://fontawesome.com/">Font Awesome</a> is a popular icon library with a wide range of icons.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
