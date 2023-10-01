import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (!user) {
                try {
                    const response = await axios.get("http://localhost:4000/user", { withCredentials: true });
                    setUser(response.data);
                    setReady(true);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        }

        fetchData();
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser,ready }}>
            {children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
