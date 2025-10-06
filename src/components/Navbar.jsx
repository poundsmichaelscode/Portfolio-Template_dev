import { useState } from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import{Link} from "react-scroll"

const Navbar = () => {

  const [nav, setNav] = useState(false)
const links = [
  {
  id:1,
  link: "Home"
}, 
{
  id:2,
  link: "About"
},
{
  id:3,
  link: "Portfolio"
},
{
  id:4,
  link: "Experience"
},
{
  id:5,
  link: "Blog"
},
{
  id:6,
  link: "Contact"
},
]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-6'>

<div>
  <h1 className='font-mono text-2xl ml-3 cursor-pointer hover:scale-105 duration-300 '>Michael Jones {}</h1>
 </div>
    <ul className='hidden md:flex'>
{links.map(({id, link}) => (

  <li 
  key={id}
  className='px-4 cursor-pointer font-medium text-gray-600 hover:scale-105 duration-300'>
  <Link to ={link} smooth duration={600}>{link}</Link>
    </li>
  ))}
 </ul>
 <div onClick={() => setNav (!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-700'>
  {nav ? <FaTimes size={20}/> : <FaBars size={30}/>} 
 </div>

 {nav && (
<ul className="flext flex-col justify-center items-center absolute top-0 left-0 w-full h-screen W-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
{links.map(({id, link}) => (
<li key={id} className="px-4 cursor-pointer capitalise py-6 text-4xl">    
  {link}
  </li>
))}
</ul>
)}

</div>

 

 
 
  );
};

export default Navbar