import {MiddleComponent,React} from '../../utils/MiddleComponent';


import {withRouter,HashRouter} from 'react-router-dom';
//引入组件和资源文件
import {Layout, Menu, Icon} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import './index.css';
import orange from "../../static/images/orange.png"

//引入路由
import Router from '../../router';
//拆分antd子组件
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

export class Frame extends MiddleComponent {
	constructor(props){
		super(props);
		this.state = {
			height:window.innerHeight,
			width:window.innerWidth,
			title:'',
		}
		this.menu = [
			{
				title:'babylon',
				children:[
					{
						title:'hello world',
						to:'/babylon1',
						desc:'hello world'
					}
				]
			},
			{
				title:'Geometries',
				children:[
					{
						title:'Lines',
						to:'/Lines',
						desc:'线段'
					},
					{
						title:'DashedLines',
						to:'/DashedLines',
						desc:'虚线段'
					},
					{
						title:'Plane',
						to:'/Plane',
						desc:'平面'
					},
					{
						title:'Ground',
						to:'/Ground',
						desc:'地面'
					},
					{
						title:'Box',
						to:'/Box',
						desc:'立方体'
					},
					{
						title:'Sphere',
						to:'/Sphere',
						desc:'球体'
					},
					{
						title:'Disc',
						to:'/Disc',
						desc:'正多边形面'
					},
					{
						title:'Cylinder',
						to:'/Cylinder',
						desc:'棱柱体'
					},
					{
						title:'Torus',
						to:'/Torus',
						desc:'圆环'
					},
					{
						title:'TorusKnot',
						to:'/TorusKnot',
						desc:'圆环'
					}
				]
			},
		];
  		this.initHeightLight();
	}

	//初始化高亮菜单
	initHeightLight = (type)=>{
		let path = this.$route.path;
		if(path){
			var menu = this.menu;
			var desc = '';
			menu.map((item)=>{
				item.children.map((items)=>{
					if(~path.indexOf(items.to)){
							desc = items.desc||'暂无简介!';
					}
					return items;
				})
				return item;
			});
		  	this.state.title = desc;
		}
		
	}

	//点击菜单更新对应描述文字
	showTitle = (desc)=>{
		this.setData({
			title:desc||'暂无简介!'
		})
	}
	
	//解决刷新高亮的问题
	sideMenu = ()=>{
		var menu = this.menuDom();
		return withRouter(({history})=>{
			return (
				<Menu mode="inline" selectedKeys={[history.location.pathname]} defaultOpenKeys={['babylon','Geometries']}>
					{ menu }
				</Menu>
			)
		})
	}

	//根据数据拼接菜单dom
	menuDom = ()=>{
		return this.menu.map((item)=>{
			return(
				<SubMenu key={ item.title } title={<span><Icon type="user" /> { item.title }</span>}>
					{ 
						item.children.map((items)=>{
							return (
								<Menu.Item key={ items.to } onClick={this.showTitle.bind(this,items.desc)}>
									<a href={'/#'+items.to}>
									  { items.title } 
									</a>
								</Menu.Item>
							)
						}) 
					}
				</SubMenu>
			)
		});
	}


  render() {
  	var SideMenu = this.sideMenu();
    return (
    	<HashRouter>
		<Layout>
		    <Sider theme="light" style={{
			  overflow: 'auto',borderRight:'1px solid #e8e8e8', position: 'fixed', left: 0,width:200, height: this.state.height,
			//   display:'none'
		    }}
		    >
				<div className="logo">
			      	<img alt="logo" src={ orange }></img>
			      	babylon
			      </div>
			    <Scrollbars style={{ width:'100%', height: 'calc(100% - 60px)' }}>
			      
			      <SideMenu />
			    </Scrollbars>
		    </Sider>
		    <Layout style={{ marginLeft: 200 }}>
		      <Header style={{ background: '#fff',height:60,padding:'0 20px',borderBottom:'1px solid #e8e8e8' }}>
		       <h4>{ this.state.title }</h4>
		      </Header>
		      <Content style={{ padding:'0px 200px',height:this.state.height - 120,width:this.state.width - 210 }}>
			      <div style={{height:'100%', width:'100%'}}>
			      	<Router />
		          </div>
		      </Content>
		      <Footer style={{ textAlign: 'center',height:60,borderTop:'1px solid #e8e8e8',background: '#fff' }}>
		        CopyRight ©2019 桔子桑
		      </Footer>
		    </Layout>
		</Layout>
		</HashRouter>
    );
  }


  
}

  