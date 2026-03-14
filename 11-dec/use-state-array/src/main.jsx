import ReactRootDom from 'react-dom/client';
import App from './App.jsx';


const obj = ReactRootDom.createRoot(document.getElementById("root"));
obj.render(<App />);