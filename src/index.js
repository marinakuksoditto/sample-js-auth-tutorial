import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { init } from "@dittolive/ditto"
import { Auth0Provider } from "@auth0/auth0-react"

(async () => {
  await init()
  const root = createRoot(document.getElementById('root'));
  root.render(
    <Auth0Provider
      domain="YOUR_DOMAIN_HERE"
      clientId="YOUR_CLIENT_ID_HERE"
      redirectUri={window.location.origin}
      audience="YOUR_AUDIENCE_HERE"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  );
})()
