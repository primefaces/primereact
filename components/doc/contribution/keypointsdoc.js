import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function KeyPointsDoc(props) {

    return (
        <DocSectionText {...props}>
            <p>
                PrimeReact has several add-ons such as UI Kit, Premium Templates, and Blocks that rely on the core library. Any structural changes in the core, such as adding new props, events, or updating design tokens, should be communicated with the core team to ensure consistency and compatibility.
            </p>
        </DocSectionText>
    );
}
