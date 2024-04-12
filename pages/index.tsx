
import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage : React.FC = () => {

    const [username, setUserName] =  useState("");
    const [senha, setSenha] =  useState("");
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(username === 'admin' && senha === 'admin' ){

            // Primeiro eu crio um estado que deixa a informação congelada, sem renderizar automáticamente.
            //event?.defaultPrevented();

            // No  localStore os dados ficam infinitos, já no sectionStorage não.
            localStorage.setItem('isLoggedIn','true')

            // Agora eu tenho que redirecionar
            router.push('/dashboard');
            
        }else{
            setError("Usuário não encontrado!");
        } 
    }

    // Eu preciso criar um if para validar o tipo de erro, se for 1 por exemplo, usuário não logado, se 
    // for dois, forçou logar e não inseriu os dados.

    return(

        <main>

            <form action="">

                <label htmlFor="name">Usuário
                    
                    <input 
                    type="text" 
                    placeholder="Username"  
                    value={ username }
                    onChange={
                        (event) => setUserName(event.target.value)} />

                </label>
                
                <br />

                <label htmlFor="senha">Digite sua senha
                    
                    <input 
                    type="text" 
                    name="senha" 
                    id="senha" 
                    placeholder="Digite sua senha" 
                    value={ senha} 
                    onChange={ (event) => setSenha (event.target.value) }/>

                </label>

                <div>
                    <button type="button" onClick={ handleLogin }>Login</button>
                </div>

                {error && <span> { error }  </span>}

            </form>

        </main>
    );
}

export default LoginPage;