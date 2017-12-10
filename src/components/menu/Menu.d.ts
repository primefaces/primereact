import React = require("react");

interface MenuProps {
    id?: string ;
    model?: Array<any> ;
    popup?: boolean ;
    style?: object ;
    className?: string ;
    onShow?(e: {originalEvent: Event}): void ;
    onHide?(e: {originalEvent: Event}): void ;
}

export class Menu extends React.Component<MenuProps ,any> {}