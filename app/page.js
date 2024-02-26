import SignIn from "./signin-up/signin";
import SignUp from "./signin-up/signup";

export default function Home(){
    return (
        <main>
            <SignIn />
            <SignUp />
        </main>
    );
}