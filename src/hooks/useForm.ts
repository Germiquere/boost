import { ChangeEvent, useState } from "react";

interface UseForm<T> {
    formState: T;
    errors: Partial<Record<keyof T, string>>;
    onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onResetForm: () => void;
    setFormState: React.Dispatch<React.SetStateAction<T>>;
    validate: () => boolean;
}

export const useForm = <T extends object>(
    initialForm: T,
    validationRules: Partial<Record<keyof T, (value: any) => string | undefined>>): UseForm<T> => {
    const [formState, setFormState] = useState(initialForm);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    
    // function to handle the input change
    const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
        ...formState,
        [name]: value,
        });

        if (validationRules[name as keyof T]) {
        const error = validationRules[name as keyof T]?.(value);
        setErrors({
        ...errors,
        [name]: error,
        });
        }
    };

    // function to handle the form's reset
    const onResetForm = () => {
        setFormState(initialForm);
        setErrors({});
    };

    // function to handle validations
    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof T, string>> = {};
        Object.keys(validationRules).forEach((key) => {
            const error = validationRules[key as keyof T]?.(formState[key as keyof T]);
            if (error) {
                newErrors[key as keyof T] = error;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        // PROPERTIES
        formState,
        errors,
        // METHODS
        onInputChange,
        onResetForm,
        setFormState,
        validate,
  };
};
