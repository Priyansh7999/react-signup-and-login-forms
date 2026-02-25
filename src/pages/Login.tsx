import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { loginSchema } from "../utils/validationsSchema";

type LoginValuesProps = {
    email: string;
    password: string;
}

const initialValues: LoginValuesProps = {
    email: "",
    password: "",
}

const Login = () => {
    const [loginData, setLoginData] = useState<LoginValuesProps | null>(null);
    const handleSubmit = (values: LoginValuesProps) => {
        setLoginData(values);
        console.log(values);
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
            <div className="w-full p-8 max-w-md bg-white rounded-2xl border border-neutral-200">

                <div className="mb-6">
                    <h1 className="text-2xl text-center font-extrabold">Create an account</h1>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="flex flex-col gap-4">
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                            />

                            <div className="mt-2">
                                <Button
                                    label="Login"
                                    type="submit"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>

                <p className="text-sm text-center text-neutral-500 mt-6">
                    <Link to="/" className="text-sky-800 font-semibold hover:underline">
                        Home
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default Login;