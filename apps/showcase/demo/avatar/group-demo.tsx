import { Avatar } from 'primereact/avatar';

export default function GroupDemo() {
    return (
        <div className="card flex justify-center">
            <Avatar.Group>
                <Avatar shape="circle">
                    <Avatar.Image className="w-2" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <Avatar.Fallback>A</Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    <Avatar.Fallback>A</Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Image className="w-2" src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback>O</Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                    <Avatar.Fallback>I</Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                    <Avatar.Fallback>X</Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Fallback className="">+2</Avatar.Fallback>
                </Avatar>
            </Avatar.Group>
        </div>
    );
}
