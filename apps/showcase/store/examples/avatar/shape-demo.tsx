import { Avatar } from 'primereact/avatar';

const ShapeDemo = () => {
    return (
        <div className="card flex items-center justify-center gap-4">
            <Avatar shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar>
            <Avatar shape="square" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar>
        </div>
    );
};

export default ShapeDemo;
