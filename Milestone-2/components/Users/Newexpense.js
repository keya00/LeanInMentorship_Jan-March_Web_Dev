import Card from "../UI/Card";
import Button from "./Button";
import classes from "./Newexpense.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const NewExpense = (props) => {
  const [entereddetail, setEntereddetail] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState();

  const addDataHandler = (event) => {
    event.preventDefault();

    if (
      entereddetail.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({ title: "error ", message: "enter valid inputs" });
      return;
    }

    if (+enteredPrice < 0) {
      setError({ title: "error", message: "enter valid inputs" });
      return;
    }

    props.onAddUser(entereddetail, enteredPrice, enteredDate);
    setEntereddetail("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  const detailHandler = (event) => {
    setEntereddetail(event.target.value);
  };
  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onConfirm = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirm}
        />
      )}
      <Card>
        <form onSubmit={addDataHandler}>
          <div>
            <div className={classes.txt}>
              <label htmlFor="detail">Expense Details</label>
              <input
                type="detail"
                id="detail"
                onChange={detailHandler}
                value={entereddetail}   
              ></input>
            </div>
            <div className={classes.txt}>
              <label htmlFor="price">Expense</label>
              <input
                type="number"
                id="number"
                onChange={priceHandler}
                value={enteredPrice}
              ></input>
            </div>
            <div className={classes.txt}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                onChange={dateHandler}
                value={enteredDate}
              ></input>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default NewExpense;
