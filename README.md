# firebase-authentication-react-bootstrap

Using react and react-bootstrap to build a Firebase authentication app, follow by the [youtube tutorial](https://www.youtube.com/watch?v=6kgitEWTxac&list=RDCMUChPxqdfDbulLE9PyUqhijWw&index=4)

## Screenshots
<img width="462" alt="auth-firebase" src="https://user-images.githubusercontent.com/67775387/199186351-b17fcc52-91d1-423a-9324-8cb774673351.png">


## Components
`ProtectedRouted`: Wrap the `<Home/>` component, avoid unauthenticated users can able to access the routes.

`Login`: Login form component.

`Signup`: Sign up form component.

## Context
`UserAuthContext` provides the login user data and firebase authentication methods to the child components. It also subscribe to the user login and logout event.

## Config
Having a `firebase.js` inside src folder, store the firebaseConfig and the initialize method for firebase.

## Dependencies

+ react-bootstrap
+ react-google-button
+ firebase
+ react-router-dom
