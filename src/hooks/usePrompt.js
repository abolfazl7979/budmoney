import React, {useCallback} from "react";
import useBlocker from "./useBlocker";

const  usePrompt = ( message, when = true ) => {
    const blocker = useCallback(
        ( tx ) => {
            // eslint-disable-next-line no-alert
            if ( window.confirm( message ) ) tx.retry();
        },
        [ message ]
    );

    useBlocker( blocker, when );
}

export default usePrompt;