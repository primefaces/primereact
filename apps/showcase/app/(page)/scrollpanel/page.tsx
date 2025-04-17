import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/scrollpanel/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React ScrollPanel Component',
    description: 'ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.'
};

export default function ScrollPanelPage() {
    const docs = {
        features
    };

    return <DocComponent header="ScrollPanel" description={metadata.description} docs={docs} apiKeys={['ScrollPanel']} />;
}
