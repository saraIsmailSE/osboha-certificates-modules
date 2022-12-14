declare const _sfc_main: import("vue").DefineComponent<{
    colspan: {
        type: (StringConstructor | NumberConstructor)[];
    };
    rowspan: {
        type: (StringConstructor | NumberConstructor)[];
    };
    stackedHeading: {
        type: StringConstructor;
    };
    stickyColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: StringConstructor;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        colspan: {
            type: (StringConstructor | NumberConstructor)[];
        };
        rowspan: {
            type: (StringConstructor | NumberConstructor)[];
        };
        stackedHeading: {
            type: StringConstructor;
        };
        stickyColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: StringConstructor;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    classes: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'b-table-sticky-column': boolean;
        'table-b-table-default': boolean;
    }>;
    scope: import("vue").ComputedRef<"colspan" | "rowspan" | "col">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colspan: {
        type: (StringConstructor | NumberConstructor)[];
    };
    rowspan: {
        type: (StringConstructor | NumberConstructor)[];
    };
    stackedHeading: {
        type: StringConstructor;
    };
    stickyColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: StringConstructor;
    };
}>>, {
    stickyColumn: boolean;
}>;
export default _sfc_main;
