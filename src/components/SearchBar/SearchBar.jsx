import { Formik, Form, Field } from "formik";
import { LuSearch } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  
  
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          if (values.topic.trim() === "") {
            toast.error("Fill in the field before searching!");
          } else {
            onSearch(values.topic);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="topic"
            className={css.input}
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            <LuSearch className={css.icon} />
          </button>
          <Toaster position="top-right" />
        </Form>
      </Formik>
    </header>
  );
}
