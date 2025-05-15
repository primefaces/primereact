import { CheckIcon } from '@primereact/icons';
import { Avatar } from 'primereact/avatar';

export default function IconDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-8">
                <div className="flex-auto">
                    <h5>Icon</h5>
                    <Avatar className="mr-2" size="xlarge">
                        <Avatar.Fallback>
                            <i className="pi pi-user" />
                        </Avatar.Fallback>
                    </Avatar>
                    <Avatar className="mr-2" size="large" style={{ backgroundColor: '#ece9fc', color: '#2a1261' }}>
                        <Avatar.Fallback icon="pi pi-user" />
                    </Avatar>
                    <Avatar style={{ backgroundColor: '#dee9fc', color: '#1a2551' }}>
                        <Avatar.Fallback icon="pi pi-user" />
                    </Avatar>
                </div>

                <div className="flex-auto">
                    <h5>Circle</h5>
                    <Avatar className="mr-2" size="xlarge" shape="circle">
                        <Avatar.Fallback icon="pi pi-user" />
                    </Avatar>
                    <Avatar className="mr-2" size="large" style={{ backgroundColor: '#ece9fc', color: '#2a1261' }} shape="circle">
                        <Avatar.Fallback icon="pi pi-user" />
                    </Avatar>
                    <Avatar style={{ backgroundColor: '#dee9fc', color: '#1a2551' }} shape="circle">
                        <Avatar.Fallback icon="pi pi-user" />
                    </Avatar>
                </div>

                <div className="flex-auto">
                    <h5>Test</h5>
                    <Avatar className="mr-2" size="xlarge" shape="circle">
                        <Avatar.Fallback className="w-full h-full flex items-center justify-center">
                            <CheckIcon className="!size-7" />
                        </Avatar.Fallback>
                    </Avatar>
                    <Avatar className="mr-2 !bg-blue-500 !text-blue-50" size="large" shape="circle">
                        <Avatar.Fallback className="w-full h-full flex items-center justify-center text-xl font-semibold">TE</Avatar.Fallback>
                    </Avatar>
                    <Avatar className="mr-2 !bg-blue-500 !text-blue-50" shape="circle">
                        <Avatar.Image src="https://pbs.twimg.com/media/Gh7-TJNWEAAizSV?format=png&name=900x900" />
                        <Avatar.Fallback className="w-full h-full flex items-center justify-center text-xl font-semibold">TE</Avatar.Fallback>
                    </Avatar>
                </div>

                {/* <div className="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" className="inline-flex">
                    <Avatar icon="pi pi-user" size="xlarge" />
                </OverlayBadge>
            </div> */}
            </div>
        </div>
    );
}
