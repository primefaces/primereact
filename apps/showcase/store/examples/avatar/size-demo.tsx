import { Avatar } from 'primereact/avatar';

const SizeDemo = () => {
    return (
        <div className="card flex items-center justify-center gap-4">
            <Avatar shape="circle" size="normal">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>
            <Avatar shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>
            <Avatar shape="circle" size="xlarge">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>
        </div>
    );
};

export default SizeDemo;
