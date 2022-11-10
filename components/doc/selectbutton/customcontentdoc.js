import { useState } from 'react';
import { SelectButton } from '../../lib/selectbutton/SelectButton';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function CustomContentDoc(props) {
    const [value, setValue] = useState(null);
    const justifyOptions = [
        { icon: 'pi pi-align-left', value: 'left' },
        { icon: 'pi pi-align-right', value: 'Right' },
        { icon: 'pi pi-align-center', value: 'Center' },
        { icon: 'pi pi-align-justify', value: 'Justify' }
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    };

    const code = {
        basic: `
<SelectButton value={value} options={justifyOptions} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" />

        `,
        javascript: `
import { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function CustomContentDoc() {
    const [value, setValue] = useState(null);
    const justifyOptions = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <SelectButton value={value} options={justifyOptions} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function CustomContentDoc() {
    const [value, setValue] = useState(null);
    const justifyOptions = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <SelectButton value={value} options={justifyOptions} onChange={(e : SelectButtonChangeParams) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" />
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Options support templating using the <i>itemTemplate</i> property that references a function to render the content. Notice the usage of optionLabel, although it is not rendered visually, it is still required to be used as the list
                key.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton value={value} options={justifyOptions} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
