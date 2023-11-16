import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function CRADoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a alt="Create React App" href="https://create-react-app.dev/">
                        Create-React-App
                    </a>{' '}
                    is the official scaffolding project by Facebook.
                </p>
            </DocSectionText>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Prz3phy2bHY" frameBorder="0" allowFullScreen title="Getting Started With PrimeReact"></iframe>
            </div>
        </>
    );
}
