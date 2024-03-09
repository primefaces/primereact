import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Panel } from '@/components/lib/panel/Panel';
import css from 'styled-jsx/css';

export function CssInJsDoc(props) {
    const { className, styles } = css.resolve`
        .p-panel > :global(.p-panel-header) {
            background-color: #54b5a6;
            color: #ffffff;
        }
    `;

    const code = {
        basic: `
import React from 'react';
import { Panel } from 'primereact/panel';
import css from 'styled-jsx/css';

export default function PanelDemo() {
    const {className, styles} = css.resolve\`
        .p-panel > :global(.p-panel-header) {
            background-color: #54b5a6;
            color: #ffffff;
        }
    \`;

    return (
        <>
            <style jsx>{styles}</style>
            <Panel header="CSS Module" className={className}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    CSS-in-JS solutions are also popular to implement scoped css, as an example we'll be using <a href="https://github.com/vercel/styled-jsx">styled-jsx</a> to customize our panel. Note that use of <i>:global</i> does not make the
                    styling global and only removes the namespacing from the inner element as it is enough to scope the main container element, in this case <i>.p-panel</i>.
                </p>
            </DocSectionText>
            <style>{styles}</style>
            <div className="card">
                <Panel header="Styled Component" className={className}>
                    <p className="p-0 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
            </div>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
