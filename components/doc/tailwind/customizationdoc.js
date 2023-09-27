import Link from 'next/link';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CustomizationDocDoc(props) {
    const code1 = {
        basic: `
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
}`
    };
    const code2 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export default function MyApp({ Component }) {
    //Tailwind customization
    const CustomTailwind = usePassThrough(
        Tailwind,
        {
            panel: {
                title: 'leading-none font-light text-2xl'
            }
        },
        { mergeSections: true, mergeProps: false }
    );

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>
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
                    The built-in preset is based on the PrimeOne Design and meant to serve as a template to implement your own design. For customization, the pass through values need to be overriden or defined from the ground up. The unstyled section
                    of the theming documentation for each component demonstrates the theme with an editable example. For the complete list visit the{' '}
                    <Link href="https://github.com/primefaces/primereact/tree/master/components/lib/passthrough/tailwind">Tailwind Preset</Link>.
                </p>
                <p>First approach is building everything from the ground up and consult the default preset to get hints about the implementation details. This technique is suggested when implementing your own design system.</p>

                <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>
                    Alternative way is overriding the opinionated PrimeOne theme with <i> usePassThrough</i>. This approach is suggested when you prefer to customize the default preset for your own requirements. For the merge configuration behavior,
                    visit
                    <Link href="/passthrough/#usepassthrough"> usePassThrough</Link> documentation.
                </p>
            </DocSectionText>
            <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
