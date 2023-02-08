import React, { useRef, useState, useEffect } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { useOverlayScrollListener } from '../../../lib/hooks/Hooks';
import { Button } from '../../../lib/button/Button';
import { InputText } from '../../../lib/inputtext/InputText';
import { classNames } from '../../../lib/utils/Utils';

export function BasicDoc(props) {
    const targetRef = useRef();
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredCities, setFilteredCities] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [eventType, setEventType] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);

    const filter = (value) => {
        if (value) {
            const filteredCities = cities.filter((city) => city.name.toLowerCase().startsWith(value.toLowerCase()));
            const newCities = filteredCities.length ? filteredCities : [{ name: 'No Result Found', code: 'N/A' }];

            setFilteredCities(newCities);
        } else {
            setFilteredCities(cities);
        }
    };

    const onChange = (e) => {
        setShowOverlay(true);
        filter(e.target.value);
        setSelectedCity(e.target.value);
    };

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'Berlin', code: 'BRN' },
        { name: 'Barcelona', code: 'BRC' },
        { name: 'Madrid', code: 'MDR' },
        { name: 'Milan', code: 'MLN' },
        { name: 'Amsterdam', code: 'AMS' },
        { name: 'Bucharest', code: 'BCH' },
        { name: 'Vienna', code: 'VIE' },
        { name: 'Dublin', code: 'DBL' },
        { name: 'Brussels', code: 'BRS' },
        { name: 'Copenhagen', code: 'CPH' },
        { name: 'Athens', code: 'ATH' },
        { name: 'Reykjavik', code: 'REY' },
        { name: 'Helsinki', code: 'HEL' }
    ];

    const handleScroll = (event) => {
        setEventType(event.type);
        setIsScrolling(true);
        setShowOverlay(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: targetRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: showOverlay
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    const code = {
        basic: `
const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
    target: targetRef.current,
    listener: handleScroll,
    options: { passive: true },
    when: showOverlay
});
        `,
        javascript: `
import React, { useState, useRef, useEffect } from 'react'; 
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useOverlayScrollListener } from 'primereact/hooks';

export default function BasicDemo() {
    const targetRef = useRef();
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredCities, setFilteredCities] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [eventType, setEventType] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);

    const filter = (value) => {
        if (value) {
            const filteredCities = cities.filter((city) => city.name.toLowerCase().startsWith(value.toLowerCase()));
            const newCities = filteredCities.length ? filteredCities : [{ name: 'No Result Found', code: 'N/A' }];

            setFilteredCities(newCities);
        } else {
            setFilteredCities(cities);
        }
    };

    const onChange = (e) => {
        setShowOverlay(true);
        filter(e.target.value);
        setSelectedCity(e.target.value);
    };

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'Berlin', code: 'BRN' },
        { name: 'Barcelona', code: 'BRC' },
        { name: 'Madrid', code: 'MDR' },
        { name: 'Milan', code: 'MLN' },
        { name: 'Amsterdam', code: 'AMS' },
        { name: 'Bucharest', code: 'BCH' },
        { name: 'Vienna', code: 'VIE' },
        { name: 'Dublin', code: 'DBL' },
        { name: 'Brussels', code: 'BRS' },
        { name: 'Copenhagen', code: 'CPH' },
        { name: 'Athens', code: 'ATH' },
        { name: 'Reykjavik', code: 'REY' },
        { name: 'Helsinki', code: 'HEL' }
    ];

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    };

    const handleScroll = (event) => {
        setEventType(event.type);
        setIsScrolling(true);
        setShowOverlay(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: targetRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: showOverlay
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div className="flex align-items-center justify-content-start w-20rem gap-2">
                <span className="text-md">Event Type: {isScrolling ? <i className="font-semibold text-orange-600">{eventType}</i> : <i>&nbsp;</i>}</span>
            </div>

            <div className="w-20rem h-15rem p-2 surface-border border-round border-1 border-dashed overflow-auto">
                <div className="h-30rem">
                    <div className="field">Open overlay and scroll inside dashed container to view hidden overlay and see the event type.</div>
                    <div ref={targetRef} onClick={() => setShowOverlay(!showOverlay)} className="flex mb-2">
                        <InputText placeholder="Select a City" className="border-1 border-noround-right" value={selectedCity} onChange={onChange}></InputText>
                        <Button className="border-noround-left" icon="pi pi-angle-down"></Button>
                    </div>
                    {showOverlay && (
                        // Overlay Panel
                        <div className="border-round border-solid border-1 surface-border h-10rem overflow-y-auto">
                            {(filteredCities || cities).map((city, index) => (
                                <div
                                    key={city.code}
                                    className={classNames('flex align-items-center cursor-pointer', { 'surface-100': index % 2 !== 0 })}
                                    onClick={() => {
                                        setSelectedCity(city.name);
                                        setShowOverlay(false);
                                    }}
                                >
                                    <span className="p-2">{city.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef, useEffect } from 'react'; 
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useOverlayScrollListener } from 'primereact/hooks';

export default function BasicDemo() {
    const targetRef = useRef();
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredCities, setFilteredCities] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [eventType, setEventType] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);

    const filter = (value) => {
        if (value) {
            const filteredCities = cities.filter((city) => city.name.toLowerCase().startsWith(value.toLowerCase()));
            const newCities = filteredCities.length ? filteredCities : [{ name: 'No Result Found', code: 'N/A' }];

            setFilteredCities(newCities);
        } else {
            setFilteredCities(cities);
        }
    };

    const onChange = (e) => {
        setShowOverlay(true);
        filter(e.target.value);
        setSelectedCity(e.target.value);
    };

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'Berlin', code: 'BRN' },
        { name: 'Barcelona', code: 'BRC' },
        { name: 'Madrid', code: 'MDR' },
        { name: 'Milan', code: 'MLN' },
        { name: 'Amsterdam', code: 'AMS' },
        { name: 'Bucharest', code: 'BCH' },
        { name: 'Vienna', code: 'VIE' },
        { name: 'Dublin', code: 'DBL' },
        { name: 'Brussels', code: 'BRS' },
        { name: 'Copenhagen', code: 'CPH' },
        { name: 'Athens', code: 'ATH' },
        { name: 'Reykjavik', code: 'REY' },
        { name: 'Helsinki', code: 'HEL' }
    ];

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    };

    const handleScroll = (event) => {
        setEventType(event.type);
        setIsScrolling(true);
        setShowOverlay(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: targetRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: showOverlay
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div className="flex align-items-center justify-content-start w-20rem gap-2">
                <span className="text-md">Event Type: {isScrolling ? <i className="font-semibold text-orange-600">{eventType}</i> : <i>&nbsp;</i>}</span>
            </div>

            <div className="w-20rem h-15rem p-2 surface-border border-round border-1 border-dashed overflow-auto">
                <div className="h-30rem">
                    <div className="field">Open overlay and scroll inside dashed container to view hidden overlay and see the event type.</div>
                    <div ref={targetRef} onClick={() => setShowOverlay(!showOverlay)} className="flex mb-2">
                        <InputText placeholder="Select a City" className="border-1 border-noround-right" value={selectedCity} onChange={onChange}></InputText>
                        <Button className="border-noround-left" icon="pi pi-angle-down"></Button>
                    </div>
                    {showOverlay && (
                        // Overlay Panel
                        <div className="border-round border-solid border-1 surface-border h-10rem overflow-y-auto">
                            {(filteredCities || cities).map((city, index) => (
                                <div
                                    key={city.code}
                                    className={classNames('flex align-items-center cursor-pointer', { 'surface-100': index % 2 !== 0 })}
                                    onClick={() => {
                                        setSelectedCity(city.name);
                                        setShowOverlay(false);
                                    }}
                                >
                                    <span className="p-2">{city.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div className="flex align-items-center justify-content-start w-20rem gap-2">
                    <span className="text-md">Event Type: {isScrolling ? <i className="font-semibold text-orange-600">{eventType}</i> : <i>&nbsp;</i>}</span>
                </div>

                <div className="w-20rem h-15rem p-2 surface-border border-round border-1 border-dashed overflow-auto">
                    <div className="h-30rem">
                        <div className="field">Open overlay and scroll inside dashed container to view hidden overlay and see the event type.</div>
                        <div ref={targetRef} onClick={() => setShowOverlay(!showOverlay)} className="flex mb-2">
                            <InputText placeholder="Select a City" className="border-1 border-noround-right" value={selectedCity} onChange={onChange}></InputText>
                            <Button className="border-noround-left" icon="pi pi-angle-down"></Button>
                        </div>
                        {showOverlay && (
                            // Overlay Panel
                            <div className="border-round border-solid border-1 surface-border h-10rem overflow-y-auto">
                                {(filteredCities || cities).map((city, index) => (
                                    <div
                                        key={city.code}
                                        className={classNames('flex align-items-center cursor-pointer', { 'surface-100': index % 2 !== 0 })}
                                        onClick={() => {
                                            setSelectedCity(city.name);
                                            setShowOverlay(false);
                                        }}
                                    >
                                        <span className="p-2">{city.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
