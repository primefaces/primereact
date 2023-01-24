import DocApiSection from '../common/docapisection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    const apiComponents = [{ name: 'Accordion', isMain: true }, { name: 'AccordionTab' }];

    return (
        <>
            <DocSectionText {...props}>For API references of the following component(s);</DocSectionText>
            <DocApiSection components={apiComponents} />
        </>
    );
}
