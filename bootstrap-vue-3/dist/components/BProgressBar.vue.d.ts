import type { ColorVariant } from '../types';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
    };
    labelHtml: {
        type: StringConstructor;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showProgress: {
        type: BooleanConstructor;
        default: boolean;
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    variant: {
        type: PropType<ColorVariant>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
    };
    labelHtml: {
        type: StringConstructor;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showProgress: {
        type: BooleanConstructor;
        default: boolean;
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    variant: {
        type: PropType<ColorVariant>;
    };
}>>, {
    value: string | number;
    animated: boolean;
    precision: string | number;
    showProgress: boolean;
    showValue: boolean;
    striped: boolean;
}>;
export default _sfc_main;
