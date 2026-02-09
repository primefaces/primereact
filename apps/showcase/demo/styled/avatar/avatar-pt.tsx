import { Avatar } from '@primereact/ui/avatar';
import { User } from '@primeicons/react/user';

export default function AvatarPT() {
    return (
        <div className="flex flex-wrap gap-8">
            <Avatar.Group>
                <Avatar.Root size="xlarge" shape="circle">
                    P
                </Avatar.Root>
                <Avatar.Root size="xlarge" shape="circle">
                    <Avatar.Fallback>
                        <User className="!text-2xl" />
                    </Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className="flex items-center justify-center" size="xlarge" shape="circle">
                    <Avatar.Image src="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" />
                </Avatar.Root>
            </Avatar.Group>
        </div>
    );
}
