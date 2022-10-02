import React, { useEffect, useState } from 'react';
import { Link, useParams} from "react-router-dom";

function UserDetail() {
    // const params = useParams();
    // console.log(params);
    const {id} = useParams();
    const [user , setUsers] = useState(null);
    
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data) => setUsers(data));
    },[id]);

  return (
    <div>
        <h2>
            Kullanıcı Detayları
        </h2>

        {user && <pre>{JSON.stringify(user,null,2)}</pre>}    

        <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
        
    </div>
  )
}

// <pre></pre> pre etiketini düzgün görüntülenme için kullanırız.

//const [user , setUsers] = useState(null); ilk etapta sayfa yüklenene kadar null şeklinde bilgi gözükmesi için ilk parametreyi null girdik.
// Yüklenme aşamasında null şeklinde bir ifade göstermek istemezsek {user && <pre>{JSON.stringify(user,null,2)}</pre>} ifadenin başına user koşulu ekleyebiliriz.

export default UserDetail