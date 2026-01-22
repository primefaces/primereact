import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ImageDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <AvatarFallback>O</AvatarFallback>
            </Avatar>
        </div>
    );
}
