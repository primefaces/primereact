'use client';

import { Divider } from 'primereact/divider';

export default function DividerPT() {
    return (
        <div>
            <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

            <Divider align="left" type="solid">
                <Divider.Content>
                    <b>Left</b>
                </Divider.Content>
            </Divider>

            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

            <Divider align="center" type="dotted">
                <Divider.Content>
                    <b>Center</b>
                </Divider.Content>
            </Divider>

            <p className="m-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispti.</p>

            <Divider align="right" type="dashed">
                <Divider.Content>
                    <b>Right</b>
                </Divider.Content>
            </Divider>

            <p className="m-0">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.</p>
        </div>
    );
}
