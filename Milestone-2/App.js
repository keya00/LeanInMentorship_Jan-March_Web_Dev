import { useEffect, useState } from "react";
import {filter} from "./components/Users/Filter";
import NewExpense from "./components/Users/Newexpense";
import Expenselist from "./components/Users/Expenselist";
import Search from "./components/Users/Search";
function App() {
  const [userList, setUserList] = useState([]);
  const [, setFinalSet] = useState('');
  const[look,setlook]=useState("");
  const final= filter(userList,look);

  useEffect(() => {
    let Temp=0;
    for(let i=0;i<userList.length;i++)
      Temp+=(userList[i].price);
      setFinalSet(Temp);
  },[userList]
  );

  const addUserHandler = (detail, price , date) => {
    let arr= date.split("-");

    let year = arr[0];
    let month = arr[1];
    let day = arr[2];
    
    setUserList((prevState) => {
      return [
        ...prevState,
        { detail:detail, price:price, year:year, month:month , day:day , id: Math.random().toString() },
      ];
    });
  };
  const handleChange = (event) => {
    setlook(event.target.value);
  };
  

  return (
    <>
      <NewExpense onAddUser={addUserHandler} />
      <Search look={look} onChange={handleChange}/>
      <Expenselist list={look === "" ? userList : final} />
    </>
  );
}

export default App;