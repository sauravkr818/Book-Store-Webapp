import React, { useState, useEffect } from "react";
import { Drawer} from "antd";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

export default function DrawerComp({ visibility, onClose, changeLogout, changeLogIn}) {
    const [profile, setProfile] = useState(null);

    const clientId =
        "242321015787-jipcd7c5t0qad1b6ssagp65tvmm42psl.apps.googleusercontent.com";

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: "",
            });
        };
        gapi.load("client:auth2", initClient);
    });

    const onSuccess = (res) => {
        sessionStorage.setItem('time',JSON.stringify(res));
        setProfile(res.profileObj);
        changeLogIn();
        console.log("success:", res);
    };
    const onFailure = (err) => {
        console.log("failed:", err);
    };

    const logOut = () => {
      sessionStorage.removeItem('time');
      changeLogout();
      setProfile(null);
    };

    return (
        <>
            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                visible={visibility}
            >
                <div>
                    <h2>React Google Login</h2>
                    <br />
                    <br />
                    {profile ? (
                        <div>
                            <img src={profile.imageUrl} alt="user" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <GoogleLogout
                                clientId={clientId}
                                buttonText="Log out"
                                onLogoutSuccess={logOut}
                            />
                        </div>
                    ) : (
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={"single_host_origin"}
                            isSignedIn={true}
                        />
                    )}
                </div>
            </Drawer>
        </>
    );
}
