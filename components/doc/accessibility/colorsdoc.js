import { DocSectionText } from '../common/docsectiontext';

export function ColorsDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Colors on a web page should aim a contrast ratio of at least <strong>4.5:1</strong> and consider a selection of colors that do not cause vibration.
                </p>
            </DocSectionText>
            <h3>Good Contrast</h3>
            <p className="doc-section-description">Color contrast between the background and the foreground content should be sufficient enough to ensure readability. Example below displays two cases with good and bad samples.</p>

            <div className="flex">
                <div className="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-600" style={{ borderRadius: '10px' }}>
                    <span className="text-white">GOOD</span>
                </div>
                <div className="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-400" style={{ borderRadius: '10px' }}>
                    <span className="text-white">BAD</span>
                </div>
            </div>

            <h3>Vibration</h3>
            <p className="doc-section-description">Color vibration is leads to an illusion of motion due to choosing colors that have low visibility against each other. Color combinations need to be picked with caution to avoid vibration.</p>

            <div className="flex">
                <div className="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-pink-500" style={{ borderRadius: '10px' }}>
                    <span className="text-blue-500">VIBRATE</span>
                </div>
            </div>

            <h3>Dark Mode</h3>
            <p className="doc-section-description">Highly saturated colors should be avoided when used within a dark design scheme as they cause eye strain. Instead desaturated colors should be preferred.</p>

            <div className="flex">
                <div className="h-8rem w-8rem flex flex-column justify-content-center align-items-center mr-5 font-bold bg-gray-900" style={{ borderRadius: '10px' }}>
                    <span className="text-indigo-500">Indigo 500</span>
                    <i className="text-indigo-500 pi pi-times-circle mt-3 text-xl"></i>
                </div>
                <div className="h-8rem w-8rem flex flex-column justify-content-center align-items-center mr-5 font-bold bg-gray-900" style={{ borderRadius: '10px' }}>
                    <span className="text-indigo-200">Indigo 200</span>
                    <i className="text-indigo-200 pi pi-check-circle mt-3 text-xl"></i>
                </div>
            </div>
        </>
    );
}
