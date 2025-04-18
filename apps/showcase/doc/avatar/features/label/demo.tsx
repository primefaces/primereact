import { Avatar } from 'primereact/avatar';
export default function LabelDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-8">
                <div className="flex-auto">
                    <h5>Label</h5>
                    <div className="space-x-2">
                        <Avatar size="xlarge">
                            <Avatar.Fallback label="P" />
                        </Avatar>
                        <Avatar size="large" style={{ backgroundColor: '#ece9fc', color: '#2a1261' }}>
                            <Avatar.Fallback label="V" />
                        </Avatar>
                        <Avatar style={{ backgroundColor: '#dee9fc', color: '#1a2551' }}>
                            <Avatar.Fallback label="U" />
                        </Avatar>
                    </div>
                </div>

                <div className="flex-auto">
                    <h5>Circle</h5>
                    <div className="space-x-2">
                        <Avatar size="xlarge" shape="circle">
                            <Avatar.Fallback label="P" />
                        </Avatar>
                        <Avatar size="large" style={{ backgroundColor: '#ece9fc', color: '#2a1261' }} shape="circle">
                            <Avatar.Fallback label="V" />
                        </Avatar>
                        <Avatar style={{ backgroundColor: '#dee9fc', color: '#1a2551' }} shape="circle">
                            <Avatar.Fallback label="U" />
                        </Avatar>
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
