import ReactDOM from 'react-dom';

const Portal = ({ children }: any) => {
  const el: any = document.getElementById('portal-modal');
  return ReactDOM.createPortal(children, el);
};

export default Portal;
