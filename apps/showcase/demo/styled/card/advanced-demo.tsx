import { Globe, MapMarker, Phone } from '@primeicons/react';
import { StarFill } from '@primeicons/react/star-fill';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';
import { Tag } from '@primereact/ui/tag';

export default function AdvancedDemo() {
    return (
        <Card.Root className="max-w-sm mx-auto overflow-hidden">
            <Card.Header className="relative">
                <img
                    className="w-full max-h-42 object-cover"
                    alt="user header"
                    src="https://images.unsplash.com/photo-1513649718256-1a7162666bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Avatar.Root shape="circle" className="w-24 h-24 border-3 border-surface-0 dark:border-surface-900 absolute -bottom-12 left-4">
                    <Avatar.Image src="https://images.unsplash.com/photo-1722495178488-c8056c4ec2c0?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar.Root>
            </Card.Header>
            <Card.Body className="pt-16">
                <Card.Caption>
                    <Card.Title className="font-bold text-xl">Sakura Fresh Market</Card.Title>
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
                        <StarFill className="text-yellow-500"></StarFill>
                        <span>
                            <b>4.6</b> (200+ reviews)
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapMarker />
                        <span>Tokyo, Shibuya-ku</span>
                    </div>
                </Card.Content>
                <Card.Footer className="flex items-center gap-2 mt-4">
                    <Button className="flex-1" severity="secondary" variant="outlined">
                        <Phone />
                        Call Us
                    </Button>
                    <Button className="flex-1">
                        <Globe />
                        Visit Site
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
