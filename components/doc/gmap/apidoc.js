import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="typescript" label="Typescript">
                <p>If you are using TypeScript you should install the Google Maps types.</p>

                <CodeHighlight lang="js">
                    {`
// npm install types into devDependencies
npm i -D @types/google.maps

// yarn install types into devDependencies
yarn add @types/google.maps --production=false
`}
                </CodeHighlight>
            </DocSubSection>
            <DocSubSection id="gmap-api" label="Google Maps API">
                <p>
                    In case you need to access the map instance directly, use the getMap() method. In the following example, this.gmap.getMap() will provide the map instance. Alternative is using onMapReady event as it passes the map instance as a
                    parameter.
                </p>

                <CodeHighlight lang="js">
                    {`
const options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
};

return (
    <GMap ref={gmap} options={options} style={{width: '100%', minHeight: '320px'}} />
)
`}
                </CodeHighlight>
            </DocSubSection>
            <DocSubSection id="properties" label="Properties">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>options</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Google Maps API configuration object.</td>
                            </tr>
                            <tr>
                                <td>overlays</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of overlays to display.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
                <p>GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging.</p>

                <CodeHighlight lang="js">
                    {`
const onMapClick = (event) => {
//event: MouseEvent of Google Maps api
}

const onMapReady = (map) => {
//map: Map instance
}

const options = {
center: {lat: 36.890257, lng: 30.707417},
zoom: 12
};

let overlays = [
new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
new google.maps.Polygon({paths: [
{lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
}),
new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
]

return (
<GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={onMapReady} onMapClick={onMapClick} />
)
`}
                </CodeHighlight>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onMapClick</td>
                                <td>event: Google Maps MouseEvent</td>
                                <td>Callback to invoke when map is clicked except markers.</td>
                            </tr>
                            <tr>
                                <td>onMapDragEnd</td>
                                <td>-</td>
                                <td>Callback to invoke when map drag (i.e. pan) has ended.</td>
                            </tr>
                            <tr>
                                <td>onMapReady</td>
                                <td>event.map: Google Maps Instance</td>
                                <td>Callback to invoke when the map is ready to be used.</td>
                            </tr>
                            <tr>
                                <td>onOverlayClick</td>
                                <td>
                                    originalEvent: Google Maps MouseEvent <br />
                                    overlay: Clicked overlay <br />
                                    map: Map instance <br />
                                </td>
                                <td>Callback to invoke when an overlay is clicked.</td>
                            </tr>
                            <tr>
                                <td>onOverlayDragStart</td>
                                <td>event: Google Maps MouseEvent</td>
                                <td>Callback to invoke when an overlay drag starts.</td>
                            </tr>
                            <tr>
                                <td>onOverlayDrag</td>
                                <td>event: Google Maps MouseEvent</td>
                                <td>Callback to invoke when an overlay is being dragged.</td>
                            </tr>
                            <tr>
                                <td>onOverlayDragEnd</td>
                                <td>event: Google Maps MouseEvent</td>
                                <td>Callback to invoke when an overlay drag ends.</td>
                            </tr>
                            <tr>
                                <td>onZoomChanged</td>
                                <td>-</td>
                                <td>Callback to invoke when zoom level has changed.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
