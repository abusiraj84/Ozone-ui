import {defineComponent, h, type PropType} from 'vue'



export const Btn = defineComponent({
    name: 'Btn',
    props: {
        text: {
            type: String as PropType<string>,
            required: true
        },
        bg: {
            type: String as PropType<string>,
            default: '#0A67D8'
        },
    },
    setup(props) {
        const baseClasses = 'px-[12px] py-[6px] rounded-[12px] text-white font-bold'

        return () => h('button', {
            style: {
                background: props.bg
            },
            class: baseClasses
        }, props.text)
    }
})
export type Btn = InstanceType<typeof Btn>
