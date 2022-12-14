import * as vue from 'vue';
import { Ref, ComputedRef, PropType, VNode, UnwrapRef, InjectionKey } from 'vue';

interface FieldValidationMetaInfo {
    field: string;
    value: unknown;
    form: Record<string, unknown>;
    rule?: {
        name: string;
        params?: Record<string, unknown> | unknown[];
    };
}
declare type ValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams, ctx: FieldValidationMetaInfo) => boolean | string | Promise<boolean | string>;
declare type SimpleValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams) => boolean | string | Promise<boolean | string>;
declare type ValidationMessageGenerator = (ctx: FieldValidationMetaInfo) => string;

declare type GenericFormValues = Record<string, unknown>;
interface ValidationResult {
    errors: string[];
    valid: boolean;
}
declare type YupValidator<TValue = any> = {
    validate(value: TValue, options: Record<string, any>): Promise<TValue>;
};
declare type MaybeRef<T> = Ref<T> | T;
interface FieldMeta<TValue> {
    touched: boolean;
    dirty: boolean;
    valid: boolean;
    validated: boolean;
    pending: boolean;
    initialValue?: TValue;
}
interface FormMeta<TValues extends Record<string, any>> {
    touched: boolean;
    dirty: boolean;
    valid: boolean;
    validated: boolean;
    pending: boolean;
    initialValues?: TValues;
}
interface FieldState<TValue = unknown> {
    value: TValue;
    touched: boolean;
    errors: string[];
}
/**
 * validated-only: only mutate the previously validated fields
 * silent: do not mutate any field
 * force: validate all fields and mutate their state
 */
declare type SchemaValidationMode = 'validated-only' | 'silent' | 'force';
interface ValidationOptions$1 {
    mode: SchemaValidationMode;
}
interface FieldEntry<TValue = unknown> {
    value: TValue;
    key: string | number;
    isFirst: boolean;
    isLast: boolean;
}
interface FieldArrayContext<TValue = unknown> {
    fields: Ref<FieldEntry<TValue>[]>;
    remove(idx: number): void;
    replace(newArray: TValue[]): void;
    update(idx: number, value: TValue): void;
    push(value: TValue): void;
    swap(indexA: number, indexB: number): void;
    insert(idx: number, value: TValue): void;
    prepend(value: TValue): void;
    move(oldIdx: number, newIdx: number): void;
}
interface PrivateFieldArrayContext<TValue = unknown> extends FieldArrayContext<TValue> {
    reset(): void;
    path: MaybeRef<string>;
}
interface PrivateFieldContext<TValue = unknown> {
    id: number;
    name: MaybeRef<string>;
    value: Ref<TValue>;
    meta: FieldMeta<TValue>;
    errors: Ref<string[]>;
    errorMessage: Ref<string | undefined>;
    label?: MaybeRef<string | undefined>;
    type?: string;
    bails?: boolean;
    keepValueOnUnmount?: MaybeRef<boolean | undefined>;
    checkedValue?: MaybeRef<TValue>;
    uncheckedValue?: MaybeRef<TValue>;
    checked?: Ref<boolean>;
    resetField(state?: Partial<FieldState<TValue>>): void;
    handleReset(): void;
    validate(opts?: Partial<ValidationOptions$1>): Promise<ValidationResult>;
    handleChange(e: Event | unknown, shouldValidate?: boolean): void;
    handleBlur(e?: Event): void;
    setState(state: Partial<FieldState<TValue>>): void;
    setTouched(isTouched: boolean): void;
    setErrors(message: string | string[]): void;
    setValue(value: TValue): void;
}
declare type FieldContext<TValue = unknown> = Omit<PrivateFieldContext<TValue>, 'id' | 'instances'>;
declare type GenericValidateFunction = (value: unknown, ctx: FieldValidationMetaInfo) => boolean | string | Promise<boolean | string>;
interface FormState<TValues> {
    values: TValues;
    errors: Partial<Record<keyof TValues, string | undefined>>;
    touched: Partial<Record<keyof TValues, boolean>>;
    submitCount: number;
}
declare type FormErrors<TValues extends GenericFormValues> = Partial<Record<keyof TValues, string | undefined>>;
declare type FormErrorBag<TValues extends GenericFormValues> = Partial<Record<keyof TValues, string[]>>;
interface SetFieldValueOptions {
    force: boolean;
}
interface FormActions<TValues extends GenericFormValues> {
    setFieldValue<T extends keyof TValues>(field: T, value: TValues[T], opts?: Partial<SetFieldValueOptions>): void;
    setFieldError: (field: keyof TValues, message: string | string[] | undefined) => void;
    setErrors: (fields: FormErrors<TValues>) => void;
    setValues<T extends keyof TValues>(fields: Partial<Record<T, TValues[T]>>): void;
    setFieldTouched: (field: keyof TValues, isTouched: boolean) => void;
    setTouched: (fields: Partial<Record<keyof TValues, boolean>>) => void;
    resetForm: (state?: Partial<FormState<TValues>>) => void;
}
interface FormValidationResult<TValues> {
    valid: boolean;
    results: Partial<Record<keyof TValues, ValidationResult>>;
    errors: Partial<Record<keyof TValues, string>>;
}
interface SubmissionContext<TValues extends GenericFormValues = GenericFormValues> extends FormActions<TValues> {
    evt?: Event;
}
declare type SubmissionHandler<TValues extends GenericFormValues = GenericFormValues, TReturn = unknown> = (values: TValues, ctx: SubmissionContext<TValues>) => TReturn;
interface InvalidSubmissionContext<TValues extends GenericFormValues = GenericFormValues> {
    values: TValues;
    evt?: Event;
    errors: Partial<Record<keyof TValues, string>>;
    results: Partial<Record<keyof TValues, ValidationResult>>;
}
declare type InvalidSubmissionHandler<TValues extends GenericFormValues = GenericFormValues> = (ctx: InvalidSubmissionContext<TValues>) => void;
declare type RawFormSchema<TValues> = Record<keyof TValues, string | GenericValidateFunction | Record<string, any>>;
declare type FieldPathLookup<TValues extends Record<string, any> = Record<string, any>> = Partial<Record<keyof TValues, PrivateFieldContext | PrivateFieldContext[]>>;
declare type MapValues<T, TValues extends Record<string, any>> = {
    [K in keyof T]: T[K] extends MaybeRef<infer TKey> ? TKey extends keyof TValues ? Ref<TValues[TKey]> : Ref<unknown> : Ref<unknown>;
};
interface PrivateFormContext<TValues extends Record<string, any> = Record<string, any>> extends FormActions<TValues> {
    formId: number;
    values: TValues;
    fieldsByPath: Ref<FieldPathLookup>;
    fieldArrays: PrivateFieldArrayContext[];
    submitCount: Ref<number>;
    schema?: MaybeRef<RawFormSchema<TValues> | YupValidator<TValues> | undefined>;
    errorBag: Ref<FormErrorBag<TValues>>;
    errors: ComputedRef<FormErrors<TValues>>;
    meta: ComputedRef<FormMeta<TValues>>;
    isSubmitting: Ref<boolean>;
    keepValuesOnUnmount: MaybeRef<boolean>;
    validateSchema?: (mode: SchemaValidationMode) => Promise<FormValidationResult<TValues>>;
    validate(opts?: Partial<ValidationOptions$1>): Promise<FormValidationResult<TValues>>;
    validateField(field: keyof TValues): Promise<ValidationResult>;
    setFieldErrorBag(field: string, messages: string | string[]): void;
    stageInitialValue(path: string, value: unknown, updateOriginal?: boolean): void;
    unsetInitialValue(path: string): void;
    register(field: PrivateFieldContext): void;
    unregister(field: PrivateFieldContext): void;
    handleSubmit<TReturn = unknown>(cb: SubmissionHandler<TValues, TReturn>, onSubmitValidationErrorCb?: InvalidSubmissionHandler<TValues>): (e?: Event) => Promise<TReturn | undefined>;
    setFieldInitialValue(path: string, value: unknown): void;
    useFieldModel<TPath extends keyof TValues>(path: MaybeRef<TPath>): Ref<TValues[TPath]>;
    useFieldModel<TPath extends keyof TValues>(paths: [...MaybeRef<TPath>[]]): MapValues<typeof paths, TValues>;
}
interface FormContext<TValues extends Record<string, any> = Record<string, any>> extends Omit<PrivateFormContext<TValues>, 'formId' | 'register' | 'unregister' | 'fieldsByPath' | 'schema' | 'validateSchema' | 'errorBag' | 'setFieldErrorBag' | 'stageInitialValue' | 'setFieldInitialValue' | 'unsetInitialValue' | 'fieldArrays' | 'keepValuesOnUnmount'> {
    handleReset: () => void;
    submitForm: (e?: unknown) => Promise<void>;
}

interface ValidationOptions {
    name?: string;
    values?: Record<string, unknown>;
    bails?: boolean;
}
/**
 * Validates a value against the rules.
 */
declare function validate(value: unknown, rules: string | Record<string, unknown | unknown[]> | GenericValidateFunction | GenericValidateFunction[] | YupValidator, options?: ValidationOptions): Promise<ValidationResult>;

/**
 * Adds a custom validator to the list of validation rules.
 */
declare function defineRule<TValue = unknown, TParams = any[] | Record<string, any>>(id: string, validator: ValidationRuleFunction<TValue, TParams> | SimpleValidationRuleFunction<TValue, TParams>): void;

interface VeeValidateConfig {
    bails: boolean;
    generateMessage: ValidationMessageGenerator;
    validateOnInput: boolean;
    validateOnChange: boolean;
    validateOnBlur: boolean;
    validateOnModelUpdate: boolean;
}
declare const configure: (newConf: Partial<VeeValidateConfig>) => void;

interface FieldOptions<TValue = unknown> {
    initialValue?: MaybeRef<TValue>;
    validateOnValueUpdate: boolean;
    validateOnMount?: boolean;
    bails?: boolean;
    type?: string;
    valueProp?: MaybeRef<TValue>;
    checkedValue?: MaybeRef<TValue>;
    uncheckedValue?: MaybeRef<TValue>;
    label?: MaybeRef<string | undefined>;
    standalone?: boolean;
    keepValueOnUnmount?: MaybeRef<boolean | undefined>;
    modelPropName?: string;
    syncVModel?: boolean;
}
declare type RuleExpression<TValue> = string | Record<string, unknown> | GenericValidateFunction | GenericValidateFunction[] | YupValidator<TValue> | undefined;
/**
 * Creates a field composite.
 */
declare function useField<TValue = unknown>(name: MaybeRef<string>, rules?: MaybeRef<RuleExpression<TValue>>, opts?: Partial<FieldOptions<TValue>>): FieldContext<TValue>;

interface FieldBindingObject<TValue = unknown> {
    name: string;
    onBlur: (e: Event) => unknown;
    onInput: (e: Event) => unknown;
    onChange: (e: Event) => unknown;
    'onUpdate:modelValue'?: ((e: TValue) => unknown) | undefined;
    value?: unknown;
    checked?: boolean;
}
interface FieldSlotProps<TValue = unknown> extends Pick<FieldContext, 'validate' | 'resetField' | 'handleChange' | 'handleReset' | 'handleBlur' | 'setTouched' | 'setErrors'> {
    field: FieldBindingObject<TValue>;
    value: TValue;
    meta: FieldMeta<TValue>;
    errors: string[];
    errorMessage: string | undefined;
    handleInput: FieldContext['handleChange'];
}
declare const Field: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            as: string | Record<string, any>;
            bails: boolean;
            uncheckedValue: any;
            validateOnInput: boolean;
            validateOnChange: boolean;
            validateOnBlur: boolean;
            validateOnModelUpdate: boolean;
            modelValue: any;
            standalone: boolean;
            validateOnMount: boolean;
            modelModifiers: any;
            rules: RuleExpression<unknown>;
            'onUpdate:modelValue': (e: any) => unknown;
            keepValue: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            as: {
                type: (ObjectConstructor | StringConstructor)[];
                default: any;
            };
            name: {
                type: StringConstructor;
                required: true;
            };
            rules: {
                type: PropType<RuleExpression<unknown>>;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            validateOnBlur: {
                type: BooleanConstructor;
                default: any;
            };
            validateOnChange: {
                type: BooleanConstructor;
                default: any;
            };
            validateOnInput: {
                type: BooleanConstructor;
                default: any;
            };
            validateOnModelUpdate: {
                type: BooleanConstructor;
                default: any;
            };
            bails: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            label: {
                type: StringConstructor;
                default: any;
            };
            uncheckedValue: {
                type: any;
                default: any;
            };
            modelValue: {
                type: any;
                default: symbol;
            };
            modelModifiers: {
                type: any;
                default: () => {};
            };
            'onUpdate:modelValue': {
                type: PropType<(e: any) => unknown>;
                default: any;
            };
            standalone: {
                type: BooleanConstructor;
                default: boolean;
            };
            keepValue: {
                type: BooleanConstructor;
                default: any;
            };
        }>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "label" | "as" | "bails" | "uncheckedValue" | "validateOnInput" | "validateOnChange" | "validateOnBlur" | "validateOnModelUpdate" | "modelValue" | "standalone" | "validateOnMount" | "modelModifiers" | "rules" | "onUpdate:modelValue" | "keepValue">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            as: {
                type: (ObjectConstructor | StringConstructor)[];
                default: any;
            };
            name: {
                type: StringConstructor;
                required: true;
            };
            rules: {
                type: PropType<RuleExpression<unknown>>;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            validateOnBlur: {
                type: BooleanConstructor;
                default: any;
            };
            validateOnChange: {
                type: BooleanConstructor;
                default: any;
            };
            validateOnInput: {
                type: BooleanConstructor;
                default: any;
            };
            validateOnModelUpdate: {
                type: BooleanConstructor;
                default: any;
            };
            bails: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            label: {
                type: StringConstructor;
                default: any;
            };
            uncheckedValue: {
                type: any;
                default: any;
            };
            modelValue: {
                type: any;
                default: symbol;
            };
            modelModifiers: {
                type: any;
                default: () => {};
            };
            'onUpdate:modelValue': {
                type: PropType<(e: any) => unknown>;
                default: any;
            };
            standalone: {
                type: BooleanConstructor;
                default: boolean;
            };
            keepValue: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | {
            default: () => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            label: string;
            as: string | Record<string, any>;
            bails: boolean;
            uncheckedValue: any;
            validateOnInput: boolean;
            validateOnChange: boolean;
            validateOnBlur: boolean;
            validateOnModelUpdate: boolean;
            modelValue: any;
            standalone: boolean;
            validateOnMount: boolean;
            modelModifiers: any;
            rules: RuleExpression<unknown>;
            'onUpdate:modelValue': (e: any) => unknown;
            keepValue: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean>): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        as: {
            type: (ObjectConstructor | StringConstructor)[];
            default: any;
        };
        name: {
            type: StringConstructor;
            required: true;
        };
        rules: {
            type: PropType<RuleExpression<unknown>>;
            default: any;
        };
        validateOnMount: {
            type: BooleanConstructor;
            default: boolean;
        };
        validateOnBlur: {
            type: BooleanConstructor;
            default: any;
        };
        validateOnChange: {
            type: BooleanConstructor;
            default: any;
        };
        validateOnInput: {
            type: BooleanConstructor;
            default: any;
        };
        validateOnModelUpdate: {
            type: BooleanConstructor;
            default: any;
        };
        bails: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        uncheckedValue: {
            type: any;
            default: any;
        };
        modelValue: {
            type: any;
            default: symbol;
        };
        modelModifiers: {
            type: any;
            default: () => {};
        };
        'onUpdate:modelValue': {
            type: PropType<(e: any) => unknown>;
            default: any;
        };
        standalone: {
            type: BooleanConstructor;
            default: boolean;
        };
        keepValue: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & vue.ShallowUnwrapRef<() => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | {
        default: () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    rules: {
        type: PropType<RuleExpression<unknown>>;
        default: any;
    };
    validateOnMount: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateOnBlur: {
        type: BooleanConstructor;
        default: any;
    };
    validateOnChange: {
        type: BooleanConstructor;
        default: any;
    };
    validateOnInput: {
        type: BooleanConstructor;
        default: any;
    };
    validateOnModelUpdate: {
        type: BooleanConstructor;
        default: any;
    };
    bails: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    uncheckedValue: {
        type: any;
        default: any;
    };
    modelValue: {
        type: any;
        default: symbol;
    };
    modelModifiers: {
        type: any;
        default: () => {};
    };
    'onUpdate:modelValue': {
        type: PropType<(e: any) => unknown>;
        default: any;
    };
    standalone: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepValue: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | {
    default: () => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    label: string;
    as: string | Record<string, any>;
    bails: boolean;
    uncheckedValue: any;
    validateOnInput: boolean;
    validateOnChange: boolean;
    validateOnBlur: boolean;
    validateOnModelUpdate: boolean;
    modelValue: any;
    standalone: boolean;
    validateOnMount: boolean;
    modelModifiers: any;
    rules: RuleExpression<unknown>;
    'onUpdate:modelValue': (e: any) => unknown;
    keepValue: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    setErrors: FieldContext['setErrors'];
    setTouched: FieldContext['setTouched'];
    reset: FieldContext['resetField'];
    validate: FieldContext['validate'];
    handleChange: FieldContext['handleChange'];
    $slots: {
        default: (arg: FieldSlotProps<unknown>) => VNode[];
    };
});

declare type FormSlotProps = UnwrapRef<Pick<FormContext, 'meta' | 'errors' | 'values' | 'isSubmitting' | 'submitCount' | 'validate' | 'validateField' | 'handleReset' | 'setErrors' | 'setFieldError' | 'setFieldValue' | 'setValues' | 'setFieldTouched' | 'setTouched' | 'resetForm'>> & {
    handleSubmit: (evt: Event | SubmissionHandler, onSubmit?: SubmissionHandler) => Promise<unknown>;
    submitForm(evt?: Event): void;
};
declare const Form: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            onSubmit: SubmissionHandler<GenericFormValues, unknown>;
            as: string;
            initialValues: Record<string, any>;
            validateOnMount: boolean;
            validationSchema: Record<string, any>;
            initialErrors: Record<string, any>;
            initialTouched: Record<string, any>;
            onInvalidSubmit: InvalidSubmissionHandler<GenericFormValues>;
            keepValues: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: string;
            };
            validationSchema: {
                type: ObjectConstructor;
                default: any;
            };
            initialValues: {
                type: ObjectConstructor;
                default: any;
            };
            initialErrors: {
                type: ObjectConstructor;
                default: any;
            };
            initialTouched: {
                type: ObjectConstructor;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSubmit: {
                type: PropType<SubmissionHandler<GenericFormValues, unknown>>;
                default: any;
            };
            onInvalidSubmit: {
                type: PropType<InvalidSubmissionHandler<GenericFormValues>>;
                default: any;
            };
            keepValues: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "onSubmit" | "as" | "initialValues" | "validateOnMount" | "validationSchema" | "initialErrors" | "initialTouched" | "onInvalidSubmit" | "keepValues">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: string;
            };
            validationSchema: {
                type: ObjectConstructor;
                default: any;
            };
            initialValues: {
                type: ObjectConstructor;
                default: any;
            };
            initialErrors: {
                type: ObjectConstructor;
                default: any;
            };
            initialTouched: {
                type: ObjectConstructor;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSubmit: {
                type: PropType<SubmissionHandler<GenericFormValues, unknown>>;
                default: any;
            };
            onInvalidSubmit: {
                type: PropType<InvalidSubmissionHandler<GenericFormValues>>;
                default: any;
            };
            keepValues: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | {
            default: () => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            onSubmit: SubmissionHandler<GenericFormValues, unknown>;
            as: string;
            initialValues: Record<string, any>;
            validateOnMount: boolean;
            validationSchema: Record<string, any>;
            initialErrors: Record<string, any>;
            initialTouched: Record<string, any>;
            onInvalidSubmit: InvalidSubmissionHandler<GenericFormValues>;
            keepValues: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean>): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        as: {
            type: StringConstructor;
            default: string;
        };
        validationSchema: {
            type: ObjectConstructor;
            default: any;
        };
        initialValues: {
            type: ObjectConstructor;
            default: any;
        };
        initialErrors: {
            type: ObjectConstructor;
            default: any;
        };
        initialTouched: {
            type: ObjectConstructor;
            default: any;
        };
        validateOnMount: {
            type: BooleanConstructor;
            default: boolean;
        };
        onSubmit: {
            type: PropType<SubmissionHandler<GenericFormValues, unknown>>;
            default: any;
        };
        onInvalidSubmit: {
            type: PropType<InvalidSubmissionHandler<GenericFormValues>>;
            default: any;
        };
        keepValues: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & vue.ShallowUnwrapRef<() => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | {
        default: () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    as: {
        type: StringConstructor;
        default: string;
    };
    validationSchema: {
        type: ObjectConstructor;
        default: any;
    };
    initialValues: {
        type: ObjectConstructor;
        default: any;
    };
    initialErrors: {
        type: ObjectConstructor;
        default: any;
    };
    initialTouched: {
        type: ObjectConstructor;
        default: any;
    };
    validateOnMount: {
        type: BooleanConstructor;
        default: boolean;
    };
    onSubmit: {
        type: PropType<SubmissionHandler<GenericFormValues, unknown>>;
        default: any;
    };
    onInvalidSubmit: {
        type: PropType<InvalidSubmissionHandler<GenericFormValues>>;
        default: any;
    };
    keepValues: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | {
    default: () => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    onSubmit: SubmissionHandler<GenericFormValues, unknown>;
    as: string;
    initialValues: Record<string, any>;
    validateOnMount: boolean;
    validationSchema: Record<string, any>;
    initialErrors: Record<string, any>;
    initialTouched: Record<string, any>;
    onInvalidSubmit: InvalidSubmissionHandler<GenericFormValues>;
    keepValues: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    setFieldError: FormContext['setFieldError'];
    setErrors: FormContext['setErrors'];
    setFieldValue: FormContext['setFieldValue'];
    setValues: FormContext['setValues'];
    setFieldTouched: FormContext['setFieldTouched'];
    setTouched: FormContext['setTouched'];
    resetForm: FormContext['resetForm'];
    validate: FormContext['validate'];
    validateField: FormContext['validateField'];
    $slots: {
        default: (arg: FormSlotProps) => VNode[];
    };
});

declare const FieldArray: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<vue.ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: true;
            };
        }>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: true;
            };
        }>>, () => vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | {
            default: () => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean>): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        name: {
            type: StringConstructor;
            required: true;
        };
    }>> & vue.ShallowUnwrapRef<() => vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | {
        default: () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
}>>, () => vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | {
    default: () => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    push: FieldArrayContext['push'];
    remove: FieldArrayContext['remove'];
    swap: FieldArrayContext['swap'];
    insert: FieldArrayContext['insert'];
    update: FieldArrayContext['update'];
    replace: FieldArrayContext['replace'];
    prepend: FieldArrayContext['prepend'];
    move: FieldArrayContext['move'];
    $slots: {
        default: (arg: UnwrapRef<FieldArrayContext>) => VNode[];
    };
});

interface ErrorMessageSlotProps {
    message: string | undefined;
}
declare const ErrorMessage: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            as: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: any;
            };
            name: {
                type: StringConstructor;
                required: true;
            };
        }>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "as">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: any;
            };
            name: {
                type: StringConstructor;
                required: true;
            };
        }>>, () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | {
            default: () => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            as: string;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean>): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        as: {
            type: StringConstructor;
            default: any;
        };
        name: {
            type: StringConstructor;
            required: true;
        };
    }>> & vue.ShallowUnwrapRef<() => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | {
        default: () => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    as: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
}>>, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | vue.Slot | VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | {
    default: () => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    as: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: {
        default: (arg: ErrorMessageSlotProps) => VNode[];
    };
});

interface FormOptions<TValues extends Record<string, any>> {
    validationSchema?: MaybeRef<Record<keyof TValues, GenericValidateFunction | string | Record<string, any>> | any | undefined>;
    initialValues?: MaybeRef<TValues>;
    initialErrors?: Record<keyof TValues, string | undefined>;
    initialTouched?: Record<keyof TValues, boolean>;
    validateOnMount?: boolean;
    keepValuesOnUnmount?: MaybeRef<boolean>;
}
declare function useForm<TValues extends Record<string, any> = Record<string, any>>(opts?: FormOptions<TValues>): FormContext<TValues>;

declare function useFieldArray<TValue = unknown>(arrayPath: MaybeRef<string>): FieldArrayContext<TValue>;

declare function useResetForm<TValues extends Record<string, unknown> = Record<string, unknown>>(): (state?: Partial<FormState<TValues>>) => void;

/**
 * If a field is dirty or not
 */
declare function useIsFieldDirty(path?: MaybeRef<string>): vue.ComputedRef<boolean>;

/**
 * If a field is touched or not
 */
declare function useIsFieldTouched(path?: MaybeRef<string>): vue.ComputedRef<boolean>;

/**
 * If a field is validated and is valid
 */
declare function useIsFieldValid(path?: MaybeRef<string>): vue.ComputedRef<boolean>;

/**
 * If the form is submitting or not
 */
declare function useIsSubmitting(): vue.ComputedRef<boolean>;

/**
 * Validates a single field
 */
declare function useValidateField(path?: MaybeRef<string>): () => Promise<ValidationResult>;

/**
 * If the form is dirty or not
 */
declare function useIsFormDirty(): vue.ComputedRef<boolean>;

/**
 * If the form is touched or not
 */
declare function useIsFormTouched(): vue.ComputedRef<boolean>;

/**
 * If the form has been validated and is valid
 */
declare function useIsFormValid(): vue.ComputedRef<boolean>;

/**
 * Validate multiple fields
 */
declare function useValidateForm<TValues extends Record<string, unknown> = Record<string, unknown>>(): () => Promise<FormValidationResult<TValues>>;

/**
 * The number of form's submission count
 */
declare function useSubmitCount(): vue.ComputedRef<number>;

/**
 * Gives access to a field's current value
 */
declare function useFieldValue<TValue = unknown>(path?: MaybeRef<string>): vue.ComputedRef<TValue>;

/**
 * Gives access to a form's values
 */
declare function useFormValues<TValues extends Record<string, any> = Record<string, any>>(): vue.ComputedRef<Partial<TValues>>;

/**
 * Gives access to all form errors
 */
declare function useFormErrors<TValues extends Record<string, unknown> = Record<string, unknown>>(): vue.ComputedRef<Partial<Record<keyof TValues, string>>>;

/**
 * Gives access to a single field error
 */
declare function useFieldError(path?: MaybeRef<string>): vue.ComputedRef<string>;

declare function useSubmitForm<TValues extends Record<string, unknown> = Record<string, unknown>>(cb: SubmissionHandler<TValues>): (e?: Event) => Promise<unknown>;

declare const FormContextKey: InjectionKey<PrivateFormContext>;
declare const FieldContextKey: InjectionKey<PrivateFieldContext<unknown>>;
declare const IS_ABSENT: unique symbol;

export { ErrorMessage, Field, FieldArray, FieldArrayContext, FieldContext, FieldContextKey, FieldEntry, FieldMeta, FieldOptions, Form, FormActions, FormContext, FormContextKey, FormMeta, FormOptions, FormState, FormValidationResult, GenericValidateFunction, IS_ABSENT, InvalidSubmissionContext, InvalidSubmissionHandler, SubmissionContext, SubmissionHandler, ValidationOptions$1 as ValidationOptions, ValidationResult, configure, defineRule, useField, useFieldArray, useFieldError, useFieldValue, useForm, useFormErrors, useFormValues, useIsFieldDirty, useIsFieldTouched, useIsFieldValid, useIsFormDirty, useIsFormTouched, useIsFormValid, useIsSubmitting, useResetForm, useSubmitCount, useSubmitForm, useValidateField, useValidateForm, validate };
