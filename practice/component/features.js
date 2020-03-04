import Vue from 'vue'

const childrenComponent = {
  template: '<div>this is children:{{date.value}}</div>',
  inject: ['yeye', 'date'],
  mounted () {
    console.log(this.yeye, this.value)
    console.log(this.$parent.$options.name)
  }
}

const component = {
  name: 'com',
  components: {
    C1: childrenComponent
  },

  template: `
  <div :style='style'>
    <slot :value='value' :aaa='789'></slot>
    <C1></C1>
  </div>
  `,
  //   template: `
  //     <div :style='style'>
  //       <div class='header'>
  //         <slot name='header'></slot>
  //       </div>
  //       <div class ='body'>
  //         <slot name='body'></slot>
  //       </div>
  //     </div>
  //   `
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: '456'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const date = {}
    Object.defineProperty(date, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      date
    }
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value)
    console.log(this.$refs.span)
  },
  template: `
    <div>
        <comp-one ref='comp'>
            <span ref='span' slot-scope='props'>{{value}}{{props.value}}{{props.aaa}}</span>
        </comp-one>
        <input type='text' v-model='value'/>
    </div>
  `
})
