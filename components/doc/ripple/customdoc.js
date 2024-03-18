import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Ripple } from '@/components/lib/ripple/Ripple';

export function CustomDoc(props) {
    const code = {
        basic: `
<div className="p-ripple p-5 border-round border-radius-10 shadow-2">
    Green
    <Ripple
        pt={{
            root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
        }}
    />
</div>
<div className="p-ripple p-5 border-round border-radius-10 shadow-2">
    Orange
    <Ripple
        pt={{
            root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
        }}
    />
</div>
<div className="p-ripple p-5 border-round border-radius-10 shadow-2">
    Purple
    <Ripple
        pt={{
            root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
        }}
    />
</div>
        `,
        javascript: `
import React from 'react';
import { Ripple } from 'primereact/ripple';

export default function CustomDemo() {
    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Green
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Orange
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Purple
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
                    }}
                />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Ripple } from 'primereact/ripple';

export default function CustomDemo() {
    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Green
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Orange
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Purple
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
                    }}
                />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>p-ink</i> element.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center gap-2">
                <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                    Green
                    <Ripple
                        pt={{
                            root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
                        }}
                    />
                </div>
                <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                    Orange
                    <Ripple
                        pt={{
                            root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
                        }}
                    />
                </div>
                <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                    Purple
                    <Ripple
                        pt={{
                            root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
                        }}
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
