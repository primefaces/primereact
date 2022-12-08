import React, { useState } from 'react';
import Head from 'next/head';
import { Checkbox } from '../../components/lib/checkbox/Checkbox';
import getConfig from 'next/config';
import { CodeHighlight } from '../../components/doc/common/codehighlight';

const AccessibilityPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <Head>
                <title>Accessibility - PrimeReact</title>
                <meta name="description" content="Accessible React UI Components." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Accessibility</h1>
                    <p>An introduction to accessibility and how it translates to React UI Components.</p>
                </div>
            </div>

            <div className="content-section documentation">
                <p className="line-height-3 bg-indigo-600 text-white p-3 text-lg" style={{ borderRadius: '10px' }}>
                    Accessibility is a major concern of the Prime UI libraries and PrimeReact is no exception.{' '}
                    <a href="https://www.primetek.com.tr" className="text-white">
                        PrimeTek
                    </a>{' '}
                    teams have initiated a significant process to review and enhance the accessibility features of the components. This guide documents the foundation of the general guidelines that PrimeReact will follow and each component
                    documentation will have a separate <b>Accessibility</b> section that states the keyboard support, screen reader compatibility, the implementation details along with tips to achieve WCAG compliancy. This work has been initiated in
                    Q2 2022 and planned to be completed by early Q3. PrimeReact will be the reference implementation which then will be ported to PrimeFaces, PrimeNG and PrimeVue.
                </p>

                <h3>Introduction</h3>
                <p>
                    According to the World Health Organization, 15% of the world population has a disability to some degree. As a result, accessibility features in any context such as a ramp for wheelchair users or a multimedia with captions are
                    crucial to ensure content can be consumed by anyone.
                </p>

                <h5>Disabilities</h5>
                <p>Types of disabilities are diverse so you need to know your audience well and how they interact with the content created. There four main categories;</p>

                <h6>Visual Impairments</h6>
                <p>
                    Blindness, low-level vision or color blindness are the common types of visual impairments. Screen magnifiers and the color blind mode are usually built-in features of the browsers whereas for people who rely on screen readers,
                    page developers are required to make sure content is readable by the readers. Popular readers are{' '}
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

                <h6>Hearing Impairments</h6>
                <p>
                    Deafness or hearing loss refers to the inability to hear sounds totally or partially. People with hearing impairments use assistive devices however it may not be enough when interacting with a web page. Common implementation is
                    providing textual alternatives, transcripts and captions for content with audio.
                </p>

                <h6>Mobility Impairments</h6>
                <p>
                    People with mobility impairments have disabilities related to movement due to loss of a limb, paralysis or other varying reasons. Assistive technologies like a head pointer is a device to interact with a screen whereas keyboard or
                    a trackpad remain as solutions for people who are not able to utilize a mouse.
                </p>

                <h6>Cognitive Impairments</h6>
                <p>
                    Cognitive impairments have a wider range that includes people with learning disabilities, depression and dyslexia. A well designed content also leads to better user experience for people without disabilities so designing for
                    cognitive impairments result in better design for any user.
                </p>

                <h3>Web Content</h3>
                <p>
                    Correct page structure with the aid of assistive technologies are the core ingridients for an accessible web content. HTML is based on an accessible foundation, form controls can be used by keyboard by default and semantic HTML is
                    easier to be processed by a screen reader.
                </p>

                <h5>WCAG</h5>
                <p>
                    <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" alt="WCAG Website">
                        WCAG
                    </a>{' '}
                    refers to <strong>Web Content Accessibility Guideline</strong>, a standard managed by the WAI (Web Accessibility Initiative) of W3C (World Wide Web Consortium). WCAG consists of recommendations for making the web content more
                    accessible. PrimeReact components aim high level of WCAG compliancy in the near future.
                </p>

                <p>
                    Various countries around the globe have governmental policies regarding web accessibility as well. Most well known of these are <a href="https://www.section508.gov/manage/laws-and-policies/">Section 508</a> in the US and{' '}
                    <a href="https://digital-strategy.ec.europa.eu/en/policies/web-accessibility">Web Accessibility Directive</a> of the European Union.
                </p>

                <h5>Form Controls</h5>
                <p>
                    Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be
                    used with space key as well to trigger.
                </p>
                <CodeHighlight>
                    {`
<button onClick={e => console.log(e)}>Click</button>
`}
                </CodeHighlight>

                <p>On the other hand, a fancy css based button using a div has no keyboard or screen reader support.</p>
                <CodeHighlight>
                    {`
<div className="fancy-button" onClick={e => console.log(e)}>Click</div>
`}
                </CodeHighlight>

                <p>
                    <i>tabindex</i> is required to make a div element accessible in addition to use a keydown to bring the keyboard support back. To avoid the overload and implementing functionality that is already provided by the browser, native
                    form controls should be preferred.
                </p>
                <CodeHighlight>
                    {`
<div className="fancy-button" onClick={e => console.log(e)} onKeyDown={e => e.code === 'Space' && console.log(e) } tabIndex="0">Click</div>
`}
                </CodeHighlight>

                <h5>Relations</h5>
                <p>
                    Form components must be related to another element that describes what the form element is used for. This is usually achieved with the <i>label</i> element.
                </p>
                <CodeHighlight>
                    {`
<label htmlFor="myinput">Username:</label>
<input id="myinput" type="text" name="username" />
`}
                </CodeHighlight>

                <h5>Semantic HTML</h5>
                <p>
                    HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular <i>div</i>{' '}
                    elements with classes are used. Consider the following example that do not mean too much for readers.
                </p>
                <CodeHighlight>
                    {`
<div className="header">
    <div className="header-text">Header</div>
</div>

<div className="nav"></div>

<div className="main">
    <div className="content">
    </div>

    <div className="sidebar">
    </div>
</div>

<div className="footer">
</div>
`}
                </CodeHighlight>

                <p>Same layout can be achieved using the semantic elements with screen reader support built-in.</p>
                <CodeHighlight>
                    {`
<header>
    <h1>Header</h1>
</header>

<nav></nav>

<main>
    <article></article>

    <aside></aside>
</main>

<footer>
</footer>
`}
                </CodeHighlight>

                <h5>WAI-ARIA</h5>
                <p>
                    ARIA refers to "Accessible Rich Internet Applications" is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components
                    such as a datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeReact. These types of
                    components must provide keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized.
                </p>
                <p>
                    ARIA consists of roles, properties and attributes. <b>Roles</b> define what the element is mainly used for e.g. <i>checkbox</i>, <i>dialog</i>, <i>tablist</i> whereas
                    <b>States</b> and <b>Properties</b> define the metadata of the element like <i>aria-checked</i>, <i>aria-disabled</i>.
                </p>

                <p>Consider the following case of a native checkbox. It has built-in keyboard and screen reader support.</p>
                <CodeHighlight>
                    {`
<input type="checkbox" value="Prime" name="ui" checked>
`}
                </CodeHighlight>

                <p>
                    A fancy checkbox with css animations might look more appealing but accessibility might be lacking. Checkbox below may display a checked font icon with animations however it is not tabbable, cannot be checked with space key and
                    cannot be read by a reader.
                </p>
                <CodeHighlight>
                    {`
<div className="fancy-checkbox">
    {checked && <i className="checked-icon"></i>}
</div>
`}
                </CodeHighlight>

                <p>
                    One alternative is using ARIA roles for readers and use javascript for keyboard support. Notice the usage of <i>aria-labelledby</i> as a replacement of the <i>label</i> tag with htmlFor.
                </p>
                <CodeHighlight>
                    {`
<span id="chk-label">Remember Me</span>
<div className="fancy-checkbox" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk-label"
    onClick="() => toggle()" onKeyDown="(e) => e.keyCode === 32 && toggle()">
    {checked && <i className="checked-icon"></i>}
</div>
`}
                </CodeHighlight>

                <p>
                    However the best practice is combining semantic HTML for accessibility while keeping the design for UX. This approach involves hiding a native checkbox for accessibility and using javascript events to update its state. Notice the
                    usage of <i>p-sr-only</i>
                    that hides the elements from the user but not from the screen reader.
                </p>
                <CodeHighlight>
                    {`
<label for="chkbox">Remember Me</label>
<div className="fancy-checkbox" onClick="() => toggle()">
    <input className="p-sr-only" type="checkbox" id="chkbox" onFocus="() => updateParentVisuals()" onBlur="() => updateParentVisuals()"
        onKeyDown="(e) => e.keyCode === 32 && updateParentVisuals()">
    {checked && <i className="checked-icon"></i>}
</div>
`}
                </CodeHighlight>

                <p>A working sample is the PrimeReact checkbox that is tabbable, keyboard accessible and is compliant with a screen reader. Instead of ARIA roles it relies on a hidden native checkbox.</p>

                <div className="flex align-items-center">
                    <label htmlFor="binary" className="mr-2">
                        Remember Me
                    </label>
                    <Checkbox inputId="binary" checked={checked} onChange={(e) => setChecked(e.checked)} />
                </div>

                <h5>Colors</h5>
                <p>
                    Colors on a web page should aim a contrast ratio of at least <strong>4.5:1</strong> and consider a selection of colors that do not cause vibration.
                </p>

                <h6>Good Contrast</h6>
                <p>Color contrast between the background and the foreground content should be sufficient enough to ensure readability. Example below displays two cases with good and bad samples.</p>

                <div className="flex">
                    <div className="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-600" style={{ borderRadius: '10px' }}>
                        <span className="text-white">GOOD</span>
                    </div>
                    <div className="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-400" style={{ borderRadius: '10px' }}>
                        <span className="text-white">BAD</span>
                    </div>
                </div>

                <h6>Vibration</h6>
                <p>Color vibration is leads to an illusion of motion due to choosing colors that have low visibility against each other. Color combinations need to be picked with caution to avoid vibration.</p>

                <div className="flex">
                    <div className="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-pink-500" style={{ borderRadius: '10px' }}>
                        <span className="text-blue-500">VIBRATE</span>
                    </div>
                </div>

                <h6>Dark Mode</h6>
                <p>Highly saturated colors should be avoided when used within a dark design scheme as they cause eye strain. Instead desaturated colors should be preferred.</p>

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
            </div>
        </div>
    );
};

export default AccessibilityPage;
