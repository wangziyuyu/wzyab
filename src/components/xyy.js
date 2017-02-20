import React from 'react';
import Aaa from './aaa';
class Xyy extends React.Component{
constructor(){
		super();
		this.state = {
			tim:null,
			del:'星期',
			data:['周一','周二','周三','周四','周五','周六','周日']
		}
	}
	start(){
        clearInterval(this.state.tim)
        let index=0
        this.state.tim = setInterval(()=>{
        	if(index>=this.state.data.length){
        		index=0
        	}
        	this.setState({del:this.state.data[index]});
        	index++;
        },100)
	}
    stop(){
        clearInterval(this.state.tim)
    }


	render(){
		return(
			<div>
               <div ref="con">{this.state.del}</div>
               <button onClick={this.start.bind(this)} >开始</button>
               <button onClick={this.stop.bind(this)}>停止</button>


               <Aaa />
            </div>
		)
	}

}
export default Xyy;