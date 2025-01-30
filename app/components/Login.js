import { useState } from 'react';
import styles from './Login.module.css';
import { TextField } from '@mui/material';

export default function Login({setLoggin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setLoggin(true)
    }
    

    return (
        <div className={styles.main}>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}></TextField>  
            <button onClick={handleSubmit} className={styles.btn}>Login</button>
        </div>
    )
}