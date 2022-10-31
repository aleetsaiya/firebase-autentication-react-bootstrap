# firebase-authentication-react-bootstrap

Using react and react-bootstrap to build a Firebase authentication app, follow by the [youtube tutorial](https://www.youtube.com/watch?v=6kgitEWTxac&list=RDCMUChPxqdfDbulLE9PyUqhijWw&index=4)

## Components
`ProtectedRouted`: Wrap the `<Home/>` component, avoid unauthenticated users can able to access the routes.

`Login`: Login form component.

`Signup`: Sign up form component.

## Context
`UserAuthContext` provides the login methods that includs all the firebase authentication logics inside.

## Config
Having a `firebase.js` inside src folder, store the firebaseConfig and the initialize method for firebase.

## Dependencies

+ react-bootstrap
+ react-google-button
+ firebase
+ react-router-dom
