/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-17 18:39:44
# FilePath: /babylon_apidoc/src/pages/Loader/Obj.js
# Description: 
#
============================================================================= */
import {MiddleComponent,React} from '../../utils/MiddleComponent'

export class Obj extends MiddleComponent {
	constructor(props){
		super(props);
	}
	

  render() {
    return (
        <iframe title="load" src="/html/Loader/Obj.html" frameBorder="none" style={{width:'100%',height:'100%'}} />
    );
  }

  componentDidMount() {

  }
  
}

  