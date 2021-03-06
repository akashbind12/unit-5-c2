import { useEffect, useState } from "react";
import axios from 'axios';


export const ShowStudents = () => {

    const [data, setData] = useState([])

    // useEffect(() => {
    //     getdata();
    // }, [])
    
    // const getdata = async () => {
        
        
    //     setData(data)
    //     console.log("data",data)
    // }

    useEffect(() => {
        getdata();
      }, []);
      
      const  getdata = async ()  => {
        axios.get('http://localhost:8080/students').then(res => {
          console.log(res.data);
          setData(res.data);
        });  
      }
     
    //   let data = .filter((e) => (e.status === true))
    //   console.log(data)


    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder" 
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            {data.map((e) => {
                 return <tr className="row">
                     <td className="first_name">{e.first_name}</td>
                     <td className="last_name">{e.last_name }</td>
                     <td className="email">{ e.email}</td>
                     <td className="gender">{ e.gender}</td>
                     <td className="age">{ e.age}</td>
                     <td className="tenth_score">{ e.tenth_score}</td>
                     <td className="twelth_score">{ e.twelth_score}</td>
                     <td className="preferred_branch">{ e.preferred_branch}</td>
               </tr>
            })}
            {/* {todolist.filter((e) => (e.status === false)).map((e, i) => {
          console.log(e)
          return <Todoitem  todo={e} todoindex={i} handlestatus={handlestatus} Deltetodo= {Deltetodo}/>
           })} */}
                
            {/* <tr className="row">
              <td className="first_name">akash</td>
              <td className="last_name"></td>
              <td className="email"></td>
              <td className="gender"></td>
              <td className="age"></td>
              <td className="tenth_score"></td>
              <td className="twelth_score"></td>
              <td className="preferred_branch"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  };