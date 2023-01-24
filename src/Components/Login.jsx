import React, { useCallback, useState } from "react";
import "../Styles/app.css";
import { User } from "./User";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";

const ID =
  "24755588569-58kdbjvo4auu8u7s1kfo35i8lpe8b4lj.apps.googleusercontent.com";
const Login = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {
    setProvider(undefined);
    setProfile(undefined);
  }, []);

  return (
    <>
      {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )}
      <div
        className={`App ${
          provider !== undefined && profile !== undefined ? "hide" : ""
        }`}
      >
        <h1 className="title">Mohad Demo Project for Social Logins</h1>
        <h2 className="title">Project Name : mohadDemoProject</h2>

        <LoginSocialFacebook
          appId={719653036534972}
          fieldsProfile={
            "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
          }
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          client_id={ID}
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    </>
  );
};

export default Login;
