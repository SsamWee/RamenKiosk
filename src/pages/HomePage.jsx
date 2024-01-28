import { useContext } from "react";
import { Service, Language } from "../components"
import { AppContext } from "../context/AppContext"

export const HomePage = () => {

    const { user } = useContext(AppContext);

    return (
        <>
            <div className="page-container" >
                <div className="page-subcontainer">
                    <div className="logo-container">
                        <img className="logo animate__animated animate__fadeIn" src="./src/assets/Logo.png" alt="Kagurashi Ramen Logo" />
                        <h1>Kagurashi Ramen</h1>
                    </div>

                    {user?.language ? <Service /> : <Language />}

                </div>

            </div>


        </>
    )
}
