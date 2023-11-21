import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { useState } from 'react';

export function TemplateDoc(props) {
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
<SelectButton value={value} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function TemplateDemo() {
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
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface JustifyOption {
    icon: string;
    value: string;
}

export default function TemplateDemo() {
    const [value, setValue] = useState<JustifyOption>(null);
    const justifyOptions: JustifyOption[] = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option: JustifyOption) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Options support templating using the <i>itemTemplate</i> property that references a function to render the content. Notice the usage of <i>optionLabel</i>, although not rendered visually, it is still required to be used as the
                    list key.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton value={value} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
