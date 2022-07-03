// styles
import {useState} from 'react'

import './Login.css'
import {useLogin} from '../../hooks/useLogin'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login, error, isPending} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Login in</h2>
            <label>
                <span>email</span>
                <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>password</span>
                <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            
            
{!isPending && <button className="btn">Login in</button>}
{isPending && <button className="btn" disabled>loading</button>}      
    {error && <div className = "error">{error}</div>}   
</form>
    )
}