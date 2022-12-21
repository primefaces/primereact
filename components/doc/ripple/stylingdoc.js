import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Ripple } from '../../lib/ripple/Ripple';

export function CustomDoc(props) {
    const code = {
        basic: `
<div className="card shadow-2 p-ripple styled-box-green">
    Green
    <Ripple />
</div>
<div className="card shadow-2 p-ripple styled-box-orange">
    Orange
    <Ripple />
</div>
<div className="card shadow-2 p-ripple styled-box-purple">
    Purple
    <Ripple />
</div>
        `,
        javascript: `
import React from 'react';
import { Ripple } from 'primereact/ripple';
import './RippleDemo.css';

export const CustomDoc = () => {

    return (
        <div className="card flex justify-content-center gap-2">
            <div className="card shadow-2 p-ripple styled-box-green">
                Green
                <Ripple />
            </div>
            <div className="card shadow-2 p-ripple styled-box-orange">
                Orange
                <Ripple />
            </div>
            <div className="card shadow-2 p-ripple styled-box-purple">
                Purple
                <Ripple />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Ripple } from 'primereact/ripple';
import './RippleDemo.css';

export const CustomDoc = () => {

    return (
        <div className="card flex justify-content-center gap-2">
            <div className="card shadow-2 p-ripple styled-box-green">
                Green
                <Ripple />
            </div>
            <div className="card shadow-2 p-ripple styled-box-orange">
                Orange
                <Ripple />
            </div>
            <div className="card shadow-2 p-ripple styled-box-purple">
                Purple
                <Ripple />
            </div>
        </div>
    );
}
        `,

        css: `
/* RippleDemo.css */

.card.styled-box-green .p-ink {
    background: rgba(75, 175, 80, 0.3);
}

.card.styled-box-orange .p-ink {
    background: rgba(255, 193, 6, 0.3);
}

.card.styled-box-purple .p-ink {
    background: rgba(156, 39, 176, 0.3);
}

.card:last-child {
    margin-right: 0;
}
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Styling Demo Content.</p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-2">
                <div className="card shadow-2 p-ripple styled-box-green">
                    Green
                    <Ripple />
                </div>
                <div className="card shadow-2 p-ripple styled-box-orange">
                    Orange
                    <Ripple />
                </div>
                <div className="card shadow-2 p-ripple styled-box-purple">
                    Purple
                    <Ripple />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
