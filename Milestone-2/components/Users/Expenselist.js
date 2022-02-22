import React from "react";
import Card from "../UI/Card";

const Expenselist=(props)=>{
    return(
            <Card>
                <ul>
                    {props.list.map((user)=>(
                        <li key={user.id}>
                            {user.detail} {user.price} {user.year}-{user.month}-{user.day}
                        </li>
                    ))}
                </ul>
            </Card>
    );
}

export default Expenselist;