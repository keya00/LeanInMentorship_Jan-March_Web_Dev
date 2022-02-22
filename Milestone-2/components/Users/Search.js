//import classes from "./searchBar.module.css";
import Card from "../UI/Card";

const Search = ({ look, onChange }) => {
  return (
    <div>
      <div>
        <Card>
          <label htmlFor="search">Enter The year to find all:</label>
          <input
            type="number"
            id="search"
            value={look}
            onChange={onChange}
            placeholder="Expense year :"
          />
        </Card>
      </div>
    </div>
  );
};

export default Search;
