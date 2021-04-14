import {useHistory} from "react-router";


export default function Result(){
    const point = localStorage.getItem("point");
    const history = useHistory();

    const replay = () => {
        localStorage.setItem("point" , 0);
        history.push("/home")
    }
    return (
        <>
            <h1>Result : {point}</h1>
            <button onClick={replay} >replay</button>
        </>
    )
}