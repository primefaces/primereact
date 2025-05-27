import { MeterGroup } from 'primereact/metergroup';

export default function ColorDemo() {
    return (
        <div className="card">
            <MeterGroup>
                <MeterGroup.Meters>
                    <MeterGroup.Meter value={12} color="violet" />
                    <MeterGroup.Meter value={14} color="#10B981" />
                    <MeterGroup.Meter value={10} color="rgb(244, 63, 94)" />
                    <MeterGroup.Meter value={8} className="bg-blue-500" />
                    <MeterGroup.Meter value={10} style={{ backgroundColor: '#EAB308' }} />
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color="violet" />
                        <MeterGroup.Text>Violet</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color="#10B981" />
                        <MeterGroup.Text>Emerald</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color="rgb(244, 63, 94)" />
                        <MeterGroup.Text>Rose</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker className="bg-blue-500" />
                        <MeterGroup.Text>Blue</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker style={{ backgroundColor: '#EAB308' }} />
                        <MeterGroup.Text>Yellow</MeterGroup.Text>
                    </MeterGroup.Label>
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
