import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';

export default function InvalidDemo() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="card flex justify-center">
            <Checkbox checked={checked} onCheckedChange={(e) => setChecked(e.checked)} invalid={!checked} />
        </div>
    );
}
