import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/paginator/accessibilitydoc';
import { BasicDoc } from '../../components/doc/paginator/basicdoc';
import { ContentDoc } from '../../components/doc/paginator/contentdoc';
import { CustomDoc } from '../../components/doc/paginator/customdoc';
import { ImportDoc } from '../../components/doc/paginator/importdoc';
import { StyleDoc } from '../../components/doc/paginator/styledoc';

const PaginatorDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'custom',
            label: 'Custom Template',
            component: CustomDoc
        },
        {
            id: 'content',
            label: 'Left and Right Content',
            component: ContentDoc
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

    return <DocComponent title="React Paginator Component" header="Paginator" description="Paginator is a generic widget to display content in paged format." componentDocs={docs} apiDocs={['Paginator']} />;
};

export default PaginatorDemo;
