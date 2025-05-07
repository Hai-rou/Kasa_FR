import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/error.css'



export function Error() {
   return(
    <>
    <main>
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
    </>
   )
}