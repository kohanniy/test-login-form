import { useState, ChangeEventHandler, useCallback } from 'react';

const useValidationForm = () => {
  const [values, setValues] = useState<{ [n: string]: string }>({});
  const [errors, setErrors] = useState<{ [n: string]: string }>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    const pattern = evt.target.pattern;

    setValues({ ...values, [name]: value });


    if (evt.target.validity.patternMismatch) {
      setErrors({ ...errors, [name]: `Введите верное значение: ${pattern}` });
    } 

    if (evt.target.validity.valueMissing) {
      setErrors({ ...errors, [name]: 'Заполните это поле' })
    } 

    if (evt.target.validity.valid) {
      setErrors({...errors, [name]: ''})
    }

    setIsValid(evt.target.closest('form')!.checkValidity());

  };
  
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { 
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleChange,
    resetForm
  };
};

export default useValidationForm;