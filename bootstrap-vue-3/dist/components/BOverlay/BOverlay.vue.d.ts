import type { ColorVariant } from '../../types';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    bgColor: {
        type: StringConstructor;
        required: false;
    };
    blur: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    noWrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    opacity: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    overlayTag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinnerSmall: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinnerType: {
        type: StringConstructor;
        default: string;
    };
    spinnerVariant: {
        type: StringConstructor;
        required: false;
    };
    variant: {
        type: PropType<ColorVariant>;
        default: string;
    };
    wrapTag: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("shown" | "hidden" | "click")[], "shown" | "hidden" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bgColor: {
        type: StringConstructor;
        required: false;
    };
    blur: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    noWrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    opacity: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    overlayTag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinnerSmall: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinnerType: {
        type: StringConstructor;
        default: string;
    };
    spinnerVariant: {
        type: StringConstructor;
        required: false;
    };
    variant: {
        type: PropType<ColorVariant>;
        default: string;
    };
    wrapTag: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    onShown?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    fixed: boolean;
    show: boolean;
    variant: ColorVariant;
    rounded: string | boolean;
    opacity: string | number;
    zIndex: string | number;
    noWrap: boolean;
    blur: string;
    noFade: boolean;
    noCenter: boolean;
    overlayTag: string;
    spinnerSmall: boolean;
    spinnerType: string;
    wrapTag: string;
}>;
export default _sfc_main;
