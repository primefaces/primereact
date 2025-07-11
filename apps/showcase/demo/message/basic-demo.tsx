import { Message } from 'primereact/message';

export default function BasicDemo() {
    return (
        <div className="card">
            <Message>
                <Message.Content>
                    <Message.Text>Message Content</Message.Text>
                </Message.Content>
            </Message>
        </div>
    );
}
