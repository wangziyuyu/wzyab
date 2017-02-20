import React from 'react';
import $ from 'jquery'
import Xinwen from './Bbb'

class Aaa extends React.Component{

	constructor(){
       super()
       this.state = {
        data1:{
		
			titlea:'基本信息',
			content1:['姓名：王子瑜','出生年月：1996-06','籍贯：辽宁沈阳','邮箱：1297121740@qq.com','性别：女','民族：汉','联系方式：17600126602'],
		
		},

		data2:{
		
			titlea:'个人简介',
			content1:['1.熟练W3c编程标准，能熟练运用HTML+CSS，HTML5+CSS3等完成页面布局效果','2.熟练使用原生js完成页面动画，并可以熟练运用jquery、angular、swiper等框架进行开发，了解zepto、bootstrap等框架，了解less等预处理语言，并且对Echarts有研究；','3.擅长运用rem、流式布局、媒体查询等进行响应式开发，有移动端开发的经验，了解面向对象','4.能有效解决各大主流浏览器的的兼容问题','5.熟悉ajax、json等，掌握svn、git开发过程、能使用grunt等自动化构建工具','6.能运用node.js对mysql数据库进行增删改查','7.熟练使用PS、AI、sublime text、HBuilder、Dreamweaver等软件','8.对用户体验有一定程度的理解、能协同团队一起开发'],
		
		},
		data3:{
		
			titlea:'工作经历',
			content1:['北京先驰网络有限公司 | WEB前端工程师（2014.10-2017.2）','1.按照规范对设计师提供页面进行切图','2.利用前端技术以及框架对页面进行开发','3.与主管良好沟通完美将动画以及功能实现，确保浏览器兼容问题','4.与后端开发团队紧密配合，确保代码有效对接，实现动态交互','5.对上线项目进行关注、维护以及优化'],
		
		},
		data4:{
		
			titlea:'项目经验 ( 近期 ) ',
			content1:['1.APP订餐购物项目（移动端）','运用技术：rem、HTML5、CSS3、JavaScript、jQuery、ajax','项目描述：利用rem进行移动端布局，可适应移动端不同设备的荧屏宽度。后台加前端完美配合，短时间之内完成整站连接，本人负责关于页面的编写及获取数据加js特效，利用css3 动画完美切换。','2.瑞森建筑：','运用技术：HTML/CSS、HTML5、CSS3、JavaScript、jQuery、ajax','项目描述：兼容各大主流浏览器，响应pc端，笔记本端，ipad端以及手机端，团队分工。后台加前端完美配合，短时间之内完成整站连接，本人负责关于以及登录页面的编写及获取数据加兼容以及js特效，利用css3动画完美切换'],
		     
		}

		
	}

	}

	render(){
			return (
				<div>
				 <h1>个人简历</h1>
					<Xinwen item={this.state.data1}></Xinwen>
					<Xinwen item={this.state.data2}></Xinwen>
					<Xinwen item={this.state.data3}></Xinwen>
					<Xinwen item={this.state.data4}></Xinwen>
				</div>
			)
	}





}



export default Aaa;