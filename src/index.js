import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { init } from "@dittolive/ditto"

(async () => {
  await init()
  const root = createRoot(document.getElementById('root'));
  root.render(
    <App />
  );
})()
