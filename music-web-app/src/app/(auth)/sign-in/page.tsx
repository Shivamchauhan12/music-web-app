"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    console.log("Sign-in result:", res);
    // res = { ok: true | false, error: string | null, status: number, url?: string }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
