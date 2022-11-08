import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBncLisw9Ec6Z8A_ufdcRWhcDNFEMROVdo",
    authDomain: "fb-auth-cl.firebaseapp.com",
    projectId: "fb-auth-cl",
    storageBucket: "fb-auth-cl.appspot.com",
    messagingSenderId: "657287478186",
    appId: "1:657287478186:web:bad2f6353fd54e8357c9d3"
};


export default function Login({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) //connects to firebase
        const auth = getAuth(app) //connects us to firebase auth 
        const response = await signInWithEmailAndPassword(auth, email, password)
            .catch(alert);
            setUser(response.user)
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email
                    <input type="email" name="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="yourname@domain.com" />
                </label><br />
                <label htmlFor="password">Password
                    <input type="password" name="password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="......." />
                </label><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}