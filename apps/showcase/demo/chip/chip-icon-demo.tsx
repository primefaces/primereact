import { Chip } from 'primereact/chip';

export default function IconDemo() {
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
            <Chip>
                <Chip.Icon className="pi pi-microsoft" />
                <Chip.Label>Microsoft</Chip.Label>
                <Chip.RemoveIcon />
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-github" />
                <Chip.Label>GitHub</Chip.Label>
                <Chip.RemoveIcon asChild>
                    <i className="pi pi-minus-circle" />
                </Chip.RemoveIcon>
            </Chip>
        </div>
    );
}
