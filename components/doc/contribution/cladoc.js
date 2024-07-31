import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function CLADoc(props) {
    return (
        <DocSectionText {...props}>
            <p>
                When a community member is offered the Contributor role, they are expected to sign a Contributor License Agreement (CLA) for legal purposes. This helps protect both the contributor and PrimeTek.
            </p>
        </DocSectionText>
    );
}
