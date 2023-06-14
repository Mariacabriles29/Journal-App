import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  /* Aqui voy a mandar a disparar la funcion createValidators, mediante un useEffect */

  useEffect(() => {
    createValidators();
    /* cada vez que el formSate cambia se actualiza o renderiza*/ 
  }, [formState]);

  const isFormValid = useMemo(()=>{
    for (const formValue of Object.keys(formValidation)) {
        if(formValidation[formValue]!==null) return false;
        
    }

    return true;
  },[formValidation]);

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
    const formCheckedValues = {};
   
    // recordar comando para este tipo de for es forof y tab 
    /*  y tab Con el Object.keys barro o reviso cada una de las llaves que */
    for (const formField of Object.keys(formValidations)) {
      /*Para obtener la funcion que tiene los datos que debo validar y el mensaje del error */
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
    
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid
    
  };
};
