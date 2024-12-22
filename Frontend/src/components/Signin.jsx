import { ButtonWarning } from "./ButtonWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { SubHeading } from "./SubHeading"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="Ameetkumar@gmail.com" label={"Email"} />
        <InputBox  onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}  label={"Sign in"} />
        </div>
        <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

 
