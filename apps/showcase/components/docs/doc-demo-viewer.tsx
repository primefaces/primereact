import React from 'react';
import DocComponentShowcase from './doc-component-showcase';

export default async function DocDemoViewer({ name, hideCode, ...props }: React.ComponentProps<'div'> & { name: string; hideCode?: boolean }) {
    return (
        <DocComponentShowcase
            tailwind={{
                demo: name,
                names: [name]
            }}
            styled={{
                demo: name,
                names: [name]
            }}
            hideCode={hideCode}
            {...props}
        />
    );
    // const [component, demo] = name.split(':');

    // const Component = Store[component]?.[demo]?.component;

    // if (!Component) {
    //     return (
    //         <div className="card">
    //             <p className="text-center">
    //                 The component referenced as <code className="bg-surface-100 dark:bg-surface-800 p-1 rounded-md ">{name}</code> is unavailable or does not exist.
    //             </p>
    //         </div>
    //     );
    // }

    // let highlightedCode = undefined;
    // let source = undefined;

    // if (!hideCode) {
    //     const filePath = `demo/${component}/${demo}.tsx`;

    //     source = await fs.readFile(path.join(process.cwd(), filePath), 'utf8');

    //     highlightedCode = await highlightCode(source);
    // }

    // return <DocDemoWrapper className={className} name={name} component={<Component />} source={source} highlightedCode={highlightedCode} {...props} />;
}
