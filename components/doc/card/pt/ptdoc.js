import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Card } from '@/components/lib/card/Card';

export function PTDoc(props) {
    const code = {
        basic: `
<Card
    title="Simple Card"
    pt={{
        body: { className: 'bg-primary border-round-lg' }
    }}
>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
    </p>
</Card>
        `,
        javascript: `
import React from 'react'; 
import { Card } from 'primereact/card';

export default function PTDemo() {
    return (
        <div className="card">
            <Card
                title="Simple Card"
                pt={{
                    body: { className: 'bg-primary border-round-lg' }
                }}
            >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </Card>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Card } from 'primereact/card';

export default function PTDemo() {
    return (
        <div className="card">
            <Card
                title="Simple Card"
                pt={{
                    body: { className: 'bg-primary border-round-lg' }
                }}
            >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </Card>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Card
                    title="Simple Card"
                    pt={{
                        body: { className: 'bg-primary border-round-lg' }
                    }}
                >
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
