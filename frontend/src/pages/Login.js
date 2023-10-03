import {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
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

            <button>Log In</button>

            <h1 className='hint1'>Test Emails - user1@email.com , user2@email.com</h1>
            <h1 className='hint1'>Test Password - ABCabc123!</h1>
        </form>
    )
}

export default Login