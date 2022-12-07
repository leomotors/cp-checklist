import { useContext } from "react";

import { AuthContext } from "./context";

export const useUser = () => useContext(AuthContext);
