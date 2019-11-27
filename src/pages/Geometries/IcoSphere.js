import {MiddleComponent,React} from '../../utils/MiddleComponent'
// import * as BABYLON from 'babylonjs';


export class IcoSphere extends MiddleComponent {
	constructor(props){
		super(props);
	}
	

  render() {
    return (
        <iframe title="load" src="/html/Geometries/IcoSphere.html" frameBorder="none" style={{width:'100%',height:'100%'}} />
    );
  }

  componentDidMount() {

  }
  
}

  