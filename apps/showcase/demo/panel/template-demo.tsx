import { Motion } from '@primereact/core/motion';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import * as React from 'react';

export default function TemplateDemo() {
    const [show, setShow] = React.useState(true);

    return (
        <div className="card">
            <Panel toggleable>
                <Panel.Header>
                    <Panel.Title>
                        <div className="flex items-center gap-2">
                            <Avatar shape="circle">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                                <Avatar.Fallback>A</Avatar.Fallback>
                            </Avatar>
                            <span className="font-bold">Amy Elsner</span>
                        </div>
                    </Panel.Title>
                    <Panel.HeaderActions>
                        <Button severity="secondary" rounded variant="text" iconOnly>
                            <i className="pi pi-cog" />
                        </Button>
                        <Button onClick={() => setShow((prev) => !prev)} rounded variant="text" iconOnly>
                            {show ? <MinusIcon /> : <PlusIcon />}
                        </Button>
                    </Panel.HeaderActions>
                </Panel.Header>
                <Motion in={show} name="p-toggleable-content">
                    <Panel.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <Button iconOnly rounded variant="text">
                                    <i className="pi pi-user" />
                                </Button>
                                <Button severity="secondary" iconOnly rounded variant="text">
                                    <i className="pi pi-bookmark" />
                                </Button>
                            </div>
                            <span className="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                        </div>
                    </Panel.Content>
                </Motion>
            </Panel>
        </div>
    );
}
