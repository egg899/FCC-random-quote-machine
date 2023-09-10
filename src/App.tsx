import { useEffect, useState } from 'react';
//import quotes from "./assets/quotes.json"
// import Button from "./assets/Button.jsx";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import './App.css';



// interface Quote {
//   quote: string;
//   author:string;
// }

// const getRandomQuote = (): Quote => {
//   return quotes[Math.floor(Math.random()*quotes.length)]
// } 


const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgba(${red}, ${green}, ${blue}, 0.8)`;
}






const transition = "all 1s";

function App() {
  // const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [quote, setQuote] = useState([])
  const [randomColor, setRandomColor] = useState(getRandomColor())

  const getRandomQuote = async () => {
     await fetch(
      "https://api.quotable.io/random"
      ).then((res) => res.json())
      .then((result) => setQuote(result));

    
    
  }
  

  

// const changeQuote = ()=>{
//   setQuote(getRandomQuote());
// }

useEffect(() =>{
  getRandomQuote();
}, [])

const changeQuote = ()=>{
  getRandomQuote();
  setRandomColor(getRandomColor());
}


// var element = document.getElementById("quote-box");
// element.addEventListener('click', function(){alert()})



  return (
    <div className="background" style={{backgroundColor: randomColor, transition}}>
   <div id="quote-box">
     <div className="quote-content" style={{color:randomColor, transition}}>
      


       <h2 id="text">
       <FaQuoteLeft size="30" style={{marginRight: "10px"}}/>
         
         {quote.content} 
         <FaQuoteRight size="30" style={{marginLeft: "10px"}}/>
         </h2>
       
       <h4 id="author">{quote.author}</h4>

     </div>


    <div className="buttons">
      <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.content}${quote.author}`}
      id="tweet-quote" target="_blank" style={{backgroundColor:"#1DA1F2",marginRight: "10px"}}
      >
        <FaTwitter color="white"/>

      </a>

      {/* <Button id="new-quote" changeQuote={changeQuote} title={"Change Quote"}/> */}
      <button id="new-quote" onClick={() =>  changeQuote()} style={{backgroundColor:randomColor, transition}}>Change Quote</button>

    </div>
     {/* {quote.quote} */}
{/* <button id="new-quote" onClick={() =>  changeQuote()}>Quote</button> */}

   </div>
     </div>
  )
}

export default App
