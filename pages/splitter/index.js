import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/splitter/accessibilitydoc';
import { HorizontalDoc } from '../../components/doc/splitter/horizontaldoc';
import { ImportDoc } from '../../components/doc/splitter/importdoc';
import { NestedDoc } from '../../components/doc/splitter/nesteddoc';
import { SizeDoc } from '../../components/doc/splitter/sizedoc';
import { StyleDoc } from '../../components/doc/splitter/styledoc';
import { VerticalDoc } from '../../components/doc/splitter/verticaldoc';

const SplitterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React Splitter Component" header="Splitter" description="Splitter is utilized to separate and resize panels." componentDocs={docs} apiDocs={['Splitter', 'SplitterPanel']} />;
};

export default SplitterDemo;
