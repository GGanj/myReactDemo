import React, { Suspense } from "react"

import { otherFunc1 } from "./OtherCode1"
import OtherComponent1 from "./OtherComponent1";


export default class CodeSplite extends React.Component {
    render() {
        console.log("otherFunc1: ", otherFunc1(1, 2));
        import("./OtherCode2").then(otherCode2 => {
            console.log("otherFunc2: ", otherCode2.otherFunc2(2, 3));
        });
        const OtherComponent2 = React.lazy(() => import("./OtherComponent2"));
        return (
            <div>
                code splite
                <OtherComponent1 />
                <Suspense fallback={<div>Loading...</div>}>
                    <OtherComponent2 />
                </Suspense>
            </div>
        )
    }
}