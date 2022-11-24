import type { InputType } from '../../types';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    max: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    type: {
        type: PropType<InputType>;
        default: string;
        validator: (value: string) => boolean;
    };
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
        type: PropType<import("../../types/Size").default>;
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
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | import("../../types/Size").default;
        'form-range': boolean;
        'form-control': boolean;
        'form-control-color': boolean;
        'form-control-plaintext': boolean;
        'is-valid': boolean;
        'is-invalid': boolean;
    }>;
    localType: import("vue").ComputedRef<InputType>;
    input: import("vue").Ref<HTMLInputElement | undefined>;
    computedId: import("vue").ComputedRef<string>;
    computedAriaInvalid: import("vue").ComputedRef<boolean | "grammar" | "spelling" | undefined>;
    onInput: (evt: Event) => void;
    onChange: (evt: Event) => void;
    onBlur: (evt: FocusEvent) => void;
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change" | "blur")[], "update:modelValue" | "input" | "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    max: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    type: {
        type: PropType<InputType>;
        default: string;
        validator: (value: string) => boolean;
    };
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
        type: PropType<import("../../types/Size").default>;
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    number: boolean;
    trim: boolean;
    required: boolean;
    type: InputType;
    modelValue: string | number;
    disabled: boolean;
    plaintext: boolean;
    autofocus: boolean;
    state: boolean | null | undefined;
    ariaInvalid: boolean | "grammar" | "spelling" | undefined;
    lazy: boolean;
    lazyFormatter: boolean;
    readonly: boolean;
}>;
export default _sfc_main;
