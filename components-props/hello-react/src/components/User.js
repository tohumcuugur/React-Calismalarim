// function User(props){
//     return(
//         <h1>
//             {props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}
//         </h1>
//         );
// };

// alternatif kullanımı
import PropTypes from "prop-types";

function User({name , surname , isLoggedIn , age , friends}){
    return(
        <>
        <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız"}</h1>

        {
           friends && friends.map((friend, index) =>(<div key={index}>{index}-{friend.name}</div>)) 
        }

        {/* id'yi kendimiz vererekte index değerini kullanmadan yapabiliriz.*/}
        {
            friends && friends.map((friend) =>(<div key={friend.id}>{friend.id}-{friend.name}</div>)) //array listelemelerinde mutlaka key değeri verilmeli
        }

        </>
        );
} ;

User.propTypes = {
    name: PropTypes.string.isRequired, // is required kullandığımız zaman gönderilecek değeri zorunlu olarak işaretler ve bir veri gönderilmesini ister.
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.number.oneOfType([PropTypes.number, PropTypes.string]), // Labış edişöesini istediğimiz tip'leri tanımlayabiliriz.
    friends: PropTypes.array //import ettiğimiz prop-types kullandığımız değişkenlerinin tiplerini belirleyebilmemize yarar.
}

export default User;