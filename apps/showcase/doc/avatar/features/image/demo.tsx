import { Avatar } from 'primereact/avatar';
export default function ImageDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-8">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                </div>

                {/* <div className="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" className="inline-flex">
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div> */}

                <div className="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" className="flex items-center justify-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    );
}
