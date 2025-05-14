// import { Badge } from 'primereact/badge';
// import { Button } from 'primereact/button';

import { Inplace } from 'primereact/inplace';

export default function InputDemo() {
    return (
        <div className="card">
            <Inplace>
                <Inplace.Display>Click to Edit</Inplace.Display>
                <Inplace.Content>
                    <span className="inline-flex items-center gap-2">
                        <input autoFocus />
                        <Inplace.Close as="button" role="button">
                            Close
                        </Inplace.Close>
                    </span>
                </Inplace.Content>
            </Inplace>
        </div>
    );
}
