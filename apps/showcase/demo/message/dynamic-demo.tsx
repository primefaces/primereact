'use client';

import { MessageProps } from '@primereact/types/shared/message';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import * as React from 'react';

export default function DynamicDemo() {
    const [messages, setMessages] = React.useState<MessageProps[]>([]);

    const addMessages = () => {
        setMessages([
            { severity: 'info', content: 'Dynamic Info Message' },
            { severity: 'success', content: 'Dynamic Success Message' },
            { severity: 'warn', content: 'Dynamic Warn Message' }
        ]);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-2">
                <Button onClick={addMessages}>Add Messages</Button>
                <Button severity="secondary" onClick={clearMessages}>
                    Clear Messages
                </Button>
            </div>
            {messages.map((item, index) => (
                <Message key={index} severity={item.severity}>
                    <Message.Content>
                        <Message.Text>{item.content}</Message.Text>
                    </Message.Content>
                </Message>
            ))}
        </div>
    );
}
