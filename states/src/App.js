import {useState} from "react";
import './App.css';
// state componentlerimiz üzerinde değerinin değişme potansiyeli olan verileri tutan javascript objesidir.state değiştiği anda ilgili component render edilerek değişim ekrana yanlısıtılır.
function App() {
  const [name , setName] = useState('Ugur');  
  const [age , setAge] = useState(26);
  const [friends, setFriends] = useState(["ahmet" , "murat"]);
  const [address , setAddress] = useState({title:'Istanbul', zip:34667});

  return (
    <div className="App">
      <h1>Merhaba! {name}</h1> 
      <br/>
      <h2>Benim yaşım {age}</h2> 
      <button onClick = {() => { 
        setName("tolga") 
        setAge(1)}}>Click</button>
      <hr/>
      <br></br>
      <h2>Friends</h2>
      {
      friends.map((friend , index) => (<div key={index}>{friend}</div>))
      } 
      <button onClick = {() => setFriends([...friends, "ali","veli"])}>Add New Friend</button>
      <hr/>
      <br></br>
      <h2>Adress</h2>
      <div>{address.title}-{address.zip}</div>
      <br/>
      <button onClick = {() => setAddress({...address,title:"ankara" , zip:11111})}>Chance the Adress</button> {/*...address Güncellemeyeceğimiz verileri değiştirmeyeceğimiz keylerin hayatına devam etmesini sağlar */}
      
    </div>
  );
  // stateler'de atama yaparken tanımlanan state'in başlangıçtaki veri tipine göre atama yapılmalı array ise array number ise number obje is obje atanmalı.

}

export default App;
