import commonStyles from '../styles/commonStyles';
import {AppState} from '../App'
import ButtonOne from '../components/ButtonOne'


const translateProps =(props:AppState)=>{    
    let _styles ={...commonStyles.default}   
    if(props.disable===true){
        _styles = {..._styles, ...commonStyles.disable}  
    } 
    const newProps ={...props, styles:_styles}    
    return newProps
}

const StylesWrapper =  (WrapperComponent: any)=>{ 
  return function WrappedRender(args:AppState){
      return WrapperComponent(translateProps(args))
  }
}
export  default StylesWrapper