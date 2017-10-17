import React = require("react");

interface ChartProps {
    id?: string;
    type?: string;
    data?: object;
    options?: object;
    width?: string;
    height?: string;
    style?: string;
    className?: string;
}

export class Chart extends React.Component<ChartProps,any> {}