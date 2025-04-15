import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/terminal/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Terminal Component',
    description: 'Terminal is a text based user interface.'
};

export default function TerminalPage() {
    const docs = {
        features
    };

    return <DocComponent header="Terminal" description={metadata.description} docs={docs} apiKeys={['Terminal']} />;
}
