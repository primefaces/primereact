import { Accordion } from 'primereact/accordion';
import * as React from 'react';

export default function ControlledDemo() {
    const [active, setActive] = React.useState('0');

    return (
        <div className="card ">
            <div className="flex mb-4 gap-2 justify-end">
                {/* <Button onClick={() => setActive('0')} rounded label="1" className="w-8 h-8 p-0" outlined={active !== '0'} />
                <Button onClick={() => setActive('1')} rounded label="2" className="w-8 h-8 p-0" outlined={active !== '1'} />
                <Button onClick={() => setActive('2')} rounded label="3" className="w-8 h-8 p-0" outlined={active !== '2'} /> */}
            </div>

            <Accordion value={active}>
                <Accordion.Panel value={0}>
                    <Accordion.Header>
                        Header I
                        <Accordion.CollapseIcon />
                        <Accordion.ExpandIcon />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value={1}>
                    <Accordion.Header>
                        Header II
                        <Accordion.CollapseIcon />
                        <Accordion.ExpandIcon />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value={2}>
                    <Accordion.Header>
                        Header III
                        <Accordion.CollapseIcon />
                        <Accordion.ExpandIcon />
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
