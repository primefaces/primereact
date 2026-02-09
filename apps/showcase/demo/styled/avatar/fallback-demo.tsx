import { Avatar } from '@primereact/ui/avatar';
import { User } from '@primeicons/react/user';
import { Check } from '@primeicons/react/check';

export default function LabelDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root>
                <Avatar.Fallback>J</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className="bg-amber-100 dark:bg-amber-950/50 text-amber-500 dark:text-amber-500">
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
                <Avatar.Fallback>
                    <Check className="size-4" />
                </Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className="bg-blue-100 dark:bg-blue-950/50 text-blue-500 dark:text-blue-500">
                <Avatar.Fallback>
                    <User />
                </Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
