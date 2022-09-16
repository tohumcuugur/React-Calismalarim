// function User(props){
//     return(
//         <h1>
//             {props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}
//         </h1>
//         );
// };

// alternatif kullanımı

function User({name , surname , isLoggedIn , age , friends}){
    return(
        <>
        <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız"}</h1>

        {
            friends.map((friend, index) =>(<div key={index}>{index}-{friend.name}</div>)) 
        }

        {/* id'yi kendimiz vererekte index değerini kullanmadan yapabiliriz.*/}
        {
            friends.map((friend) =>(<div key={friend.id}>{friend.id}-{friend.name}</div>)) //array listelemelerinde mutlaka key değeri verilmeli
        }

        </>
        );
} ;

export default User;