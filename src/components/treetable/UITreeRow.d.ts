import React = require("react");

interface UITreeRowProps {
    node?: any;
    level?: any;
    treeTable?: any;
    parentNode?: any;
    labelExpand?: string;
    labelCollapse?: string
}

export class UITreeRow extends React.Component<UITreeRowProps,any> {}