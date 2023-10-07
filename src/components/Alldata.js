import { useContext } from "react";
import { Store } from "../AppState/Store";
import Card from "../util/card";
import money_icon from "./money_icon.png";

export default function AllData() {
  const { state } = useContext(Store);

  return (
    <>
    <img class="page-img" src={money_icon} width="50" alt="all-data"/>
      <h5>ALL DATA</h5>
      <Card
        bgcolor="info"
        body={
          <table className="table"> 
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {state.users.map((element) => {
                return (
                  <tr>
                    <td>{element.email}</td>
                    <td>{element.name}</td>
                    <td>{element.password}</td>
                    <td>{element.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      />
      <br />
    </>
  );
}