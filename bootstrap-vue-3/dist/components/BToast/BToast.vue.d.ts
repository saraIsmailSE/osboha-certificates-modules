import { PropType, VNode } from 'vue';
import { ColorVariant } from '../../types';
export declare const SLOT_NAME_TOAST_TITLE = "toast-title";
declare const _sfc_main: import("vue").DefineComponent<{
    delay: {
        type: NumberConstructor;
        default: number;
    };
    bodyClass: {
        type: StringConstructor;
    };
    body: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined>;
    };
    headerClass: {
        type: StringConstructor;
    };
    headerTag: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    isStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    noHoverPause: {
        type: BooleanConstructor;
        default: boolean;
    };
    solid: {
        type: BooleanConstructor;
        default: boolean;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    toastClass: {
        type: PropType<string[]>;
    };
    variant: {
        type: PropType<ColorVariant>;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    exactActiveClass: {
        type: StringConstructor;
        default: string;
    };
    href: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    routerTag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<import("../../types/LinkTarget").default>;
        default: string;
    };
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "destroyed")[], "update:modelValue" | "destroyed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    delay: {
        type: NumberConstructor;
        default: number;
    };
    bodyClass: {
        type: StringConstructor;
    };
    body: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined>;
    };
    headerClass: {
        type: StringConstructor;
    };
    headerTag: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    isStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    noHoverPause: {
        type: BooleanConstructor;
        default: boolean;
    };
    solid: {
        type: BooleanConstructor;
        default: boolean;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    toastClass: {
        type: PropType<string[]>;
    };
    variant: {
        type: PropType<ColorVariant>;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    event: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    exactActiveClass: {
        type: StringConstructor;
        default: string;
    };
    href: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    routerComponentName: {
        type: StringConstructor;
        default: string;
    };
    routerTag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<import("../../types/LinkTarget").default>;
        default: string;
    };
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDestroyed?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    modelValue: boolean;
    disabled: boolean;
    solid: boolean;
    exact: boolean;
    static: boolean;
    animation: boolean;
    active: boolean;
    to: import("vue-router").RouteLocationRaw;
    event: string | unknown[];
    routerTag: string;
    rel: string;
    target: import("../../types/LinkTarget").default;
    activeClass: string;
    append: boolean;
    exactActiveClass: string;
    routerComponentName: string;
    headerTag: string;
    noFade: boolean;
    delay: number;
    isStatus: boolean;
    autoHide: boolean;
    noCloseButton: boolean;
    noHoverPause: boolean;
}>;
export default _sfc_main;
