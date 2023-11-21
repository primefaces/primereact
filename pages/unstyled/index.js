import { DocComponent } from '@/components/doc/common/doccomponent';
import { ArchitectureDoc } from '@/components/doc/unstyled/architecturedoc';
import { ExampleDoc } from '@/components/doc/unstyled/exampledoc';
import { SetupDoc } from '@/components/doc/unstyled/setupdoc';
import { ThemeDoc } from '@/components/doc/unstyled/themedoc';

const UnstyledDemo = () => {
    const docs = [
        {
            id: 'architecture',
            label: 'Architecture',
            component: ArchitectureDoc
        },
        {
            id: 'setup',
            label: 'Setup',
            component: SetupDoc
        },
        {
            id: 'example',
            label: 'Example',
            component: ExampleDoc
        },
        {
            id: 'theme',
            label: 'Theme',
            component: ThemeDoc
        }
    ];

    return <DocComponent title="Unstyled - PrimeReact" header="Unstyled Mode" description="Styling PrimeReact with your favorite CSS library." componentDocs={docs} hideTabMenu />;
};

export default UnstyledDemo;
