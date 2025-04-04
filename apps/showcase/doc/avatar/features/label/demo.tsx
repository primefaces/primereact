import { Avatar } from 'primereact/avatar';
export default function LabelDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-8">
                <div className="flex-auto">
                    <h5>Label</h5>
                    <div className="space-x-2">
                        <Avatar label="P" size="xlarge" />
                        <Avatar label="V" size="large" style="background-color: #ece9fc; color: #2a1261" />
                        <Avatar label="U" style="background-color: #dee9fc; color: #1a2551" />
                    </div>
                </div>

                <div className="flex-auto">
                    <h5>Circle</h5>
                    <div className="space-x-2">
                        <Avatar label="P" size="xlarge" shape="circle" />
                        <Avatar label="V" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                        <Avatar label="U" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
                    </div>
                </div>

                {/* <div class="flex-auto">
                    <h5>Badge</h5>
                    <OverlayBadge value="4" severity="danger" class="inline-flex">
                        <Avatar label="U" size="xlarge" />
                    </OverlayBadge>
                </div> */}
            </div>
        </div>
    );
}
