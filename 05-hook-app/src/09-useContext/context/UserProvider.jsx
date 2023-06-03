import { useState } from "react"
import { UserContext } from "./UserContext"


// const user = {
//     id: 123,
//     name: 'Arny',
//     email: 'mailfalso@noexiste.com',
// }

// reciben los childrens
// lo de value se comparte a todos los hijos del provider
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
