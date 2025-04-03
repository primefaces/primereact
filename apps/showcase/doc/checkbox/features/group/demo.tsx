import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';

export default function GroupDemo() {
    const [valueState, setValueState] = React.useState<string[]>(['Cheese']);

    return (
        <>
            <div className="card flex justify-center">
                <Checkbox.Group defaultValue={['Cheese']} className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="cheese" value="Cheese" />
                        <label htmlFor="cheese"> Cheese </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="mushroom" value="Mushroom" />
                        <label htmlFor="mushroom"> Mushroom </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="pepper" value="Pepper" />
                        <label htmlFor="pepper"> Pepper </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="onion" value="Onion" />
                        <label htmlFor="onion"> Onion </label>
                    </div>
                </Checkbox.Group>
            </div>

            <div className="card flex justify-center">
                <Checkbox.Group value={valueState} onValueChange={(e) => setValueState(e.value)} className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="cheese2" value="Cheese" />
                        <label htmlFor="cheese2"> Cheese </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="mushroom2" value="Mushroom" />
                        <label htmlFor="mushroom2"> Mushroom </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="pepper2" value="Pepper" />
                        <label htmlFor="pepper2"> Pepper </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox inputId="onion2" value="Onion" />
                        <label htmlFor="onion2"> Onion </label>
                    </div>
                </Checkbox.Group>
            </div>
        </>
    );
}
