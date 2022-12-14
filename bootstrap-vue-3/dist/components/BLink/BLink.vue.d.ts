import type { LinkTarget } from '../../types';
import { PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
export declare const BLINK_PROPS: {
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
        type: PropType<LinkTarget>;
        default: string;
    };
    to: {
        type: PropType<RouteLocationRaw>;
        default: null;
    };
};
declare const _sfc_main: import("vue").DefineComponent<{
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
        type: PropType<LinkTarget>;
        default: string;
    };
    to: {
        type: PropType<RouteLocationRaw>;
        default: null;
    };
}, {
    tag: import("vue").ComputedRef<string>;
    routerAttr: import("vue").ComputedRef<{
        to: RouteLocationRaw;
        href: string;
        target: LinkTarget;
        rel: string | null;
        tabindex: unknown;
        'aria-disabled': string | null;
    }>;
    link: import("vue").Ref<HTMLElement>;
    clicked: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<LinkTarget>;
        default: string;
    };
    to: {
        type: PropType<RouteLocationRaw>;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    disabled: boolean;
    exact: boolean;
    active: boolean;
    to: RouteLocationRaw;
    event: string | unknown[];
    routerTag: string;
    rel: string;
    target: LinkTarget;
    activeClass: string;
    append: boolean;
    exactActiveClass: string;
    routerComponentName: string;
}>;
export default _sfc_main;
