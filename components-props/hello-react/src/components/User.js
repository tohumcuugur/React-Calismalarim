// function User(props){
//     return(
//         <h1>
//             {props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}
//         </h1>
//         );
// };

// alternatif kullanımı
import PropTypes from "prop-types";

function User({name , surname , isLoggedIn , age , friends , address}){
    if(!isLoggedIn){
        return <div>Giriş yapmadınız</div>
    }
    return(
        <>
        <h1>{`${name} ${surname} (${age})`}</h1>

        {
           friends && friends.map((friend, index) =>(<div key={index}>{index}-{friend.name}</div>)) 
        }

        {/* id'yi kendimiz vererekte index değerini kullanmadan yapabiliriz.*/}
        {
            friends && friends.map((friend) =>(<div key={friend.id}>{friend.id}-{friend.name}</div>)) //array listelemelerinde mutlaka key değeri verilmeli
        }
        <br/>
        {address.title} {address.zip}
        </>
        );
} ;

User.propTypes = {
    name: PropTypes.string.isRequired, // is required kullandığımız zaman gönderilecek değeri zorunlu olarak işaretler ve bir veri gönderilmesini ister.
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Labış edişöesini istediğimiz tip'leri tanımlayabiliriz.
    friends: PropTypes.array, //import ettiğimiz prop-types kullandığımız değişkenlerinin tiplerini belirleyebilmemize yarar.
    address: PropTypes.shape({
        title: PropTypes.string.isRequired,
        zip: PropTypes.number.isRequired
    }), // obje olarak gönderdiğimiz property'lerde shape kullanabiliriz.

};

User.defaultProps = { // defaultProps varsayılan olarak değer göndermemizi sağlar. User'a herhangi bir değer gönderilmezse otomatik olarak false değeri geçer.
    name : "isimsiz",
    isLoggedIn: true,
};

export default User;