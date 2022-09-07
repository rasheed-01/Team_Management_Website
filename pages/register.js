import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {BiShow, BiHide} from "react-icons/bi";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [passworValidation, setPasswordValidation] = useState('Minimum 8 and maximum 20 characters, \nat least one uppercase letter, \none lowercase letter, \none number and one special character');
    const onHandlePasswordValidation = (event) => {
    event.preventDefault();
        const passowrd = event.target.value;
        const passowrdValidationMessage = 'Minimum 8 and maximum 10 characters, ';
            if (!/[a-z]/.test(passowrd)) {
                passowrdValidationMessage += '\nat least one lowercase letter, ';
            }
            if (!/[A-Z]/.test(passowrd)) {
                passowrdValidationMessage += '\nat least one uppercase letter, ';
            }
            if (!/[@$!%*?&]/.test(passowrd)) {
                passowrdValidationMessage += '\nat least one special character, ';
            }
            if (!/\d/.test(passowrd)) {
                passowrdValidationMessage += '\nat least one number, ';
            }
            setPasswordValidation(passowrdValidationMessage);
    };

    const onHandleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="h-screen">
            <div className="register-div -z-10">
                <Image
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    className="object-center object-cover pointer-events-none"
                    priority
                    src="/images/background/registerBg.png"
                    alt={"registerBg"}
                />
            </div>
            <div className="h-screen register-buttons-toCenter ">
                <div className="col-span-2 col-start-2 grid justify-items-center">
                    <div className="register-text_div">
                        <p className="register-welcome-text">Welcome to OXA,</p>
                        <p className="register-welcome-text"> your personalized task manager.</p>
                        <p className="register-journey-text">To start your journey, please register your Work Space Name & Email</p>
                    </div>
                    <form className="log-reg" action="./dashboard" method="post">
                        <div className="register-input-container">
                            <label className="log-reg-label" htmlFor="name">Work Space Name</label>
                            <input className="log-reg-input" type="text" minLength="3" id="name" name="name" placeholder="Space Team" required />
                        </div>
                        <div className="register-input-container">
                            <label className="log-reg-label" htmlFor="email">Email Address</label>
                            <input className="log-reg-input" type='email' id="email" name="email" placeholder="syafic@spaceteam.com" required />
                        </div>
                        <div className="register-input-container">
                            <label className="log-reg-label" htmlFor="password">Password</label>
                            <div className="flex justify-between">
                                <input type={(showPassword)? "text": "password"} 
                                className="log-reg-input inline"
                                onChange={onHandlePasswordValidation}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$" 
                                title={passworValidation}
                                id="password" name="password" placeholder="password" required />
                                <button className="show-password-button" onClick={onHandleShowPassword}>{(showPassword)? <BiShow size="25px"/> : <BiHide size="25px"/>}</button>
                                </div>
                        </div>
                        <button className="register-button" type="submit">Register</button>
                    </form>
                    <Link href={"/login"}><button className="login-button" >Login</button></Link>
                </div>
            </div>
        </div>
    );
    //m_NOTE: form  action="./api/registerForm"
}

export default Register;