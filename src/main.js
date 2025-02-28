
import * as React from 'react';
import { createRoot } from "./react-dom.js";
import App from "./src/App.jsx";
import './index.css';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(React.createElement(App));
