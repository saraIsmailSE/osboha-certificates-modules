import { PropType } from 'vue';
import type { ButtonVariant, InputSize, LinkTarget } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
    pill: {
        type: BooleanConstructor;
        default: boolean;
    };
    pressed: {
        type: BooleanConstructor;
        default: null;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<InputSize>;
    };
    squared: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: PropType<ButtonVariant>;
        default: string;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
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
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | InputSize | ButtonVariant | undefined;
        active: boolean;
        'rounded-pill': boolean;
        'rounded-0': boolean;
        disabled: boolean;
    }>;
    attrs: import("vue").ComputedRef<{
        'aria-disabled': string | null;
        'aria-pressed': string | null;
        autocomplete: string | null;
        disabled: boolean | null;
        href: string | undefined;
        rel: string | null;
        role: string | null;
        target: LinkTarget | null;
        type: string | null;
        to: import("vue-router").RouteLocationRaw | null;
        append: boolean | null;
        activeClass: string | null;
        event: string | unknown[] | null;
        exact: boolean | null;
        exactActiveClass: string | null;
        replace: boolean | null;
        routerComponentName: string | null;
        routerTag: string | null;
    }>;
    computedTag: import("vue").ComputedRef<string>;
    clicked: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:pressed")[], "click" | "update:pressed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        required: false;
    };
    pill: {
        type: BooleanConstructor;
        default: boolean;
    };
    pressed: {
        type: BooleanConstructor;
        default: null;
    };
    rel: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<InputSize>;
    };
    squared: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: PropType<LinkTarget>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: PropType<ButtonVariant>;
        default: string;
    };
    activeClass: {
        type: StringConstructor;
        default: string;
    };
    append: {
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
    to: {
        type: PropType<import("vue-router").RouteLocationRaw>;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:pressed"?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    type: string;
    tag: string;
    variant: ButtonVariant;
    disabled: boolean;
    exact: boolean;
    active: boolean;
    pill: boolean;
    to: import("vue-router").RouteLocationRaw;
    event: string | unknown[];
    routerTag: string;
    pressed: boolean;
    rel: string;
    squared: boolean;
    target: LinkTarget;
    activeClass: string;
    append: boolean;
    exactActiveClass: string;
    routerComponentName: string;
}>;
export default _sfc_main;
