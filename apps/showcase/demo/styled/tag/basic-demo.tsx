import { Tag } from '@primereact/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-3 max-w-xs mx-auto">
            <Tag.Root severity="secondary">
                <Tag.Label>Draft</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="info">
                <Tag.Icon>
                    <i className="pi pi-info-circle" />
                </Tag.Icon>
                <Tag.Label>Info</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="success" rounded>
                <Tag.Label>Active</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="warn">
                <Tag.Icon>
                    <i className="pi pi-exclamation-triangle" />
                </Tag.Icon>
                <Tag.Label>Attention</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="danger" rounded>
                <Tag.Icon>
                    <i className="pi pi-times-circle" />
                </Tag.Icon>
                <Tag.Label>Error</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="contrast">
                <Tag.Label>Featured</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="info">
                <Tag.Label>New</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="secondary" rounded>
                <Tag.Label>Archived</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="warn" rounded>
                <Tag.Icon>
                    <i className="pi pi-clock" />
                </Tag.Icon>
                <Tag.Label>Pending</Tag.Label>
            </Tag.Root>

            <Tag.Root severity="success">
                <Tag.Icon>
                    <i className="pi pi-check" />
                </Tag.Icon>
                <Tag.Label>Verified</Tag.Label>
            </Tag.Root>
        </div>
    );
}
