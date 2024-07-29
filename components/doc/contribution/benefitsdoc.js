import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function BenefitsDoc(props) {

    return (
        <DocSectionText {...props}>
           <p>
                Contributing to PrimeReact comes with several benefits. Being part of an open-source project will enhance your career and open up exciting opportunities. Contributors and Committers will be listed on our <Link href="/team">team page</Link>. You'll gain significant visibility in the developer community while improving yourself as a professional.
            </p>
            <p>You'll be invited to a private communication channel at Discord to get in touch with PrimeTek. In addition, contributors have access to all PrimeReact add-ons like Premium Templates, Blocks, and UI Kit free of charge.</p>
        </DocSectionText>
    );
}
