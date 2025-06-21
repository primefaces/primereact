import { Tag } from 'primereact/tag';

export default function IconDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <Tag.Icon>
                        <i className="pi pi-user"></i>
                    </Tag.Icon>
                    <Tag.Label>Primary</Tag.Label>
                </Tag>
                <Tag severity="secondary">
                    <Tag.Icon>
                        <i className="pi pi-user" />
                    </Tag.Icon>
                    <Tag.Label>Secondary</Tag.Label>
                </Tag>
                <Tag severity="success">
                    <Tag.Icon>
                        <i className="pi pi-check" />
                    </Tag.Icon>
                    <Tag.Label>Success</Tag.Label>
                </Tag>
                <Tag severity="info">
                    <Tag.Icon>
                        <i className="pi pi-search" />
                    </Tag.Icon>
                    <Tag.Label>Info</Tag.Label>
                </Tag>
                <Tag severity="warn">
                    <Tag.Icon>
                        <i className="pi pi-exclamation-triangle" />
                    </Tag.Icon>
                    <Tag.Label>Warn</Tag.Label>
                </Tag>
                <Tag severity="danger">
                    <Tag.Icon>
                        <i className="pi pi-times" />
                    </Tag.Icon>
                    <Tag.Label>Danger</Tag.Label>
                </Tag>
                <Tag severity="contrast">
                    <Tag.Icon>
                        <i className="pi pi-cog" />
                    </Tag.Icon>
                    <Tag.Label>Contrast</Tag.Label>
                </Tag>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <Tag.Label>Primary</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-user"></i>
                    </Tag.Icon>
                </Tag>
                <Tag severity="secondary">
                    <Tag.Label>Secondary</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-user" />
                    </Tag.Icon>
                </Tag>
                <Tag severity="success">
                    <Tag.Label>Success</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-check" />
                    </Tag.Icon>
                </Tag>
                <Tag severity="info">
                    <Tag.Label>Info</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-search" />
                    </Tag.Icon>
                </Tag>
                <Tag severity="warn">
                    <Tag.Label>Warn</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-exclamation-triangle" />
                    </Tag.Icon>
                </Tag>
                <Tag severity="danger">
                    <Tag.Label>Danger</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-times" />
                    </Tag.Icon>
                </Tag>
                <Tag severity="contrast">
                    <Tag.Label>Contrast</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-cog" />
                    </Tag.Icon>
                </Tag>
            </div>
        </div>
    );
}
