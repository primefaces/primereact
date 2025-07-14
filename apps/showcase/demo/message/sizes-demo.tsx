import { Message } from 'primereact/message';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <Message size="small">
                <Message.Content>
                    <Message.Icon className="pi pi-send" />
                    <Message.Text>Small Message</Message.Text>
                </Message.Content>
            </Message>
            <Message>
                <Message.Content>
                    <Message.Icon className="pi pi-send" />
                    <Message.Text>Normal Message</Message.Text>
                </Message.Content>
            </Message>
            <Message size="large">
                <Message.Content>
                    <Message.Icon className="pi pi-send" />
                    <Message.Text>Large Message</Message.Text>
                </Message.Content>
            </Message>
        </div>
    );
}
