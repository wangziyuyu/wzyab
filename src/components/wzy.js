import React from 'react';
import Xyy from './xyy';
import $ from 'jquery'
class Wzy extends React.Component{
/*constructor(){
		super()
		this.state={
			name:[{name:'jgr',age:29},{name:'jgr2',age:29}],
			val:'xrr'

		}
	}




	componentDidMount(){
		alert()
		$.ajax({
			url:'http://47.90.20.200:1510/co',
			type:"get",
			
			dataType:'json',
			success:(e)=>{
				this.setState({
					name:e
				})
			}
		})
	}
	xrr(){
		alert(222)
		this.refs.ml.style.border="4px solid red"
	}
	 render() {
          return (
      <div className="index">
        <input type="text" ref='bj' defauValue={this.state.val} />
        <input type="text" ref='ml' />
        <button onClick={this.xrr.bind(this)}>444</button>
        <Xyy />
      </div>

    );


	 }*/

constructor(){
		super()
		this.state={
			name:[]
		}
	}
	
	componentDidMount(){
		$.ajax({
			url:"http://47.90.20.200:1510/co",
			type:"get",
			dataType:"json",
			success:(e)=>{
				console.log(e)
				this.setState({
					name:e
				})
			}
		})
	}
	
	s(){
		if(this.refs.aa.value&&this.refs.aa.value){
			$.ajax({
				url:"http://47.90.20.200:1510/co",
				type:"post",
				dataType:"json",
				data:{name:this.refs.aa.value,co:this.refs.bb.value},
				success:(e)=>{
					alert("提交成功");
					$.ajax({
						url:"http://47.90.20.200:1510/co",
						type:"get",
						dataType:"json",
						success:(e)=>{
							console.log(e)
							this.setState({
								name:e
							})
						}
					})
					this.setState({
						name:e.name,
						co:e.co
					})
				}
			})
		}else{
			alert("输入框不能为空！")
		}
	}
	
	render(){
		return (
			<div>
				<ul>{this.state.name.map((e,i)=>{
					return <li key={i}>{'name:'+e.name}<p>{'co:'+e.co}</p></li>
				})}</ul>
				name:<input ref='aa' type='text' />
				co:<input ref='bb' type='text' />
				<button onClick={this.s.bind(this)}>提交</button>
			</div>
		)
	}

}



export default Wzy;