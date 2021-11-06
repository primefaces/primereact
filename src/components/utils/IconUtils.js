import * as React from "react";
import ObjectUtils from "./ObjectUtils";

export default class IconUtils {
    static getJSXIcon(icon, iconProps, parentProps) {
        let content = null;
        if (icon) {
            let iconType = typeof icon;
            content = <span {...iconProps}></span>;

            if (iconType !== 'string') {
                const defaultContentOptions = {
                    iconProps: iconProps,
                    element: content,
                    props: parentProps
                };

                content = <span {...iconProps}>{ObjectUtils.getJSXElement(icon, defaultContentOptions)}</span>;
            }

        }
        return content;
    }
}
