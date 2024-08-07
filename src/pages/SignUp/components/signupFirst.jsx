import React, { useState, useContext, useEffect } from 'react';
import { RxAvatar } from "react-icons/rx";
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';

export const SignupFirst = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validatedEmail, setValidatedEmail] = useState("");
    const [validatedPassword, setValidatedPassword] = useState("");

    const [products, setProducts, users, setUsers] = useContext(MyContext)
    console.log(users);
    const goto = useNavigate('')
    useEffect(() => {
        console.log("Updated Users:", users);
    }, [users]);
    const create = (e) => {
        e.preventDefault();
        const validateEmail = (inputEmail) => {
            const trimmedEmail = inputEmail.trim().toLowerCase().replace(/ /g, '');
            if (trimmedEmail.length < 10 || trimmedEmail.indexOf('@') === -1 || (trimmedEmail.split('@').length - 1 !== 1)) {
                setValidatedEmail("Enter a valid email (at least 10 characters and @).");
                return false;
            }
            setValidatedEmail("");
            return true;
        };

        const validatePassword = (inputPassword) => {
            const trimmedPassword = inputPassword.trim();
            if (trimmedPassword.length < 7 || !(/[A-Z]/.test(trimmedPassword) && /[a-z]/.test(trimmedPassword) && /\d/.test(trimmedPassword) && /[@#\-+*/]/.test(trimmedPassword))) {
                setValidatedPassword("Enter a strong password (at least 7 characters with a mix of uppercase, lowercase, numbers, and special characters).");
                return false;
            }
            setValidatedPassword("");
            return true;
        };

        if (firstname && lastname && validateEmail(email) && validatePassword(password)) {
            const newUser = {
                email: email,
                passWord: password,
                firstName: firstname,
                secondName: lastname,
                products: [],
            };
            console.log("New User:", newUser); // Check if the new user object is correct
            // Update users state using a function to ensure the latest state
//Mahdi code
            let newTab = [...users]
            newTab.push(newUser)
            setUsers(newTab)
            console.log(newTab);

            goto('/')
            console.log(users);
        } else {
            alert("Kanchem ri7t lghalat");
        }
    };
    return (
        <>
            <div className='w-[100%] flex max-[430px]:flex-col justify-center items-center'>
                <div className='lg:w-[70%] lg:p-40 flex flex-col max-[430px]:p-10 mt-10 '>
                    <h1 className='text-black text-4xl'>
                        Create Account
                    </h1>
                    <p className='text-black text-2xl py-4'>
                        Your Personal Details
                    </p>
                    <form onSubmit={create} className='flex flex-col'>
                        <label className='py-2' htmlFor="firstName">First Name</label>
                        <input className='' type="text" placeholder='First Name' value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstName" />
                        <label className='py-2' htmlFor="lastName">Last Name</label>
                        <input className='' type="text" placeholder='Last Name' value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastName" />
                        <label className='py-2' htmlFor="email">Email</label>
                        <input className='' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                        {validatedEmail && <p className="text-red-500">{validatedEmail}</p>}
                        <label className='py-2' htmlFor="password">Password</label>
                        <input className='' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                        {validatedPassword && <p className="text-red-500">{validatedPassword}</p>}
                        <button onClick={create} type="submit" className='bg-black w-[150px] font-bold text-white p-4 my-4 text-2xl hover:bg-[#e65540] flex items-center justify-between'>
                            <RxAvatar /> Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

