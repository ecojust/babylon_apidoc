/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-18 14:00:06
# FilePath: /babylon_apidoc/src/pages/Other/Background.js
# Description: 
#
============================================================================= */
import {MiddleComponent,React} from '../../utils/MiddleComponent'

export class Background extends MiddleComponent {
	constructor(props){
		super(props);
	}
	

  render() {
    return (
        <iframe title="load" src="/html/Other/Background.html" frameBorder="none" style={{width:'100%',height:'100%'}} />
    );
  }

  componentDidMount() {

  }
  
}

  