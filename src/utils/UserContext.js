import { createContext } from "react";

const UserContext = createContext({
    LoggedIn: "default user"
}
);
export default UserContext; 