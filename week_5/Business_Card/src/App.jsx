import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { intersection } from 'zod'

function App() {
   const [card , setCard] = useState([{
      id : 1,
     name  : "Jagpreet Singh",
     description : "I am a founder of unicorn company",
     interest_section : ['Ionic' , 'OpenSource' , 'App Dev']

     
   }])

  return (
    <>
         {card.map((cd) => <CardComponent  key = {cd.id} name = {cd.name} description={cd.description}  interest_section = {cd.interest_section}></CardComponent>)}
    </>
  )
}



function CardComponent({ name , description  , interest_section}){
  return <div style={
   {width : "400px" , height : "300px" , color : 'black' , margin : "auto" , padding : "10px" ,
   fontFamily : 'sans-serif' , borderRadius : "8px" , justifyContent : 'center', border : '1px solid #ddd' , boxShadow :  '0 4px 8px rgba(0, 0, 0, 0.1)' , background : '#f8f9fa' }}>
     <h2>
      {name}
     </h2>
     <h3>
      {description}
     </h3>
     <label style={{fontSize : "20px"}}>Interest</label>
      <ul style={{marginBottom : "30px"}}>
        {interest_section.map((interest , index) => <li key={index} style = {{listStyle : "none", fontSize : "15px" , margin : "5px"}}>
          
          {interest}
          </li>)}
      </ul>
      <div>
        <a href="https://linkedin.com" style={{ width : "50px" , height : "30px" , padding : "10px 30px" , background : "blue", textDecoration : "none", margin : "20px", borderRadius : "5px", color : "white"}}>LinkedIn</a>
        <a href="https://x.com" style={{ width : "50px" , height : "30px" , padding : "10px 30px" , background : "blue", textDecoration : "none", margin : "20px", borderRadius : "5px", color : "white", target : "_blank"}}>Twitter</a>
      </div>
  </div>
}

export default App
