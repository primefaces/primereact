import React = require("react");

interface CurrentPageReportProps {
    pageCount?: number;
    page?: number;
    template?: string;
}

export class CurrentPageReport extends React.Component<CurrentPageReportProps,any> {}