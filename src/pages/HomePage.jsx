import { useContext } from "react"
import { Service, Language } from "../components"
import { RamenContext } from "../context/RamenContext"

export const HomePage = () => {

    const { user } = useContext( RamenContext );
    console.log(user)


    return (
        <> 
            <div className="container d-flex flex-column justify-content-center align-items-center mt-4" >
                <img className="w-50" src="./src/assets/Logo.png" alt="Kagurashi Ramen Logo" />
                <h1 className="mt-3">Kagurashi Ramen</h1>
            </div>
            
            {user?.language ? <Service /> : <Language />}
        </>
    )
}
