import React from "react";
import ObjectUtils from "./ObjectUtils";

export default function useDeepCompareMemoized(value) {
    const ref = React.useRef()

    if (!ObjectUtils.deepEquals(value, ref.current)) {
        ref.current = value
    }

    return ref.current
}
