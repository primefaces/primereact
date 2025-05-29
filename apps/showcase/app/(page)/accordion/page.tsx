import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/accordion/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Accordion Component',
    description: 'Accordion groups a collection of contents in panels.'
};

export default function AccordionPage() {
    const docs = {
        features
    };

    return <DocComponent header="Accordion" description={metadata.description} docs={docs} apiKeys={['Accordion']} />;
}
