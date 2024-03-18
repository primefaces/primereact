import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function UsePassThroughDoc(props) {
    const code1 = {
        basic: `
import React from 'react'; 
import { PrimeReactProvider } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";

export default function UsePassThroughDemo() {

    const CustomTailwind = usePassThrough(
        Tailwind,
        {
            panel: {
                title: {
                    className: 'leading-none font-light text-2xl'
                }
            }
        },
        {
            mergeSections: true,
            mergeProps: false
        }
    );

    return(
        <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>
            <App />
        </PrimeReactProvider>
    )
}
    `
    };
    const code2 = {
        basic: `
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: false }
);

// Output: 
// panel.header.className => 'my_panel_header'
// panel.title.className => Tailwind.panel.title.className`
    };
    const code3 = {
        basic: `
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: true }
);

// Output: 
// panel.header.className => classNames(Tailwind.panel.header.className, 'my_panel_header')
// panel.title.className => Tailwind.panel.title.className
`
    };
    const code4 = {
        basic: `
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: true }
);

// Output: 
// panel.header.className => classNames(Tailwind.panel.header.className, 'my_panel_header')
// panel.title.className => undefined
`
    };
    const code5 = {
        basic: `
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: false }
);

// Output: 
// panel.header.className => 'my_panel_header'
// panel.title.className => undefined
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    An existing pass through configuration is customized with the <i>usePassThrough</i> utility. The first parameter is the object to customize, the second parameter is the customizations and the final parameter is the behavior of
                    merging. One of the example use cases is customizing existing unstyled themes like Tailwind.
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideStackBlitz />
                <p>
                    The <i>mergeSections</i> defines whether the sections from the main configuration gets added and the <i>mergeProps</i> controls whether to override or merge the defined props. Defaults are <i>true</i> for <i>mergeSections</i> and
                    <i>false</i> for <i>mergeProps</i>.
                </p>
                <p>
                    Some CSS libraries, such as <i>Tailwind</i>, require that class names be merged in a non-conflicting manner. In order to support them a <i>classNameMergeFunction</i> may be passed as part of the <i>ptOptions</i> object to manually
                    define how class names will be merged.
                </p>
            </DocSectionText>
            <DocSectionCode code={code2} hideToggleCode import hideStackBlitz />
            <DocSectionCode code={code3} hideToggleCode import hideStackBlitz />
            <DocSectionCode code={code4} hideToggleCode import hideStackBlitz />
            <DocSectionCode code={code5} hideToggleCode import hideStackBlitz />
        </>
    );
}
