import { Tag } from 'primereact/tag';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <Tag as="button">
                <Tag.Label>Button</Tag.Label>
            </Tag>
        </div>
    );
}
