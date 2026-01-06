'use client';

import { Button } from 'primereact/button';
import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';

export default function ButtonDemo() {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <InputGroup.Root>
                <Button.Root>Search</Button.Root>
                <InputText placeholder="Keyword" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputText placeholder="Keyword" />
                <InputGroup.Addon>
                    <Button.Root severity="secondary" variant="text">
                        <i className="pi pi-search" />
                    </Button.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Button.Root severity="secondary">
                        <i className="pi pi-check" />
                    </Button.Root>
                </InputGroup.Addon>
                <InputText placeholder="Vote" />
                <InputGroup.Addon>
                    <Button.Root severity="secondary">
                        <i className="pi pi-times" />
                    </Button.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
