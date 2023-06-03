import React, { useState } from 'react'


interface User {
    uid: string;
    name: string;
}

const temUser: User = {
    uid: 'xdf',
    name: 'juandddd'
}

export const Usuario = () => {

    const [user, setUser] = useState<User>({
        uid: '',
        name: ''
    });

    const login = () => {
        setUser({
            uid: 'ASFV3442',
            name: 'Arny C'
        })
    }

    

    return (
        <div className='mt-5'>
            <h3>Usuario: useState</h3>

            <button
                onClick={ login }
                className='btn btn-outline-primary'
            >
                Login
            </button>
            {
                (!user)
                    ? JSON.stringify(temUser)
                    : JSON.stringify(user)
            }
        </div>
    )
}
