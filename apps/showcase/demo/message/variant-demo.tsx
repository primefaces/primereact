'use client';

import { Message } from 'primereact/message';

export default function VariantDemo() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Outlined</h3>
                <div className="flex items-center gap-4">
                    <Message severity="success" variant="outlined">
                        <Message.Content>
                            <Message.Text>Success Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="info" variant="outlined">
                        <Message.Content>
                            <Message.Text>Info Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="warn" variant="outlined">
                        <Message.Content>
                            <Message.Text>Warn Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="error" variant="outlined">
                        <Message.Content>
                            <Message.Text>Error Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="secondary" variant="outlined">
                        <Message.Content>
                            <Message.Text>Secondary Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="contrast" variant="outlined">
                        <Message.Content>
                            <Message.Text>Contrast Message</Message.Text>
                        </Message.Content>
                    </Message>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Simple</h3>
                <div className="flex items-center gap-4">
                    <Message severity="success" variant="simple">
                        <Message.Content>
                            <Message.Text>Success Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="info" variant="simple">
                        <Message.Content>
                            <Message.Text>Info Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="warn" variant="simple">
                        <Message.Content>
                            <Message.Text>Warn Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="error" variant="simple">
                        <Message.Content>
                            <Message.Text>Error Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="secondary" variant="simple">
                        <Message.Content>
                            <Message.Text>Secondary Message</Message.Text>
                        </Message.Content>
                    </Message>
                    <Message severity="contrast" variant="simple">
                        <Message.Content>
                            <Message.Text>Contrast Message</Message.Text>
                        </Message.Content>
                    </Message>
                </div>
            </div>
        </div>
    );
}
