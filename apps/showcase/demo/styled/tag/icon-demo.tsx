import { Tag } from '@primereact/ui/tag';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
                <Tag.Root>
                    <Tag.Icon>
                        <i className="pi pi-user"></i>
                    </Tag.Icon>
                    <Tag.Label>Primary</Tag.Label>
                </Tag.Root>
                <Tag.Root severity="secondary">
                    <Tag.Icon>
                        <i className="pi pi-user" />
                    </Tag.Icon>
                    <Tag.Label>Secondary</Tag.Label>
                </Tag.Root>
                <Tag.Root severity="success">
                    <Tag.Icon>
                        <i className="pi pi-check" />
                    </Tag.Icon>
                    <Tag.Label>Success</Tag.Label>
                </Tag.Root>
                <Tag.Root severity="info">
                    <Tag.Icon>
                        <i className="pi pi-search" />
                    </Tag.Icon>
                    <Tag.Label>Info</Tag.Label>
                </Tag.Root>
                <Tag.Root severity="warn">
                    <Tag.Icon>
                        <i className="pi pi-exclamation-triangle" />
                    </Tag.Icon>
                    <Tag.Label>Warn</Tag.Label>
                </Tag.Root>
                <Tag.Root severity="danger">
                    <Tag.Icon>
                        <i className="pi pi-times" />
                    </Tag.Icon>
                    <Tag.Label>Danger</Tag.Label>
                </Tag.Root>
                <Tag.Root severity="contrast">
                    <Tag.Icon>
                        <i className="pi pi-cog" />
                    </Tag.Icon>
                    <Tag.Label>Contrast</Tag.Label>
                </Tag.Root>
            </div>
        </div>
    );
}
