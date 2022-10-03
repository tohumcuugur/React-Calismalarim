import React ,{ useState } from 'react';
import {Link} from 'react-router-dom';

function Users() {
    const [users,setUsers] = useState([]);

    useState(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data) => setUsers(data));
    },[]);

  return (
    <div>
        <h2>
            Kulanıcılar
        </h2>
        <ul>
            {
                users.map((user , index)=> (
                    <li key={index}>
                        <Link to={`${index+1}`} state={{user}}>{index+1}-{user.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default Users