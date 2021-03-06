import {connect} from 'react-redux'
import React,{Component} from 'react'
import './sidebar.scss'

class SideBar extends Component{
    constructor(){
        super()
        this.state={
            button:false,
            dep:'',
            cat:''

        }
    }
   
    clickHandler=(e)=>{      
       
        console.log('jk', e.target.name)
        this.setState({dep:e.target.name})
        this.props.dep_id(e.target.value)
        this.setState({button:true})
    }
 
    departmentRender=({depdata})=>{
        if(depdata){
            return(
                depdata.map((item,key)=>{
                    return(
                        <div onClick={this.clickHandler} onChange={this.changeHandler} key={item.department_id}>
                            <button name={item.name}  className='button btn_class' value={item.department_id} >{item.name}</button>
                        </div>    
                )}) ) }}

    countRender=({Tcount})=>{
        if(Tcount){
            return(
                Tcount.count
            )
    }
       
        
    }
    clickHandler2=(e)=>{
        this.props.cat_id(e.target.value)
        this.setState({cat:e.target.value})
    }

    categoryRender=({catdata})=>{
        if(catdata){
            if(catdata.rows){
                return(
                    catdata.rows.map((item)=>{
                        return(
                            <div onClick={this.clickHandler2} key={item.category_id}>
                                <button className='button' value={item.category_id} >{item.name}</button>
                            </div>    
                    )}) ) 
            }
            else{
                return(
                    catdata.map((item)=>{
                        return(
                            <div onClick={this.clickHandler2} key={item.category_id}>
                                <button className='button' value={item.category_id} >{item.name}</button>
                            </div>    
                    )}) )
                
           }
        
        }
    }
    renercolor=()=>{
        if(this.state.dep){
        (this.state.dep).style.backgroundColor = 'red'
        }
        
    }

    render(){
        return(
            <div className='sidesection'>
           <center className='sidebar'> <h1 className='sideHead'>Filter<span className='filter'> {this.countRender(this.props)} </span>items</h1>
           {/* <hr/> */}
            <h2 className='subHead'>Departments</h2>
            <div>
                {this.departmentRender(this.props)}
            </div>
            <h2 className='subHead'>Categories</h2>
            <div>
                {this.categoryRender(this.props)}
               
            </div>
            {/* {this.renercolor()} */}
            </center>
            </div>
        )
    }
}

function mapStateToProps(state){
      return{
          mydata:state.items,  
      }
  }

export default connect(mapStateToProps)(SideBar)

