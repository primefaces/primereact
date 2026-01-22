import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const SizeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar shape="circle" size="normal">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>CC</AvatarFallback>
            </Avatar>
            <Avatar shape="circle" size="large">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>CC</AvatarFallback>
            </Avatar>
            <Avatar shape="circle" size="xlarge">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>CC</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default SizeDemo;
