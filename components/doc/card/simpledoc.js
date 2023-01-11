import { Card } from '../../lib/card/Card';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SimpleDoc(props) {
    const code = {
        basic: `
<Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> 
    <p className="m-0 line-height-3" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
</Card>
        `,
        javascript: `
import React from 'react'; 
import { Card } from 'primereact/card';

export default function SimpleDoc() {

    return (
        <div className="card flex justify-content-center">
            <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                <p className="m-0 line-height-3" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Card } from 'primereact/card';

export default function SimpleDoc() {

    return (
        <div className="card flex justify-content-center">
            <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                <p className="m-0 line-height-3" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Card is used as a container.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="m-0 line-height-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </Card>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
