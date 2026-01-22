import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
        </div>
    );
}
