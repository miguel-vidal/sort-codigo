import React,{useEffect,useState} from 'react';
import {Bar} from './bar.js';
import {BubbleSort} from '../algoritmo/bubble.js';

export const Visualizer=()=>{

    const [data,setData]=useState([]);
    const [rangeValue, setRangeValue]=useState(5);

    useEffect(()=>{
        setValues();
    },[rangeValue]);

    const generateRandomNumbers=(max,min)=>{

        //return Math.trunc( Math.random()*(50 - 300) )+300
        return Math.trunc( Math.random()*(max-min ) )+min
    }

    const setValues=()=>{
        let arrayLength=rangeValue;
        let randomNumbers=[];
        for(let i=0; i< arrayLength; i++){
            //Random * (max-min) + min
            randomNumbers.push(generateRandomNumbers(5,400));
            
        }

        setData(randomNumbers);
    }

    const reset=function(){
        setValues();
    }

    const bubble=()=>{
        let options=document.getElementById("options");
        options.style="visibility:hidden;";
        let n=data;
        
        const sorted=BubbleSort(n); //obtener el array ya ordenado
        
        let width='';
            if(rangeValue <=15){
                width= '50px';
            }
            else if(rangeValue > 15 && rangeValue <=115){
                width= '7px';
            }
            else if(rangeValue >115){
                width='5px';
            }

        for(let i=0; i < data.length; i++){
            setTimeout(()=>{
                    document.getElementById(i).style=`
                        background:yellow; 
                        width:${width};
                        height:${sorted[i]}px;
                        border:1px solid black;
                    `

                if(i < data.length-1){
                    document.getElementById((i+1)).style=`
                        background:#5680E9;
                        width:${width}; 
                        height:${sorted[i]}px; 
                        border:1px solid pink;
                    `
                }
                if( i ===data.length-1){
                    options.style="visibility:visible;";
                }

            },i * 500);
        }
    }

            return(
                <div className="app">
                    <div id="options" className="options" >
                        <button className="btn"  onClick={()=>bubble()}>Bubble Sort</button>
                        <button className="btn  reset"  onClick={()=>reset()}>generar nuevo array</button>
                        <input type="range" id="rangeNormal" style={{cursor:'pointer'}}  min="5" max="205" step="10" defaultValue={rangeValue} onMouseUp={e=> setRangeValue(e.target.value)}/>
                        <input type="range" id="rangeResponsive" style={{cursor:'pointer'}}  min="5" max="65" step="10" defaultValue={rangeValue} onChange={e=> setRangeValue(e.target.value)}/>
                        <h2>{rangeValue}</h2>
                    </div>
                    <hr/>
                    {
                          <Bar data={data} rangeValue={rangeValue} color="gray"/>
                    }
                </div>
            );
}