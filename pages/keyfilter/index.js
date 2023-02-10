import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/keyfilter/accessibilitydoc';
import { ImportDoc } from '../../components/doc/keyfilter/importdoc';
import { PresetsDoc } from '../../components/doc/keyfilter/presetsdoc';
import { RegexDoc } from '../../components/doc/keyfilter/regexdoc';

const KeyFilterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'presets',
            label: 'Presets',
            component: PresetsDoc
        },
        {
            id: 'regex',
            label: 'Regex',
            component: RegexDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React KeyFilter" header="KeyFilter" description="KeyFilter is a built-in feature of InputText to restrict user input based on a regular expression." componentDocs={docs} apiDocs={['KeyFilter']} />;
};

export default KeyFilterDemo;
