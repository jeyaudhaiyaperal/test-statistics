
import React,{useState,useEffect} from 'react'
import './App.css';
import firebase from "./firebase";
function App() {
  const[userDetails,setUserDetails]=useState([])
  const[sendNum,setSendNum]=useState()
  const[mean,setMean]=useState(49.45)
  const[median,setMedian]=useState(49)
  const[mode,setMode]=useState(77)
  const[stdDev,setStdDev]=useState(28)
  const db = firebase.firestore()
  useEffect(()=>{
    //initial example data
    
  db.collection('Dashboard').doc('statistics').set({
    Mean:49.45,
    Median:49,
    StdDev:28,
    Mode:77

  })
//   db.collection('Dashboard').doc('rose').get().then(
//     snapshot=>{ 
//     if(snapshot.data()!==null){
//     // setUserDetails(snapshot.data())
//     const array=[]
//     array.push(snapshot.data())
//     console.log('array',array)
//     // setUserDetails(array[0])
//     }
//     }
//    //  console.log(snapshot.data().id)
//    )
//   console.log('ud',userDetails)
},[]
  )
  const grabData=async()=>{
   await db.collection('Dashboard').doc('statistics').get().then(
     snapshot=>{ 
     if(snapshot.data()!==null){
      const array=[]
      array.push(snapshot.data())
      setUserDetails(array[0])
    //  setUserDetails(snapshot.data())

     }
     }
    //  console.log(snapshot.data().id)
    )
    console.log(userDetails)
  }
  const updateNum=(e)=>{
   e.preventDefault()
   setSendNum(e.target.value)

 
  }
  const updateData=async()=>{
    setSendNum('')
  //   if(
  //  sendNum!==''){
    // db.collection('Dashboard').doc('rose').update({
    //   Mean:Number(mean)+Number(sendNum),
      
    //  Median:Number(median)+Number(sendNum),
    // StdDev:Number(stdDev)+Number(sendNum),
    // Mode:Number(mode)+Number(sendNum)
    // })
    db.collection('Dashboard').doc('statistics').get().then(
      snapshot=>{
        if(snapshot.data()!== null){
          const array=[]
      array.push(snapshot.data())
      setUserDetails(array[0])
      setMean(userDetails.Mean)
      setMode(userDetails.Mode)
      setMedian(userDetails.Mode)
      console.log(mean)
        
        }
      
      }
    
    )
  await  db.collection('Dashboard').doc('statistics').update({
      Mean:Number(mean)+Number(sendNum),
      
     Median:Number(median)+Number(sendNum),
    StdDev:Number(stdDev)+Number(sendNum),
    Mode:Number(mode)+Number(sendNum)
    })
    db.collection('Dashboard').doc('statistics').get().then(
      snapshot=>{
        if(snapshot.data()!== null){
          const array=[]
      array.push(snapshot.data())
      setUserDetails(array[0])
      console.log(mean)
      
        }
      }
    )
  
  }
  // on clicking button getting a document from firebase
  // and populating recent after entering in input value
  return (
    <div className="App">
      <div className="heading">
       <p>Statistics data is vital to think logically</p>
     </div>
     <div className="load">
     <p>I will load mean,medain,mode,standard deviation once you click <span className ="load">load</span> </p>
     <p>I will update mean,medain,mode,standard deviation once you click <span className="submit"> submit</span> </p>
     </div>
      <div className="master-flex">
      <div className="master-container">
     <p className="statistics">Hi statistics</p>
      <input value={sendNum} onChange={updateNum} type="number" />
     <button onClick={updateData}>submit</button>
     <button onClick={grabData} >load data</button>
    
    <div className="dashboard">
      {/* <p>{userDetails}</p> */}
   {/* { userDetails? userDetails.map(userDetail=>
     console.log(userDetails)
      (<>
      <p>Mean</p>
      <p>{userDetail.Mean}</p>
      </>

      )
      ):""} */}
     
      <div className="dashboard-row">
        <div className="Mean">
          <p>{userDetails!=="" && "Mean"}</p>
      <p>{userDetails.Mean}</p>
      </div>
      <div className="mode">
      <p>{userDetails!=="" && "Mode"}</p>
      <p>{userDetails.Mode}</p>
      </div>
      <div className="median">
      <p>{userDetails!=="" && "Median"}</p>
      <p>{userDetails.Median}</p>
      </div>
      <div className="std">
      <p>{userDetails!=="" && "StdDev"}</p>
      <p>{userDetails. StdDev}</p>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
