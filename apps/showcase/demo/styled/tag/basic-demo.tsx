import { Tag } from '@primereact/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-3 max-w-xs mx-auto">
            <Tag severity="secondary">Draft</Tag>

            <Tag severity="info">
                <i className="pi pi-info-circle" />
                Info
            </Tag>

            <Tag severity="success" rounded>
                Active
            </Tag>

            <Tag severity="warn">
                <i className="pi pi-exclamation-triangle" />
                Attention
            </Tag>

            <Tag severity="danger" rounded>
                <i className="pi pi-times-circle" />
                Error
            </Tag>

            <Tag severity="contrast">Featured</Tag>

            <Tag severity="info">New</Tag>

            <Tag severity="secondary" rounded>
                Archived
            </Tag>

            <Tag severity="warn" rounded>
                <i className="pi pi-clock" />
                Pending
            </Tag>

            <Tag severity="success">
                <i className="pi pi-check" />
                Verified
            </Tag>
        </div>
    );
}
