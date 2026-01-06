'use client';

import { Avatar } from 'primereact/avatar';
import { Message } from 'primereact/message';

export default function IconDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon className="pi pi-info-circle" />
                    <Message.Text>Info Message</Message.Text>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="success">
                <Message.Content>
                    <Message.Icon asChild>
                        <Avatar.Root shape="circle">
                            <Avatar.Image src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                        </Avatar.Root>
                    </Message.Icon>
                    <Message.Text>How may I help you?</Message.Text>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
