import React,{useState} from 'react'
import IntrestCard from './IntrestCard'
import DataService from '../../DataService'
function Intrest(props) {
    
    const [selectedIntrest,setSelectedIntrest]=useState([]);   
    const handleClick=()=>{
        alert(selectedIntrest);
        DataService.addIntrest(selectedIntrest).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        });
    } 
    return (
        <div>
            <div className="container pb-5 mb-sm-1" id="content">
            <div className="row">
            <IntrestCard data={props.data[0].workout} state={selectedIntrest} setState={setSelectedIntrest}/>
             <IntrestCard data={props.data[1].mindfullness} state={selectedIntrest} setState={setSelectedIntrest}/>
            <IntrestCard data={props.data[2].familytime} state={selectedIntrest} setState={setSelectedIntrest}/>
            <IntrestCard data={props.data[3].music} state={selectedIntrest} setState={setSelectedIntrest}/>
           <IntrestCard data={props.data[4].Food} state={selectedIntrest} setState={setSelectedIntrest}/>
            <IntrestCard data={props.data[5].Relax} state={selectedIntrest} setState={setSelectedIntrest}/>
          
        </div>
        <button type="button" class="btn btn-success" onClick={handleClick}>continue</button>
        </div>
        
        </div>
    )
}

export default Intrest
