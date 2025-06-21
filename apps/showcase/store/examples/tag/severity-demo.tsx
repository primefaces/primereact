import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <Tag>
                <Tag.Label>Primary</Tag.Label>
            </Tag>
            <Tag severity="secondary">
                <Tag.Label>Secondary</Tag.Label>
            </Tag>
            <Tag severity="success">
                <Tag.Label>Success</Tag.Label>
            </Tag>
            <Tag severity="info">
                <Tag.Label>Info</Tag.Label>
            </Tag>
            <Tag severity="warn">
                <Tag.Label>Warn</Tag.Label>
            </Tag>
            <Tag severity="danger">
                <Tag.Label>Danger</Tag.Label>
            </Tag>
            <Tag severity="contrast">
                <Tag.Label>Contrast</Tag.Label>
            </Tag>
        </div>
    );
}
