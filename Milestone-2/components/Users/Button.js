// import "./Button.css"
import classes from "..UI/Button.module.css";
const Button=(props)=>{
    return(
        <div className={classes.styles}>
            <button type={props.type} onClick={props.onClick}>
            {props.children}
            </button>   
        </div>
    )
}

export default Button;
