import "./App.css";
import Header from "./components/Header";
import Calculator from './components/Calculator'
import Results from './components/Results'
import { useState,useEffect } from "react";


function App() {
  var inpu=document.querySelector(".custip");
  const [alltips,setAlltips]=useState([
    {
      id:1,
      tip:5,
      clicked:false
    },
    {
      id:2,
      tip:10,
      clicked:false
    },
    {
      id:3,
      tip:15,
      clicked:false
    },
    {
      id:4,
      tip:25,
      clicked:false
    },
    {
      id:5,
      tip:50,
      clicked:false
    }
  ])

  const [allInfo,setInfo]=useState({
    bill:0,
    tipSe:0,
    nuPeople:"erorr"
  });

  const [amountT,setAmount]=useState({
    tipAmount:0,
    total:0
  })

  const tipToggel=(id)=>{
    setAlltips(
      alltips.map((alltips)=>
        alltips.id===id?{...alltips,clicked:true}:{...alltips,clicked:false}
    )
    )
    inpu.value="";
  }

useEffect(()=>{
  alltips.map((alltips)=>{
    if(alltips.clicked){
      setInfo(t=>({...t,tipSe:alltips.tip}))
    }}
  )
},[alltips])

// calculator bille
useEffect(()=>{
  if(allInfo.nuPeople!=0){
      setAmount(t=>({tipAmount:(allInfo.bill*allInfo.tipSe/100/allInfo.nuPeople).toFixed(2),total:(allInfo.bill/allInfo.nuPeople+allInfo.bill*allInfo.tipSe/100/allInfo.nuPeople).toFixed(2)}));
  }
  
},[allInfo]);

  return (
    <div className="bille">
      <Header />
      <div className="content">
        <Calculator alltips={alltips} makeTip={tipToggel} setInfo={setInfo} setAlltips={setAlltips} allInfo={allInfo}/>
        <Results amountT={amountT} />
      </div>
    </div>
  );
}

export default App;
