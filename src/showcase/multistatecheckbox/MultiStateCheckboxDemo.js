import React from 'react';
import {AppInlineHeader} from "../../AppInlineHeader";
import {MultiStateCheckbox} from "../../components/multistatecheckbox/MultiStateCheckbox";
import MultiStateCheckboxDoc from "./MultiStateCheckboxDoc";

export function SimpleDemo() {
    const [value, setValue] = React.useState("public")

    return (
        <>
            <h3>Simple</h3>
            <div className="p-field-checkbox p-m-0">
                <MultiStateCheckbox
                    options={[
                        { value: 'public', icon: 'pi pi-globe' },
                        { value: 'protected', icon: 'pi pi-lock-open' },
                        { value: 'private', icon: 'pi pi-lock' }
                    ]}
                    value={value}
                    onChange={e => setValue(e.value)}
                />
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
                <MultiStateCheckbox
                    options={[
                        { value: 'public', icon: 'pi pi-globe' },
                        { value: 'protected', icon: 'pi pi-lock-open' },
                        { value: 'private', icon: 'pi pi-lock' }
                    ]}
                    value={value}
                    onChange={e => setValue(e.value)}
                    disabled
                />

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiStateCheckbox
                    options={[
                        { value: 'public', icon: 'pi pi-globe' },
                        { value: 'protected', icon: 'pi pi-lock-open' },
                        { value: 'private', icon: 'pi pi-lock' }
                    ]}
                    value={value}
                    onChange={e => setValue(e.value)}
                    readOnly
                />

                <label>Read Only</label>
            </div>
        </>
    )
}

export default function MultiStateCheckboxDemo() {
    return (
        <div>
            <div className="content-section introduction">
                <AppInlineHeader changelogText="triStateCheckbox" showInputStyle>
                    <h1>MultiStateCheckbox</h1>
                    <p>MultiStateCheckbox is a checkbox component where you can cycle through multiple values.</p>
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

            <MultiStateCheckboxDoc />
        </div>
    )
}
