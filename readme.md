# JWT Playground

The purpose of this little project is to make it simple to test an OpenID connect application.
The instructions below demonstrate AzureAD usage, but really this can work with any valid JWT token.
This was inspired by [jwt.ms](http://jwt.ms). While jwt.ms works great for copy pasted tokens, it is not suitable to act as a reply URL. This project is.

# Instructions!
(view with screenshots here - https://winsmarts.com/relying-party-token-decoder-for-your-openid-testing-15de91a74225)
  - Clone this repo
  - Run `npm install`
  - Run `npm start` .. you are now listening on http://localhost:3000

Next, you need an IDP that can authenticate you. AzureAD is a free and easy alternative.
Create an app registration in Azure AD, get it's client ID, and ensure http://localhost:3000 is a valid reply URL.

Now, visit the following URl to sign in (replace values accordingly, and remove line breaks)
```
https://login.microsoftonline.com/<tenantname>.onmicrosoft.com/oauth2/v2.0/authorize?
  client_id=<clientid>&
  response_type=id_token&
  redirect_uri=http%3A%2F%2Flocalhost:3000%2F&
  response_mode=form_post&
  scope=openid email&
  state=12345&nonce=678910
```

With this node based project still running, visit the above URL, it should authenticate you, and show the token returned parsed nicely for you.
