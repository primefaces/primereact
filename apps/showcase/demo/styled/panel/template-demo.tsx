import { Bookmark } from '@primeicons/react/bookmark';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Cog } from '@primeicons/react/cog';
import { User } from '@primeicons/react/user';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Panel } from '@primereact/ui/panel';

export default function TemplateDemo() {
    return (
        <Panel.Root defaultOpen>
            <Panel.Header>
                <Panel.Title>
                    <div className="flex items-center gap-2">
                        <Avatar.Root shape="circle">
                            <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <Avatar.Fallback>A</Avatar.Fallback>
                        </Avatar.Root>
                        <span className="font-bold">Amy Elsner</span>
                    </div>
                </Panel.Title>
                <div className="flex items-center gap-1">
                    <Button severity="secondary" rounded variant="text" iconOnly>
                        <Cog />
                    </Button>
                    <Panel.Trigger>
                        <ChevronDown className="transition-transform duration-200 [[data-open]_&]:rotate-180" />
                    </Panel.Trigger>
                </div>
            </Panel.Header>
            <Panel.Content>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <Button iconOnly rounded variant="text">
                            <User />
                        </Button>
                        <Button severity="secondary" iconOnly rounded variant="text">
                            <Bookmark />
                        </Button>
                    </div>
                    <span className="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                </div>
            </Panel.Content>
        </Panel.Root>
    );
}
