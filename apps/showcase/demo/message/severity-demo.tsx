'use client';

import { Message } from 'primereact/message';

export default function SeverityDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Message severity="success">
                <Message.Content>
                    <Message.Text>Success Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="info">
                <Message.Content>
                    <Message.Text>Info Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="warn">
                <Message.Content>
                    <Message.Text>Warn Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="error">
                <Message.Content>
                    <Message.Text>Error Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="secondary">
                <Message.Content>
                    <Message.Text>Secondary Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="contrast">
                <Message.Content>
                    <Message.Text>Contrast Message</Message.Text>
                </Message.Content>
            </Message>
        </div>
    );
}
