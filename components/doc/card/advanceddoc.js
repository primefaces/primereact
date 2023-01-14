import { Card } from '../../lib/card/Card';
import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function AdvancedDoc(props) {
    const header = <img alt="Card" src="images/usercard.png" />;
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );
    const code = {
        basic: `
<Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
        `,
        javascript: `
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Card content can be customized further with <i>subTitle</i>, <i>header</i> and <i>footer</i> properties.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
