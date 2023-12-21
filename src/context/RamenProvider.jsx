import { useState } from "react"
import { RamenContext } from "./RamenContext"

export const RamenProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <RamenContext.Provider value={{user, setUser}}>
        { children }
    </RamenContext.Provider>
  )
}
