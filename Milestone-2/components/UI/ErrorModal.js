import Card from "./Card";
import Button from "../Users/Button";

const ErrorModal=(props)=>{
    return(
        <Card>
            <div onClick={props.onConfirm}/>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>
                    {props.message}
                </p>
            </div>
            <footer>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

export default ErrorModal;