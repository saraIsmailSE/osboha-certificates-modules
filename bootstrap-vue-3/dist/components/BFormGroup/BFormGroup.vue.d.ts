export declare const SLOT_NAME_LABEL = "label";
export declare const SLOT_NAME_INVALID_FEEDBACK = "invalid-feedback";
export declare const SLOT_NAME_VALID_FEEDBACK = "valid-feedback";
export declare const SLOT_NAME_DESCRIPTION = "description";
export declare const SLOT_NAME_DEFAULT = "default";
declare const _sfc_main: import("vue").DefineComponent<{
    contentCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    description: {
        type: StringConstructor[];
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    invalidFeedback: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    labelAlign: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    labelCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelFor: {
        type: StringConstructor;
        required: false;
    };
    labelSize: {
        type: StringConstructor;
        required: false;
    };
    labelSrOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: BooleanConstructor;
        default: null;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        required: false;
    };
    validated: {
        type: BooleanConstructor;
        default: boolean;
    };
    floating: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    ariaDescribedby: string | null;
    computedAriaInvalid: import("vue").ComputedRef<unknown>;
    contentColProps: import("vue").ComputedRef<any>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    labelAlignClasses: import("vue").ComputedRef<string[]>;
    labelColProps: import("vue").ComputedRef<any>;
    onLegendClick: (event: MouseEvent) => void;
    stateClass: import("vue").ComputedRef<"is-valid" | "is-invalid" | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    contentCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    contentColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    description: {
        type: StringConstructor[];
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    invalidFeedback: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    labelAlign: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelAlignXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        required: false;
    };
    labelCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
    };
    labelFor: {
        type: StringConstructor;
        required: false;
    };
    labelSize: {
        type: StringConstructor;
        required: false;
    };
    labelSrOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: BooleanConstructor;
        default: null;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        required: false;
    };
    validated: {
        type: BooleanConstructor;
        default: boolean;
    };
    floating: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    tooltip: boolean;
    floating: boolean;
    validated: boolean;
    state: boolean;
    feedbackAriaLive: string;
    labelSrOnly: boolean;
}>;
export default _sfc_main;
