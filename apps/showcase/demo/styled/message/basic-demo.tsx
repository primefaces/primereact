'use client';

import { Message } from 'primereact/message';

export default function BasicDemo() {
    return (
        <div>
            <Message.Root>
                <Message.Content>
                    <Message.Text>Message Content</Message.Text>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
