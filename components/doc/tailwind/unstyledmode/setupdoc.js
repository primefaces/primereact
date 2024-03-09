import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Badge } from '@/components/lib/badge/Badge';

export function SetupDoc(props) {
    const code1 = {
        basic: `
module.exports = {
    ...
    content: [
        "./index.html",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

        // Or if using \`\src\` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      ...
    }
`
    };
    const code2 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
        <App />
    </PrimeReactProvider>
)
 
`
    };

    const code3 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <App />
    </PrimeReactProvider>
)
 
`
    };

    const code4 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from 'tailwind-merge';

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: {}, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
        <App />
    </PrimeReactProvider>
)
 
`
    };

    const code5 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";

export default function MyApp({ Component, pageProps }) {
    
    //My Design System with Tailwind
    const MyDesignSystem = {
        inputtext: {
            root: ({ props, context }) => ({
                className: classNames(
                    'm-0',
                    'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                    {
                        'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                    },
                    {
                        'text-lg px-4 py-4': props.size == 'large',
                        'text-xs px-2 py-2': props.size == 'small',
                        'p-3 text-base': props.size == null
                    }
                )
            })
        },
        panel: {
            header: ({ props }) => ({
                className: classNames(
                    'flex items-center justify-between', // flex and alignments
                    'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                    { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
                )
            }),
            title: 'leading-none font-bold',
            toggler: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                    'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                    'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
                )
            },
            togglerIcon: 'inline-block',
            content: {
                className: classNames(
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                )
            },
            transition: TRANSITIONS.toggleable
        } 
    };

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: MyDesignSystem }}>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}
 
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides </a>like Vite for the installation
                    and make sure to apply the CSS layer configuration above when including the styles of Tailwind as well.
                </p>
                <p className="flex align-items-start gap-2">
                    <Badge value="1"></Badge>
                    <span>
                        Tailwind uses PurgeCSS internally to remove unused classes, as PrimeReact components are loaded from <i>node_modules</i> the <i>content</i> property at <i>tailwind.config.js</i> needs to be aware of PrimeReact, otherwise the
                        classes utilized in the theme will be removed as well.
                    </span>
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideStackBlitz />
                <p className="flex align-items-start gap-2">
                    <Badge value="2"></Badge>
                    <span>
                        Next step is enabling the <i>unstyled</i> option to remove the default style classes from the components and adding an empty <i>pt</i> so that they can be styled with Tailwind in the next section. Note that if you run your
                        application at this stage, functionality and accessibility of the components will still work but everything will be transparent as there is no style.
                    </span>
                </p>
                <DocSectionCode code={code2} hideToggleCode import hideStackBlitz />
                <p className="flex align-items-start gap-2">
                    <Badge value="3"></Badge>
                    <span>
                        <b>Optional:</b> specify the built in <i>Tailwind</i> style of pre-configured Tailwind settings.
                    </span>
                </p>
                <DocSectionCode code={code3} hideToggleCode import hideStackBlitz />
                <p className="flex align-items-start gap-2">
                    <Badge value="4"></Badge>
                    <span>
                        <b>Optional:</b> specify the classNameMergeFunction as <i>twMerge</i> to resolve className conflicts via <a href="https://www.npmjs.com/package/tailwind-merge">tailwind-merge</a>. This will prevent classNames specified in the
                        global pass through from overriding those specified via pass through in your application.
                    </span>
                </p>
                <DocSectionCode code={code4} hideToggleCode import hideStackBlitz />
                <p className="flex align-items-start gap-2">
                    <Badge value="5"></Badge>
                    <span>
                        At the final step, component styles are provided via a pass through configuration that utilizes Tailwind CSS. The default preset of each component is available at the Tailwind part under theming section of each component so
                        you'll able to copy paste instead of starting from scratch. Example below styles, inputtext and panel components;
                    </span>
                </p>
                <DocSectionCode code={code5} hideToggleCode import hideStackBlitz />
                <p>Voilà 💙, you now have 90+ awesome React UI components styled with Tailwind that will work in harmony with the rest of your application. Time to customize it to bring in your own style with Tailwind.</p>
            </DocSectionText>
        </>
    );
}
