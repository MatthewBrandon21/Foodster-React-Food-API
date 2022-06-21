import React from "react";
import "./SearchBox.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../ErrorComponent/TextError";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const history = useHistory();

  const initialValues = {
    nameOfIngredient: "",
  };

  const validationSchema = Yup.object({
    nameOfIngredient: Yup.string().required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    // alert(values.nameOfIngredient);
    // onSubmitProps.setSubmitting(false);
    history.push(`/recipes/${values.nameOfIngredient}`);
    onSubmitProps.resetForm();
  };

  return (
    <div className="searchBox">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="searchBox__form">
            <Field name="nameOfIngredient">
              {({ field, form }) => {
                // console.log(form);
                return (
                  <>
                    <input
                      type="text"
                      {...field}
                      className="searchBox__formInput"
                      placeholder="Search recipes by name ,ingredient ,etc."
                    />
                    <ErrorMessage
                      name="nameOfIngredient"
                      component={TextError}
                    />
                  </>
                );
              }}
            </Field>
            {/* <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            ></button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchBox;
