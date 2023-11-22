import { ExampleDoc } from '@/components/doc/bootstrap/exampledoc';
import { SetupDoc } from '@/components/doc/bootstrap/setupdoc';
import { DocComponent } from '@/components/doc/common/doccomponent';

const BootstrapDemo = () => {
    const docs = [
        {
            id: 'setup',
            label: 'Setup',
            component: SetupDoc
        },

        {
            id: 'example',
            label: 'Example',
            component: ExampleDoc
        }
    ];

    const description = `
    <a href="https://getbootstrap.com" className="font-medium hover:underline text-primary">Bootstrap</a>
    is a well-known CSS library to build responsive and mobile first web projects.
    `;

    return <DocComponent title="Bootstrap - PrimeReact" header="Bootstrap" description={description} componentDocs={docs} hideTabMenu></DocComponent>;
};

export default BootstrapDemo;
