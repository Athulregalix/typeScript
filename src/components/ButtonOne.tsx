import StylesWrapper from '../HOC/StylesWrapper'

interface ButtonOneProps {
  disable: boolean;
  styles:Object;
}

const ButtonOne=(props:ButtonOneProps)=> {  
  return (
    <button style={props.styles}  >i am a button</button>
  );
}

export default StylesWrapper(ButtonOne);
