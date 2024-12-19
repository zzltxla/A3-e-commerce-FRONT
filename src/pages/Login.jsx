import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"

export default function Login () {
    return (
        <>
            <main>
                <div>
                    <form action="login" method="post">
                        <Input variant="primary" name="email"></Input>
                        <Input variant="primary" name="password"></Input>
                        <Button variant="primary" >Log In</Button>
                    </form>
                </div>
            </main>
        </>
    )
}