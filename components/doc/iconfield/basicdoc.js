import React, { useState } from 'react';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { IconField } from '@/components/lib/iconfield/IconField';
import { InputIcon } from '@/components/lib/inputicon/InputIcon';
import { InputText } from '@/components/lib/inputtext/InputText';

export function BasicDoc(props) {
    const code = {
        basic: `
<IconField iconPosition="left">
    <InputIcon className="pi pi-search"> </InputIcon>
    <InputText v-model="value1" placeholder="Search" />
</IconField>

<IconField>
    <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
    <InputText v-model="value2" />
</IconField>
        `,
        javascript: `
import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    return (
        <>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>

            <IconField>
                <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
                <InputText v-model="value2" />
            </IconField>
        </>
    )
}
        `,
        typescript: `
import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    return (
        <>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>

            <IconField>
                <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
                <InputText v-model="value2" />
            </IconField>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    IconField is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <>
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search" />
                        <InputText v-model="value1" placeholder="Search" />
                    </IconField>

                    <IconField>
                        <InputIcon className="pi pi-spin pi-spinner" />
                        <InputText v-model="value2" />
                    </IconField>
                </>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
