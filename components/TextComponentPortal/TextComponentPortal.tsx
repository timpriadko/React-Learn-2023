import ReactDOM from 'react-dom';

const TextComponentPortal = (props) => {
  return props.element
    ? ReactDOM.createPortal(props.children, props.element)
    : null;
};

export default TextComponentPortal;
