import { Chip } from 'primereact/chip';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip>
                <Chip.Label>Action</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Label>Comedy</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Label>Mystery</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Label>Thriller</Chip.Label>
                <Chip.RemoveIcon />
            </Chip>
        </div>
    );
}
