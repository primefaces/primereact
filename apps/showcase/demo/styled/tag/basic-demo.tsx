import { Clock, InfoCircle } from '@primeicons/react';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { TimesCircle } from '@primeicons/react/times-circle';
import { Tag } from '@primereact/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-3 max-w-xs mx-auto">
            <Tag severity="secondary">Draft</Tag>

            <Tag severity="info">
                <InfoCircle />
                Info
            </Tag>

            <Tag severity="success" rounded>
                Active
            </Tag>

            <Tag severity="warn">
                <ExclamationTriangle />
                Attention
            </Tag>

            <Tag severity="danger" rounded>
                <TimesCircle />
                Error
            </Tag>

            <Tag severity="contrast">Featured</Tag>

            <Tag severity="info">New</Tag>

            <Tag severity="secondary" rounded>
                Archived
            </Tag>

            <Tag severity="warn" rounded>
                <Clock />
                Pending
            </Tag>

            <Tag severity="success">
                <Check />
                Verified
            </Tag>
        </div>
    );
}
