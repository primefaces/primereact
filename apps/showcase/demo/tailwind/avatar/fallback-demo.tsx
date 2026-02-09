import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from '@primeicons/react/user';
import { Check } from '@primeicons/react/check';

export default function LabelDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar>
                <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Avatar className="bg-amber-100 dark:bg-amber-950/50 text-amber-500 dark:text-amber-500">
                <AvatarFallback>CC</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>
                    <Check className="size-4" />
                </AvatarFallback>
            </Avatar>
            <Avatar className="bg-blue-100 dark:bg-blue-950/50 text-blue-500 dark:text-blue-500">
                <AvatarFallback>
                    <User />
                </AvatarFallback>
            </Avatar>
        </div>
    );
}
