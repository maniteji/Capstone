import "./style.css"

export default function Signin() {
  return (
    <main>
    <div class="box">
      <div class="title-text">Signin</div>
      <div>
                <form>
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
                            Password:
                            <input
                            required
                            type="password"
                            />
                            </span>
                    </label>
                    <div class="bottomtext">
                      Don't have an account? <a href="D:\Capstone\capstone\app\signup\page.js">Sign up.</a>
                    </div>
                    <button id="btt-signin">SignIn</button>
                </form>
            </div>
    </div>
    </main>
  );
}

