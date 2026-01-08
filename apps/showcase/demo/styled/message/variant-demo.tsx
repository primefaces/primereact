import { Message } from '@primereact/ui/message';

export default function VariantDemo() {
    return (
        <div className="space-y-8 max-w-sm mx-auto">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Outlined</h3>
                <Message.Root severity="success" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-check" />
                        <Message.Text>Your account is now ready.</Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="info" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-sparkles" />
                        <Message.Text>
                            <a href="" className=" decoration-1! underline!">
                                Upgrade
                            </a>{' '}
                            now and save %5.
                        </Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="warn" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-receipt" />
                        <Message.Text>
                            Your subscription is about to expire.{' '}
                            <a href="" className=" decoration-1! underline!">
                                Renew
                            </a>
                        </Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="error" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-exclamation-triangle" />
                        <Message.Text>
                            Something went wrong. Please{' '}
                            <a href="" className=" decoration-1! underline!">
                                try again
                            </a>
                            .
                        </Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="secondary" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-spinner animate-spin" />
                        <Message.Text>Processing may take a few moments.</Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="contrast" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-wifi" />
                        <Message.Text>You’re currently in offline mode.</Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Simple</h3>
                <Message.Root severity="success" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-check" />
                        <Message.Text>Your account is now ready.</Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="info" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-sparkles" />
                        <Message.Text>
                            <a href="" className=" decoration-1! underline!">
                                Upgrade
                            </a>{' '}
                            now and save %5.
                        </Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="warn" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-receipt" />
                        <Message.Text>
                            Your subscription is about to expire.{' '}
                            <a href="" className=" decoration-1! underline!">
                                Renew
                            </a>
                        </Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="error" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-exclamation-triangle" />
                        <Message.Text>
                            Something went wrong. Please{' '}
                            <a href="" className=" decoration-1! underline!">
                                try again
                            </a>
                            .
                        </Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="secondary" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-spinner animate-spin" />
                        <Message.Text>Processing may take a few moments.</Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="contrast" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-wifi" />
                        <Message.Text>You’re currently in offline mode.</Message.Text>
                        <Message.Close />
                    </Message.Content>
                </Message.Root>
            </div>
        </div>
    );
}
