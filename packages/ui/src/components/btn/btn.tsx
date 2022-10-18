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
            default: '#f3f3'
        },
    },
    setup(props) {
        return () => h('button', {
            style: {
                background: props.bg
            },
            class: 'border-0'
        }, props.text)
    }
})
export type Btn = InstanceType<typeof Btn>
