"use client";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm () {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://reqres.in/api/login', {
                email: 'eve.holt@reqres.in',
                password,
            })
            navigate('/profile', { state: { token: res.data.token } });
        } catch {
            setError('Sorry, we cannot log you in, please try again!');
        }
    };
}