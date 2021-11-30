import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
