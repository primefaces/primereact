import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CustomizationDocDoc(props) {
    const code1 = {
        basic: `
panel: {
    header: ({ props }) => ({
        className: [
            'flex items-center justify-between', // flex and alignments
            'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
            'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
            { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
        ]
    }),
    title: {
        className: ['leading-none font-bold']
    },
    toggler: {
        className: [
            'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
            'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
            'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
        ]
    },
    togglerIcon: {
        className: ['inline-block']
    },
    content: {
        className: [
            'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
            'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
        ] // padding, borders, and colors
    }
}`
    };
    const code2 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export default function MyApp({ Component }) {
    //Tailwind customization
    const CustomTailwindTheme = {...Tailwind};
    CustomTailwindTheme.panel.title = {
    className: ['leading-none font-light text-2xl']
    };

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwindTheme }}>
            <App />
        </PrimeReactProvider>
    );
}
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The built-in theme provides a strong base that can be extended further for your requirements. For customization, the pass through values need to be overriden. The unstyled section of the theming documentation for each component
                    demonstrates the theme with an editable example. For instance, the panel component has the following default configuration.
                </p>
            </DocSectionText>
            <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
            <p>
                Let's assume the <i>title</i> section should be lighter and bigger. To begin with, clone the Tailwind theme to create your own, override the default values with your own utility classes and finally configure your own theme object as
                the
                <i>pt</i> of PrimeReact.
            </p>
            <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
