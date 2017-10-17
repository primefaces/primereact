import React = require("react");

interface MenuProps {
    id?: string ;
    model?: Array<any> ;
    popup?: boolean ;
    style?: object ;
    className?: string ;
    onShow?(originalEvent: Event): void ;
    onHide?(originalEvent: Event): void ;
}

export class Menu extends React.Component<MenuProps ,any> {}