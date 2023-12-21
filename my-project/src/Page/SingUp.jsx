import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SingUp() {
  const [Name, setName] = React.useState(undefined);
  const [password, setPassword] = React.useState('');
  const[data,setdata]=React.useState([])
  const nav=useNavigate();
  React.useEffect(()=>{
    axios.get('https://65704b6109586eff6641121e.mockapi.io/users')
  .then(res=>setdata(res.data))
  },[])
  const handleSignUp = () => {
   const user=data.find(user=>user.Name==Name&&user.Password==password)
   if(user){
    nav(`/HomeUser/${user.Name}`)
   }else{
    alert("Name or PassWord is not True")
   }
  };

  return (
    <div className="flex items-center justify-evenly  h-screen p-8 max-sm:flex-col">
      <div className='grid grid-cols-1 gap-4 border p-10 rounded-lg'>
        <div>
        <input
  value={Name === undefined ? '' : Name}
  onChange={(e) => { setName(e.target.value) }}
  className='border rounded-lg w-80 max-sm:w-60'
  placeholder="Name"
/>
        </div>
        <div>
          <input 
          value={password} 
          onChange={(e) => { setPassword(e.target.value) }} 
          className='border rounded-lg w-80 max-sm:w-60' 
          type="password" 
          placeholder='Password'/>
        </div>
        <button className='text-black text-2xl font-bold rounded-lg rounded-full' onClick={handleSignUp} >SingUp</button>
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
export default SingUp;
