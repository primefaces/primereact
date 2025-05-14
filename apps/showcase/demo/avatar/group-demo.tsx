import { CheckIcon } from '@primereact/icons';
import { Avatar } from 'primereact/avatar';
export default function GroupDemo() {
    return (
        <div className="card flex justify-center">
            <Avatar.Group>
                <Avatar shape="circle">
                    <Avatar.Image className="w-2" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse rounded-full text-sm font-semibold text-gray-600">TE</Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle" delayDuration={1000}>
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    <Avatar.Fallback icon="pi pi-user" className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse rounded-full text-sm font-semibold text-gray-600"></Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle" delayDuration={2000}>
                    <Avatar.Image className="w-2" src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse rounded-full text-sm font-semibold text-gray-600">
                        <CheckIcon />
                    </Avatar.Fallback>
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                </Avatar>
                <Avatar shape="circle">
                    <Avatar.Fallback className="">+2</Avatar.Fallback>
                </Avatar>
            </Avatar.Group>
        </div>
    );
}
