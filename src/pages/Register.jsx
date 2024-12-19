import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"

export default function Register () {
    return (
        <>
            <main>
                <div className="form-login-register">
                    <form action="login" method="post">

                        <Input variant="primary"    name="first name"></Input>
                        <Input variant="primary"    name="last name"></Input>
                        <Input variant="primary" name="phone"></Input>
                        <Input variant="primary" name="email"></Input>
                        <Input variant="primary" name="password"></Input>

                        <a href="/login">Already have an account ? Log in </a>

                        <Button variant="primary" >Register</Button>
                    </form>
                </div>
            </main>
        </>
    )
}