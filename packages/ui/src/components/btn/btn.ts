import {defineComponent, h, type PropType} from 'vue'

const baseClasses = 'px-[12px] py-[6px] rounded-[8px] text-white font-bold text-[14px]'


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
        
    render() {
        return h('button', {
            class: baseClasses,
            style: {
                background: this.bg
            }
        }, this.text)
    }

  
})
export type Btn = InstanceType<typeof Btn>
