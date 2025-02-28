
import * as React from './node_modules/react/index.js';
import { createRoot } from './node_modules/react-dom/client.js';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(React.createElement(App));
