import { Tag } from '@primereact/ui/tag';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <i className="pi pi-user"></i>
                    Primary
                </Tag>
                <Tag severity="secondary">
                    <i className="pi pi-user" />
                    Secondary
                </Tag>
                <Tag severity="success">
                    <i className="pi pi-check" />
                    Success
                </Tag>
                <Tag severity="info">
                    <i className="pi pi-search" />
                    Info
                </Tag>
                <Tag severity="warn">
                    <i className="pi pi-exclamation-triangle" />
                    Warn
                </Tag>
                <Tag severity="danger">
                    <i className="pi pi-times" />
                    Danger
                </Tag>
                <Tag severity="contrast">
                    <i className="pi pi-cog" />
                    Contrast
                </Tag>
            </div>
        </div>
    );
}
