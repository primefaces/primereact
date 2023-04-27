import { DocSectionText } from '../common/docsectiontext';

export function IntroductionDoc(props) {
    return (
        <>
            <p className="line-height-3 bg-indigo-600 text-white p-3 text-lg" style={{ borderRadius: '10px' }}>
                Accessibility is a major concern of the Prime UI libraries and PrimeReact is no exception.{' '}
                <a href="https://www.primetek.com.tr" className="text-white">
                    PrimeTek
                </a>{' '}
                teams have initiated a significant process to review and enhance the accessibility features of the components. This guide documents the foundation of the general guidelines that PrimeReact will follow and each component documentation
                will have a separate <b>Accessibility</b> section that states the keyboard support, screen reader compatibility, the implementation details along with tips to achieve WCAG compliancy. This work has been completed for PrimeVue as the
                reference implementation and currently being ported to PrimeReact to be finalized in Q2 2023.
            </p>
            <DocSectionText {...props}>
                <p>
                    According to the World Health Organization, 15% of the world population has a disability to some degree. As a result, accessibility features in any context such as a ramp for wheelchair users or a multimedia with captions are
                    crucial to ensure content can be consumed by anyone.
                </p>
                <p>Types of disabilities are diverse so you need to know your audience well and how they interact with the content created. There four main categories;</p>
            </DocSectionText>

            <h3>Visual Impairments</h3>
            <p className="doc-section-description">
                Blindness, low-level vision or color blindness are the common types of visual impairments. Screen magnifiers and the color blind mode are usually built-in features of the browsers whereas for people who rely on screen readers, page
                developers are required to make sure content is readable by the readers. Popular readers are{' '}
                <a href="https://www.nvaccess.org" alt="NVDA Reader">
                    NVDA
                </a>
                ,{' '}
                <a href="https://www.freedomscientific.com/Products/software/JAWS/" alt="JAWS Reader">
                    JAWS
                </a>{' '}
                and{' '}
                <a href="https://www.chromevox.com" alt="ChromeVox Reader">
                    ChromeVox
                </a>
                .
            </p>

            <h3>Hearing Impairments</h3>
            <p className="doc-section-description">
                Deafness or hearing loss refers to the inability to hear sounds totally or partially. People with hearing impairments use assistive devices however it may not be enough when interacting with a web page. Common implementation is
                providing textual alternatives, transcripts and captions for content with audio.
            </p>

            <h3>Mobility Impairments</h3>
            <p className="doc-section-description">
                People with mobility impairments have disabilities related to movement due to loss of a limb, paralysis or other varying reasons. Assistive technologies like a head pointer is a device to interact with a screen whereas keyboard or a
                trackpad remain as solutions for people who are not able to utilize a mouse.
            </p>

            <h3>Cognitive Impairments</h3>
            <p className="doc-section-description">
                Cognitive impairments have a wider range that includes people with learning disabilities, depression and dyslexia. A well designed content also leads to better user experience for people without disabilities so designing for cognitive
                impairments result in better design for any user.
            </p>
        </>
    );
}
