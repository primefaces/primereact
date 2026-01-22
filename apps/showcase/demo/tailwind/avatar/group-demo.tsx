import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <AvatarGroup>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <AvatarFallback>O</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                    <AvatarFallback>I</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarFallback>+2</AvatarFallback>
                </Avatar>
            </AvatarGroup>
        </div>
    );
}
