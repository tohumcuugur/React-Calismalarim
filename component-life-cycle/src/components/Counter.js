import {useState , useEffect} from 'react'

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Uğur");

    useEffect(() => {
        console.log("Component mount edildi.");
        const interval = setInterval(() =>{
            setNumber((n)=> n+1); //setNumber(number + 1) bu iki yazım şekli aynı işi yapar. yazığımız (n) numberi temsil eder.
        },1000);
        return () => clearInterval(interval)    //console.log("Component unmount edildi"); // unmount edildiği anı yakalamak için return işlemini kullanırız.
    },[]); // [] depandency array olarak geçer yani bağımlılık arrayi demektir. Boş bırakılırsa component mount edildiği anda yakala anlamına gelir.

    useEffect(() => {
        console.log("Number State güncellendi");
    }, [number]); // dependency array'e hangi state'in değişimini yakalamak istiyorsak ekleyebiliriz.Sadece number state'i güncellenince bilgi verir.
    // useEffect(() => {
    //     console.log("Name State güncellendi");
    // }, [name]);
 
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      {/* <h1>{name}</h1>
      <button onClick={() => setName("Uğur Tohumcu")}>Click</button> */}

    </div>
  )
}
//componentler dom'a mount olduğu anda componentin üzerindeki state veya prop değiştiğinde veya unmount olduğunda bu durumları yakayalıp işlem yaptırabiliriz. Buna useEffect denir.

export default Counter
