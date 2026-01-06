'use client';

import { Message } from 'primereact/message';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Message.Root size="small">
                <Message.Content>
                    <Message.Icon className="pi pi-send" />
                    <Message.Text>Small Message</Message.Text>
                </Message.Content>
            </Message.Root>
            <Message.Root>
                <Message.Content>
                    <Message.Icon className="pi pi-send" />
                    <Message.Text>Normal Message</Message.Text>
                </Message.Content>
            </Message.Root>
            <Message.Root size="large">
                <Message.Content>
                    <Message.Icon className="pi pi-send" />
                    <Message.Text>Large Message</Message.Text>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
