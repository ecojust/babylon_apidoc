/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-18 12:14:02
# FilePath: /babylon_apidoc/src/pages/Loader/Gltf.js
# Description: 
#
============================================================================= */
import {MiddleComponent,React} from '../../utils/MiddleComponent'

export class Gltf extends MiddleComponent {
	constructor(props){
		super(props);
	}
	

  render() {
    return (
        <iframe title="load" src="/html/Loader/Gltf.html" frameBorder="none" style={{width:'100%',height:'100%'}} />
    );
  }

  componentDidMount() {

  }
  
}

  