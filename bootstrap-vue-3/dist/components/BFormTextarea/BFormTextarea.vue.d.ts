import { StyleValue } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    noResize: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    wrap: {
        type: StringConstructor;
        default: string;
    };
    ariaInvalid: {
        type: import("vue").PropType<boolean | "grammar" | "spelling" | undefined>;
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
        type: import("vue").PropType<string | number>;
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
        type: import("vue").PropType<import("../../types/Size").default>;
        required: boolean;
    };
    state: {
        type: import("vue").PropType<boolean | null | undefined>;
        default: null;
    };
    trim: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    input: import("vue").Ref<HTMLInputElement | undefined>;
    computedId: import("vue").ComputedRef<string>;
    computedAriaInvalid: import("vue").ComputedRef<boolean | "grammar" | "spelling" | undefined>;
    onInput: (evt: Event) => void;
    onChange: (evt: Event) => void;
    onBlur: (evt: FocusEvent) => void;
    focus: () => void;
    blur: () => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | import("../../types/Size").default;
        'form-control': boolean;
        'form-control-plaintext': boolean;
        'is-valid': boolean;
        'is-invalid': boolean;
    }>;
    computedStyles: import("vue").ComputedRef<StyleValue | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change" | "blur")[], "update:modelValue" | "input" | "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    noResize: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    wrap: {
        type: StringConstructor;
        default: string;
    };
    ariaInvalid: {
        type: import("vue").PropType<boolean | "grammar" | "spelling" | undefined>;
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
        type: import("vue").PropType<string | number>;
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
        type: import("vue").PropType<import("../../types/Size").default>;
        required: boolean;
    };
    state: {
        type: import("vue").PropType<boolean | null | undefined>;
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
    modelValue: string | number;
    disabled: boolean;
    wrap: string;
    plaintext: boolean;
    autofocus: boolean;
    state: boolean | null | undefined;
    ariaInvalid: boolean | "grammar" | "spelling" | undefined;
    lazy: boolean;
    lazyFormatter: boolean;
    readonly: boolean;
    noResize: boolean;
    rows: string | number;
}>;
export default _sfc_main;
