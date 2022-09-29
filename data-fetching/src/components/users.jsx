import { useEffect, useState} from "react"

import axios from "axios";

function Users() {
    const[users, setUsers] = useState([]);
    const[isLoading, setLoading] = useState(true);
    

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users") 
        // .then(console.log)
        .then((res) => setUsers(res.data))
        .catch((e) => console.log(e))   
        .finally(()=> setLoading(false));
    },[]);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users") 
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data))
    //     .catch((e) => console.log(e))
    //     .finally(()=> setLoading(false));
    // },[]);

    //veri kaynağına erişebilmek için fetch komutunu kullanabiliriz.
    //native fetch'in alternatifi olan axios'uda kullanabiliriz.
    //fetch ile body'yi json olarak vermez ve biz çeviririz.
    //axios'ta timeout ve istek iptali yapılabilir.
    //axios'ta browser desteği daha geniş

  return (
    <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div> }
            {
            users.map((user) => (
            <div key={user.id}>{user.name}</div>
            ))
        }
    </div>
  )
}

export default Users