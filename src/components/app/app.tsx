import React, {useState} from "react";
import {ErrorBoundary} from "../error-boundary/ErrorBoundary";
import {ChildWithError} from "../error-boundary/child-with-error/ChildWtihError";


export const App: React.FC = () => {

    return (
        <main>
            <h1>Jest & React Testing Library</h1>

            <ErrorBoundary>
                <ChildWithError/>
            </ErrorBoundary>

        </main>

    )
}