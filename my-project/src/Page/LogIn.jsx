import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LogIn() {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [PhNumber, setPhnumber] = React.useState('');
  const EmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const nav=useNavigate();
  const handleSignUp = () => {
    if (Name === "" || Email === "" || password === "" || PhNumber === "") {
      alert("Please fill all fields");
    } else if (!EmailRegex.test(Email)) {
      alert("Invalid email address");
    } else if (!passwordRegex.test(password)) {
      alert("Invalid password");
    } else {
      axios.post(`https://65704b6109586eff6641121e.mockapi.io/users`, {
        Name: Name,
        Email: Email,
        Password: password,
        Phone_no: PhNumber
      })
        .then(res =>  {
            console.log(res)
            nav(`/HomeUser/${Name}`)
        })
    }
  };

  return (
    <div className="flex items-center justify-evenly  h-screen p-8 max-sm:flex-col">
      <div className='grid grid-cols-1 gap-4 p-8 rounded-lg border'>
        <div>
          <input value={Name} onChange={(e) => { setName(e.target.value) }} className='border rounded-lg w-80 max-sm:w-60' placeholder='Name'></input>
        </div>
        <div>
          <input value={Email} onChange={(e) => { setEmail(e.target.value) }} className='border rounded-lg w-80 max-sm:w-60' placeholder='Email'></input>
        </div>
        <div>
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='border rounded-lg w-80 max-sm:w-60' type='password' placeholder='Password'></input>
        </div>
        <div>
          <input value={PhNumber} onChange={(e) => { setPhnumber(e.target.value) }} className='border rounded-lg w-80 max-sm:w-60' placeholder='Phone Number'></input>
        </div>
        <button className='text-black text-2xl font-bold rounded-lg rounded-full' onClick={handleSignUp} >LogIn</button>
      </div>
      <div>
        <img 
        src='https://static.vecteezy.com/system/resources/previews/023/575/435/original/an-organized-and-neat-stack-of-books-is-displayed-on-a-transparent-background-in-a-highly-realistic-design-generative-ai-png.png'
        className='w-80 max-sm:w-60'
        />
      </div>
    </div>
  );
}

export default LogIn;
