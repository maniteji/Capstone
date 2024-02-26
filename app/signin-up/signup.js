import "./style.css"
export default function Signup() {
    return(
    <main>
        <div class="box">
            <div class="title-text">Signup</div>
            <div>
                <form>
                    <label class="headings">
                        <span class="headings">
                            First Name:
                            <input
                            required
                            />
                        </span>

                        <span>
                            Last Name:
                            <input
                            required
                            />
                            </span>
                    </label>
                    <label>
                        <span class="headings">
                            Email:
                            <input
                            required
                            type="email"
                            /></span>
                    </label>
                    <label>
                        <span class="headings">
                            Create Password:
                            <input
                            required
                            type="password"
                            />
                            </span>
                        <span class="headings">
                            Re-enter Password:
                            <input
                            required
                            type="password"
                            />
                            </span>
                    </label>
                    <div class="bottomtext">
                      Already have an account?<a href="/signup">Signin</a>
                    </div>
                    <button id="btt-signup">SignUp</button>
                </form>
            </div>
        </div>
    </main>
    );
}