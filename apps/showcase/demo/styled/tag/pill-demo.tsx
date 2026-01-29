import { Tag } from '@primereact/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Tag rounded>Primary</Tag>
            <Tag severity="secondary" rounded>
                Secondary
            </Tag>
            <Tag severity="success" rounded>
                Success
            </Tag>
            <Tag severity="info" rounded>
                Info
            </Tag>
            <Tag severity="warn" rounded>
                Warn
            </Tag>
            <Tag severity="danger" rounded>
                Danger
            </Tag>
            <Tag severity="contrast" rounded>
                Contrast
            </Tag>
        </div>
    );
}
