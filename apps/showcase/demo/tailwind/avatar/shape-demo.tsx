import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ShapeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar shape="circle" size="large">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <AvatarFallback>W</AvatarFallback>
            </Avatar>
            <Avatar shape="square" size="large">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <AvatarFallback>W</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default ShapeDemo;
