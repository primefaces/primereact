import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Fieldset } from '@/components/lib/fieldset/Fieldset';

export function PTDoc(props) {
    const code = {
        basic: `
<Fieldset
    legend="Header"
    toggleable
    pt={{
        legend: { className: 'bg-primary' },
        legendTitle: { className: 'text-white' },
        togglerIcon: { className: 'text-white' }
    }}
    >
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, suntin culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
        `,
        javascript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function PTDemo() {
    return (
        <div className="card">
            <Fieldset
            legend="Header"
            toggleable
            pt={{
                legend: { className: 'bg-primary' },
                legendTitle: { className: 'text-white' },
                togglerIcon: { className: 'text-white' }
            }}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Fieldset>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function PTDemo() {
    return (
        <div className="card">
            <Fieldset
            legend="Header"
            toggleable
            pt={{
                legend: { className: 'bg-primary' },
                legendTitle: { className: 'text-white' },
                togglerIcon: { className: 'text-white' }
            }}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Fieldset>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Fieldset
                    legend="Header"
                    toggleable
                    pt={{
                        legend: { className: 'bg-primary' },
                        legendTitle: { className: 'text-white' },
                        togglerIcon: { className: 'text-white' }
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
