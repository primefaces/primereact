import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';
import { Tag } from '@primereact/ui/tag';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <User></User>
                    Primary
                </Tag>
                <Tag severity="secondary">
                    <User />
                    Secondary
                </Tag>
                <Tag severity="success">
                    <Check />
                    Success
                </Tag>
                <Tag severity="info">
                    <Search />
                    Info
                </Tag>
                <Tag severity="warn">
                    <ExclamationTriangle />
                    Warn
                </Tag>
                <Tag severity="danger">
                    <Times />
                    Danger
                </Tag>
                <Tag severity="contrast">
                    <Cog />
                    Contrast
                </Tag>
            </div>
        </div>
    );
}
