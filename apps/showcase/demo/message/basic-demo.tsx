'use client';

import { Message } from 'primereact/message';

export default function BasicDemo() {
    return (
        <div>
            <Message>
                <Message.Content>
                    <Message.Text>Message Content</Message.Text>
                </Message.Content>
            </Message>
        </div>
    );
}
