import React, { createContext, useContext, useState } from "react";
import type { SignupValuesProps } from "../types/signup";

type UserContextType = {
    userData:SignupValuesProps | null;
    setUserData: (data: SignupValuesProps | null) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<SignupValuesProps | null>(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}