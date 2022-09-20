import {useState} from 'react'


function InputExample() {
    const [form , setForm] = useState({name:"",surname:""})

    const onChangeInput = (e) => {
        console.log(e.target.name)
        setForm({...form,[e.target.name]: e.target.value},)
    }

  return (
    <div>
        <p>Name</p>
        <br />
        {/* <input value={name} onChange ={(event)=>setName(event.target.value)} /> */}
        <input name='name' value={form.name} onChange={onChangeInput}/>
        <br />
        <br />
        <p>Surname</p>
        <br />
        <input name='surname' value={form.surname} onChange={onChangeInput}/>
        <br />
        <h1>{form.name} {form.surname}</h1>
    </div>

  );
}

export default InputExample;
