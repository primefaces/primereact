// import { useChip } from '@primereact/headless/chip';
import { Chip } from 'primereact/chip';
// import * as React from 'react';

export default function IconDemo() {
    // const headlessRemoveIcon = useChip({});
    // const { close, visibleState } = headlessRemoveIcon;

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip>
                <Chip.Icon className="pi pi-apple" />
                <Chip.Label>Apple</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-facebook" />
                <Chip.Label>Facebook</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-google" />
                <Chip.Label>Google</Chip.Label>
            </Chip>
            <Chip removable>
                <Chip.Icon className="pi pi-microsoft" />
                <Chip.Label>Microsoft</Chip.Label>
            </Chip>
            {/* {visibleState && (
                <Chip>
                    <Chip.Label>GitHub</Chip.Label>
                    <i className="pi pi-minus-circle" onClick={(e: React.MouseEvent<HTMLElement>) => close(e)} />
                </Chip>
            )} */}
        </div>
    );
}
