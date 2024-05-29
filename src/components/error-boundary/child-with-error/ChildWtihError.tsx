import {useEffect, useState} from "react";

export const ChildWithError = () => {

    const [state, setState] = useState(false)

    // component mount => componentDidMount
    useEffect(() => {
        // throw new Error('Component has been mounted!')

        // component componentDidUnmount
        return () => {
            console.log('unmount')
            // throw new Error('Component has been unmounted!')
        }
    }, [])


    // componentDidUpdate
    useEffect(() => {
        if (state) {
            throw new Error('State has been updated')
        }
    }, [state]);

    // https://github.com/testing-library/react-hooks-testing-library/issues/305


    // event handler
    const onClickHandler = () => {
        try {
            //throw new Error('Something wrong with onClick handler')
        } catch (e: any) {

        }
        setState(true)
    }

    return <button onClick={() => onClickHandler()}> Click Me</button>
}