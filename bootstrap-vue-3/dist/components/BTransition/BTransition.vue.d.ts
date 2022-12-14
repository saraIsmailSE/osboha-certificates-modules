import { TransitionMode } from '../../types';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<TransitionMode>;
        required: false;
    };
    noFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    transProps: {
        type: ObjectConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<TransitionMode>;
        required: false;
    };
    noFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    transProps: {
        type: ObjectConstructor;
        required: false;
    };
}>>, {
    noFade: boolean;
    appear: boolean;
}>;
export default _sfc_main;
