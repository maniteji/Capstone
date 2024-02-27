import Link from "next/link";

export default function Home(){
    return ( 
        <main>
            <ul>
            <li>
            <Link href={`/Signup`}>Signup</Link>
            </li>
            <li>
            <Link href={`/Signin`}>Signin</Link>
            </li>
            <li>
            <Link href={`/Homepage`}>Homepage</Link>
            </li>
            </ul>
        </main>
    );
}