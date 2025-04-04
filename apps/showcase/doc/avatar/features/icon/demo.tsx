import { Avatar } from 'primereact/avatar';
export default function IconDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-8">
                <div className="flex-auto">
                    <h5>Icon</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                    <Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
                </div>

                <div className="flex-auto">
                    <h5>Circle</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                    <Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
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
