# Ditto Tutorial: Online with Authentication in React

This code goes with the blog post [Ditto Tutorial: Online with Authentication in React](https://ditto.live/blog/js-react-auth-tutorial).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. First run `npm install`
2. If you haven't yet, [sign in or create an account on the Ditto Portal](https://docs.ditto.live/onboarding#-pBMP) and [create an App](https://docs.ditto.live/onboarding#-Mh5i).
3. Once you have an App, [copy your App ID and Playground Token](https://docs.ditto.live/onboarding#s1Ovv) into `src/ditto.js`. Under the `Auth` menu, select `with Authentication`. On that same page, under `Authentication Webhooks`, set `NAME` to `replit-auth` and `URL` to `https://alloweveryonewebhook.tester28.repl.co/auth` (PLEASE NOTE that this webhook URL should only be used for trying out this tutorial).
4. Create a new App and API on [auth0.com](https://auth0.com). Copy the App `domain`, App `ClientID`, and API `audience` into `src/index.js`. Copy the App `domain` into `src/App.js`. Configure Auth0 `Allowed Callbacks URLs`, `Allowed Web Origins`, and `Allowed Logout URLs` to `localhost:3000`. Under `Grant Types`, make sure the “Authorization Code” grant type is enabled.
5. Run `npm run start`.
