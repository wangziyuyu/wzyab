require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Aaa from './Aaa';
import Wzy from './bbb';
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

	constructor(){
		super()
		this.state={
			name:[{name:'jgr',age:29},{name:'jgr2',age:29}]
		}
	}
  render() {
    return (
      <div className="index">

 
        <Aaa />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
