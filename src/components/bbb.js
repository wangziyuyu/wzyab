import React from 'react';
require('styles/wzy.css');

class Wzy extends React.Component{
  render(){
    return(
      <div className="Nes">
        <div className="list">
     
          <h2>{this.props.item.titlea}</h2>
           <div className="jbzl">
              <div className="jbzl_l">
                {this.props.item.content1.map((e)=>{
                  return <p key={e}>{e}</p>
                })}
              </div>
             
            </div>
            
           
            
        </div>      
      </div>
    )
  }
}


export default Wzy; 
