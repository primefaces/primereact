import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function IntroductionDoc(props) {
    const code = {
            code1: {
                basic: `
git clone https://github.com/primefaces/primereact.git
cd primereact
`
            },
            code2: {
                basic: `
npm install
npm run dev
`
            },
            code3: {
                basic: `
- components
    - doc // Documentations
    - lib // Components
- pages // Routing Pages
- styles // Themes and Styles
- service // Demo Services

`
        }
    };

    return (
        <DocSectionText {...props}>
            <p>
                PrimeReact is a popular Vue UI library maintained by PrimeTek, a company renowned for its comprehensive set of UI components for various frameworks. PrimeTek is dedicated to providing high-quality, versatile, and accessible UI components
                that help developers build better applications faster.
            </p>
            <h3>Development Setup</h3>
            <p>To begin with, clone the PrimeReact repository from GitHub</p>
            <DocSectionCode code={code.code1} hideToggleCode hideStackBlitz />
            <p>Then run the showcase in your local environment at <i>http://localhost:3000/</i>.</p>
            <DocSectionCode code={code.code2} hideToggleCode hideStackBlitz />
            <h3>Project Structure</h3>

            <DocSectionCode code={code.code3} hideToggleCode hideStackBlitz />
        </DocSectionText>
    );
}
