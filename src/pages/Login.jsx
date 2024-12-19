import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"
import { Header } from "../components/Layout";

export default Login;

function Login () {
    return (
        <>
        <Header title="Accueil"/>
            <main className="login-register-main">
                <div className="form-login-register">
                    <form action="login" method="post">
                        <Input variant="primary" name="email"></Input>
                        <Input variant="primary" name="password"></Input>
                        <a href="/register">Don&apos;t have an account yet ? Create one </a>
                        <Button variant="primary" >Log In</Button>
                    </form>
                </div>
            </main>
        </>
    );
}