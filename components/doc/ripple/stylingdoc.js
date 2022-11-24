import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Ripple } from '../../lib/ripple/Ripple';

export function CustomDoc(props) {
    const code = {
        basic: `
<div className="card styled-box-green p-ripple">
    Green
    <Ripple />
</div>
<div className="card styled-box-orange p-ripple">
    Orange
    <Ripple />
</div>
<div className="card styled-box-purple p-ripple">
    Purple
    <Ripple />
</div>
        `,
        javascript: `
import React from 'react';
import { Ripple } from 'primereact/ripple';

export const CustomDoc = () => {

    return (
        <div className="card-container flex">
            <div className="card styled-box-green p-ripple">
                Green
                <Ripple />
            </div>
            <div className="card styled-box-orange p-ripple">
                Orange
                <Ripple />
            </div>
            <div className="card styled-box-purple p-ripple">
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

export const CustomDoc = () => {

    return (
        <div className="card-container flex">
            <div className="card styled-box-green p-ripple">
                Green
                <Ripple />
            </div>
            <div className="card styled-box-orange p-ripple">
                Orange
                <Ripple />
            </div>
            <div className="card styled-box-purple p-ripple">
                Purple
                <Ripple />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Styling Demo Content.</p>
            </DocSectionText>
            <div className="card-container flex justify-content-center">
                <div className="card styled-box-green p-ripple">
                    Green
                    <Ripple />
                </div>
                <div className="card styled-box-orange p-ripple">
                    Orange
                    <Ripple />
                </div>
                <div className="card styled-box-purple p-ripple">
                    Purple
                    <Ripple />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
