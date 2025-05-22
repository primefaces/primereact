import { Accordion } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    return (
        <div className="card">
            <Accordion value="0">
                <Accordion.Panel value="0">
                    <Accordion.Header>
                        <span className="flex items-center gap-2 w-full">
                            <Avatar shape="circle">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            </Avatar>
                            <span className="font-bold whitespace-nowrap">Amy Elsner</span>
                            <Badge value="3" className="ml-auto mr-2" />
                        </span>
                        <Accordion.ExpandIcon asChild>
                            <i className="pi pi-plus" />
                        </Accordion.ExpandIcon>
                        <Accordion.CollapseIcon asChild>
                            <i className="pi pi-minus" />
                        </Accordion.CollapseIcon>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <span className="flex items-center gap-2 w-full">
                            <Avatar shape="circle">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                            </Avatar>
                            <span className="font-bold whitespace-nowrap">Onyama Limba</span>
                            <Badge value="4" className="ml-auto mr-2" />
                        </span>
                        <Accordion.ExpandIcon asChild>
                            <i className="pi pi-plus" />
                        </Accordion.ExpandIcon>
                        <Accordion.CollapseIcon asChild>
                            <i className="pi pi-minus" />
                        </Accordion.CollapseIcon>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        <span className="flex items-center gap-2 w-full">
                            <Avatar shape="circle">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                            </Avatar>
                            <span className="font-bold whitespace-nowrap">Ioni Bowcher</span>
                            <Badge value="2" className="ml-auto mr-2" />
                        </span>
                        <Accordion.ExpandIcon asChild>
                            <i className="pi pi-plus" />
                        </Accordion.ExpandIcon>
                        <Accordion.CollapseIcon asChild>
                            <i className="pi pi-minus" />
                        </Accordion.CollapseIcon>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}
