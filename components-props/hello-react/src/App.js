import './App.css';
// import Header from './components/Header';
import User from './components/User';
// const name ="ugur"
// const surname = "tohumcu"
// const isLoggedIn = true;
const friends  = [
  {id:1 , name:'ahmet'},
  {id:2 ,name:'veli'},
  {id:3 ,name:'tayfun'},
  {id:4 ,name:'gökhan'},
  {id:5 ,name:'yunus'},

];
function App() {
  return(
    <div>
      {/* <h1>{name} {surname}</h1>
      <h1>{`Benim adım ${name} soyadım ${surname}`}</h1>   */}
      
      {/* <h1>{isLoggedIn && `Benim adım ${name} soyadım ${surname}`}</h1>
      {!isLoggedIn && `Giriş yapmadınız.`} */}
  
      {/* yada kısa yazılışı*/}

      {/* <h1>{isLoggedIn ? `Benim adım ${name} soyadım ${surname}` :"Giriş yapmadınız"}</h1> */}

      <User 
        name = {"ugur"} 
        surname="tohumcu" 
        isLoggedIn = {true}
        age={26}
        // friends ={["Ali" ,"Mehmet" ,"Ercüment" , "Ayşe" ,"Fatma"]}
        // friends = {friends}
      />
    </div>
  ) 
};

/* <p className="xyz">
lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc
</p>
<label htmlFor="input">
Name<input></input>
</label>
<Header /> */
// class , for gibi javascripte özel olan ifadeleri jsx yazarken kullanamayız class yerine className for yerine htmlFor gelir.

export default App;


  