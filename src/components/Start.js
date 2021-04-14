import {useHistory} from "react-router"
export default function Start(){
    const history = useHistory()
    async function play(){
        history.push("/home")
    }
    return (
        <>
            <h1>Start</h1>
            <button onClick={() => play() }>Start</button>
        </>
    )
}