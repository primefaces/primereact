import { Tag } from '@primereact/ui/tag';

export default function SeverityDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Tag>Primary</Tag>
            <Tag severity="secondary">Secondary</Tag>
            <Tag severity="success">Success</Tag>
            <Tag severity="info">Info</Tag>
            <Tag severity="warn">Warn</Tag>
            <Tag severity="danger">Danger</Tag>
            <Tag severity="contrast">Contrast</Tag>
        </div>
    );
}
