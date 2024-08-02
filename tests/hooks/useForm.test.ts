import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { ChangeEvent } from "react";

interface IContactFormState {
    name: string;
}

const initialFormState: IContactFormState = {
    name: "",

};

const validationRules = {
    name: (value: string) => !value ? "Debes completar el nombre" : undefined,
};

describe('Tests in useForm custom hook', () => { 

    const mockValidEvent = {
        target: {
            name: "name",
            value: "John"
        }
    } as ChangeEvent<HTMLInputElement>;
    
    const mockInvalidEvent = {
        target: {
            name: "name",
            value: ""
        }
    } as ChangeEvent<HTMLInputElement>;

    test("should initialize with initial form values and no errors", () => { 
        const { result } = renderHook(() => useForm(initialFormState, validationRules));

        expect(result.current.formState).toEqual(initialFormState);
        expect(result.current.errors).toEqual({})
    })

    test("should update form state on input change", () => {
        const { result } = renderHook(() => useForm(initialFormState, validationRules));

        act( ()=> {
            result.current.onInputChange( mockValidEvent );
        })

        expect(result.current.formState.name).toBe("John")
    })

    test("should set errors based on validation rules", () => {
        const { result } = renderHook(() => useForm(initialFormState, validationRules));

        act(() => {
            result.current.onInputChange( mockInvalidEvent );
          });
      
          expect(result.current.errors.name).toBe("Debes completar el nombre");
    })

    test("should validate the form and return true if no errors", () => {
        const { result } = renderHook(() => useForm(initialFormState, validationRules));

        act(() => {
            result.current.onInputChange( mockValidEvent );
        });

        act( () => {
            expect(result.current.validate()).toBe(true) 
        })
    })

    test("should validate the form and return false if there are errors", () => {
        const { result } = renderHook(() => useForm(initialFormState, validationRules));
    
        act(() => {
            result.current.onInputChange( mockInvalidEvent );
        });
        
        act( () =>{
            expect(result.current.validate()).toBe(false);
        })
        expect(result.current.errors).toEqual({ name: "Debes completar el nombre" });
    });

    test("should reset form state and errors on reset", () => {
        const { result } = renderHook(() => useForm(initialFormState, validationRules));

        act(() => {
            result.current.onInputChange( mockValidEvent );
        });

        act( () => {
            result.current.onResetForm();
        })
        expect(result.current.formState).toEqual(initialFormState);
        expect(result.current.errors).toEqual({})
    })
})