
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

console.log("React version:", React.version);

createRoot(rootElement).render(<App />);
