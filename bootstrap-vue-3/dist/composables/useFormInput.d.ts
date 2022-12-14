import { Size } from '../types';
import { ExtractPropTypes, PropType } from 'vue';
export declare const COMMON_INPUT_PROPS: {
    ariaInvalid: {
        type: PropType<boolean | "grammar" | "spelling" | undefined>;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        required: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    form: {
        type: StringConstructor;
        required: boolean;
    };
    formatter: {
        type: FunctionConstructor;
        required: boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyFormatter: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: StringConstructor;
        required: boolean;
    };
    modelValue: {
        type: PropType<string | number>;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: boolean;
    };
    number: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: boolean;
    };
    plaintext: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<Size>;
        required: boolean;
    };
    state: {
        type: PropType<boolean | null | undefined>;
        default: null;
    };
    trim: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare type InputProps = ExtractPropTypes<typeof COMMON_INPUT_PROPS>;
declare type InputEmitType = (event: 'update:modelValue' | 'change' | 'blur' | 'input', ...args: any[]) => void;
declare function useFormInput(props: Readonly<InputProps>, emit: InputEmitType): {
    input: import("vue").Ref<HTMLInputElement | undefined>;
    computedId: import("vue").ComputedRef<string>;
    computedAriaInvalid: import("vue").ComputedRef<boolean | "grammar" | "spelling" | undefined>;
    onInput: (evt: Event) => void;
    onChange: (evt: Event) => void;
    onBlur: (evt: FocusEvent) => void;
    focus: () => void;
    blur: () => void;
};
export default useFormInput;
