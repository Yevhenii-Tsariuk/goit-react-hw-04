// import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";
// import { LuSearch } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  
    const [value, setValue] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      if (value.trim() === "") {
        toast.error("The input field cannot be empty");
        return;
      }

      onSubmit(value);
      setValue("");
    }

    function inputChange(event) {
      setValue(event.target.value);
    }
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={inputChange}
          />
          <IconContext.Provider value={{ color: "blue" }}>
            <button className={css.button} type="submit">
              <FaMagnifyingGlass />
            </button>
          </IconContext.Provider>
        </form>
        <Toaster
          // toastOptions={{
          //   style: {
          //     position: "top-right",
          //     background: "red",
          //     color: "white",
          //     reverseOrder: "false"
          //   },
          // }}
          position="top-right"
        />
      </header>
    );
}


{/* <Formik
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
      </Formik> */}