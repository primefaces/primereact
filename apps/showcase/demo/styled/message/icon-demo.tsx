import { Avatar } from '@primereact/ui/avatar';
import { Message } from '@primereact/ui/message';

export default function IconDemo() {
    return (
        <div className="max-w-sm mx-auto space-y-4">
            <Message.Root severity="warn">
                <Message.Content>
                    <Message.Icon className="pi pi-receipt" />
                    <Message.Text>
                        Your subscription is about to expire.{' '}
                        <a href="" className=" decoration-1! underline!">
                            Renew
                        </a>
                    </Message.Text>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="info">
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
