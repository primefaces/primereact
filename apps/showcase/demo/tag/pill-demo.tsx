import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <Tag rounded>
                <Tag.Label>Primary</Tag.Label>
            </Tag>
            <Tag severity="secondary" rounded>
                <Tag.Label>Secondary</Tag.Label>
            </Tag>
            <Tag severity="success" rounded>
                <Tag.Label>Success</Tag.Label>
            </Tag>
            <Tag severity="info" rounded>
                <Tag.Label>Info</Tag.Label>
            </Tag>
            <Tag severity="warn" rounded>
                <Tag.Label>Warn</Tag.Label>
            </Tag>
            <Tag severity="danger" rounded>
                <Tag.Label>Danger</Tag.Label>
            </Tag>
            <Tag severity="contrast" rounded>
                <Tag.Label>Contrast</Tag.Label>
            </Tag>
        </div>
    );
}
