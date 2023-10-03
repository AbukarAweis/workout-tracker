import {useState} from 'react'
import {useLogin} from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
             <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button className="btn" disabled={isLoading}>Log In</button>
            <h1 className='hint'>Test Emails - user1@email.com , user2@email.com</h1>
            <h1 className='hint'>Test Password - ABCabc123!</h1>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login