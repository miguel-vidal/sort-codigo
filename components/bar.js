import React from 'react';

export const Bar=({data,rangeValue, color})=>{

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

    return(
        <div className="graph">
            {
                data.map((n,i)=>{
                        return(
                            <div key={i} id={i} style={{
                                backgroundColor:`${color}`,
                                border:'1px solid black',
                                width: `${width}`,
                                height:`${n}px`,
                            }}>
                            </div>
                        );
                })
            }
        </div>
    );
}