import React from 'react';
import {AppInlineHeader} from "../../AppInlineHeader";
import {MultiCheckbox} from "../../components/multicheckbox/MultiCheckbox";
import MultiCheckboxDoc from "./MultiCheckboxDoc";

export function SimpleDemo() {
    const [value, setValue] = React.useState("public")

    return (
        <>
            <h3>Simple</h3>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)}>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>
                <label>{value}</label>
            </div>
        </>
    )
}

export function DisabledRoDemo() {
    const [value, setValue] = React.useState("public")

    return (
        <>
            <h3>Disabled and Readonly</h3>
            <div className="p-field-checkbox p-m-0 p-pb-2">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)} disabled>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)} readOnly>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Read Only</label>
            </div>
        </>
    )
}

export default function MultiCheckboxDemo() {
    return (
        <div>
            <div className="content-section introduction">
                <AppInlineHeader changelogText="triStateCheckbox" showInputStyle>
                    <h1>MultiCheckbox</h1>
                    <p>MultiCheckbox is a checkbox component where you can cycle through multiple values.</p>
                </AppInlineHeader>
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <SimpleDemo/>
                </div>

                <div className="card">
                    <DisabledRoDemo/>
                </div>
            </div>

            <MultiCheckboxDoc />
        </div>
    )
}
