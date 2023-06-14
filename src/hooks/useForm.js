import { useState, useEffect } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setformValidation] = useState({});

  /* Aqui voy a mandar a disparar la funcion createValidators, mediante un useEffect */

  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  /*Para hacer las validaciones de mi formulario  */

  const createValidators = () => {
    const formCheckValues = {};
    /* Con el Object.keys barro o reviso cada una de las llaves que */
    for (const formField of Object.keys(formValidations)) {
      /*Para obtener la funcion que tiene los datos que debo validar y el mensaje del error */
      const [fn, errorMessage] = formValidations[formField];
      formCheckValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setformValidation(formCheckValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
  };
};
