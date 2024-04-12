import { useEffect } from "react";
import { useRouter } from "next/router";


const dashboard = () => {

    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        router.push('/')
    }

    useEffect(() => {
        const isLogged = localStorage.getItem("isLoggedIn");

        if(!isLogged){
            // Se ele não existir, eu preciso rederecionar ele para a página inicial e mostrar a mensagem.
            router.push('/');
        }
    })
    
    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={ handleLogout }>Logout</button>
        </>
    );
}

export default dashboard;
