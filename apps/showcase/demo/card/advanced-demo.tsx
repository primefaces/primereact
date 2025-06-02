import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

export default function AdvancedDemo() {
    return (
        <Card className="max-w-sm mx-auto overflow-hidden mb-4">
            <Card.Header className="relative">
                <img
                    className="w-full max-h-48 object-cover"
                    alt="user header"
                    src="https://images.unsplash.com/photo-1513649718256-1a7162666bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Avatar shape="circle" className="!w-28 !h-28 border-3 border-surface-0 dark:border-surface-900 absolute -bottom-14 left-4 z-10">
                    <Avatar.Image className="object-cover" src="https://images.unsplash.com/photo-1722495178488-c8056c4ec2c0?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar>
            </Card.Header>
            <Card.Body className="!pt-16">
                <Card.Caption>
                    <Card.Title className="!font-bold !text-2xl">Sakura Fresh Market</Card.Title>
                    <div className="flex items-center gap-2">
                        <Tag className="w-fit" severity="info">
                            Daily
                        </Tag>
                        <Tag className="w-fit" severity="info">
                            Premium
                        </Tag>
                    </div>
                </Card.Caption>
                <Card.Content className="space-y-4">
                    <p>Sakura Fresh Market is your go-to store for fresh local produce, Japanese snacks, and daily essentials — all in one place!</p>
                    <div className="flex items-center gap-2">
                        <i className="pi pi-star-fill text-yellow-500"></i>
                        <span>
                            <b>4.6</b> (200+ reviews)
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="pi pi-map-marker"></i>
                        <span>Tokyo, Shibuya-ku</span>
                    </div>
                </Card.Content>
                <Card.Footer className="flex items-center gap-2 mt-4">
                    <Button className="flex-1" severity="secondary" variant="outlined">
                        <i className="pi pi-phone"></i>
                        Call Us
                    </Button>
                    <Button className="flex-1">
                        <i className="pi pi-globe"></i>
                        Visit Site
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}
