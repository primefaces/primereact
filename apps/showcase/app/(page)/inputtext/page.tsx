import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/inputtext/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React InputText Component',
    description: 'InputText is an extension to standard input element with theming.'
};

export default function InputTextPage() {
    const docs = {
        features
    };

    return <DocComponent header="InputText" description={metadata.description} docs={docs} apiKeys={['InputText']} />;
}
