import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Card } from '@/components/lib/card/Card';

export function BasicDoc(props) {
    const code = {
        basic: `
<Card title="Simple Card">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
        `,
        javascript: `
import React from 'react'; 
import { Card } from 'primereact/card';

export default function BasicDemo() {
    return (
        <div className="card">
            <Card title="Simple Card">
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

export default function BasicDemo() {
    return (
        <div className="card">
            <Card title="Simple Card">
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
                <p>
                    A simple Card is created with a <i>title</i> property along with the content as children.
                </p>
            </DocSectionText>
            <div className="card">
                <Card title="Simple Card">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </Card>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
