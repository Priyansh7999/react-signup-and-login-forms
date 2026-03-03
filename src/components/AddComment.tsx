import { Form, Formik } from "formik";
import InputField from "./InputField";
import Button from "./Button";
import { validateComment } from "../utils/validateTicket";
import type React from "react";
type Props ={
    handleAddComment: (values:{body:string})=>Promise<void>
}
const AddComment = ({ handleAddComment }:Props) : React.JSX.Element => {
    const initialValues = { body: "" }

    return (
        <div className="border-t border-neutral-200 p-4 space-y-4">
            <h1 className="font-semibold">Add Comment</h1>

            <Formik
                initialValues={initialValues}
                validate={validateComment}
                onSubmit={handleAddComment}
            >
                {() => (
                    <Form className="flex flex-col gap-4">
                        <InputField
                            label=""
                            name="body"
                            type="textarea"
                        />

                        <div className="mt-2">
                            <Button
                                label="Add Comment"
                                type="submit"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddComment;