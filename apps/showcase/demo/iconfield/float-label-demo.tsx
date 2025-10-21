import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="card flex flex-wrap justify-center items-end gap-4">
            <Label.Float>
                <IconField>
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                    <InputText
                        value={value1}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)}
                        id="over_label"
                        autoComplete="off"
                    />
                </IconField>
                <Label htmlFor="over_label">Over Label</Label>
            </Label.Float>

            <Label.Float variant="in">
                <IconField>
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                    <InputText
                        value={value2}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)}
                        id="in_label"
                        autoComplete="off"
                        variant="filled"
                    />
                </IconField>
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>

            <Label.Float variant="on">
                <IconField>
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                    <InputText
                        value={value3}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)}
                        id="on_label"
                        autoComplete="off"
                    />
                </IconField>
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>
        </div>
    );
}
