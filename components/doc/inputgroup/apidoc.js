import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>InputGroup</h3>
            <p>Text, icon, buttons and other content can be grouped next to an input.</p>
        </>
    );
}
