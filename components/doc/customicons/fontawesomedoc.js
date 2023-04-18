import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FontAwesomeDoc(props) {

    const code = {
        basic: `
<Dropdown dropdownIcon={<i class="fa-light fa-chevron-down"></i>} />
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p><a href="https://fontawesome.com/i">Font Awesome</a> is a popular icon library with a wide range of icons.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
