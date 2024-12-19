import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"


export default dynamic(() => Promise.resolve(Login), {
    ssr: false,
});

function Login () {
    return (
        <>
            <main>
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