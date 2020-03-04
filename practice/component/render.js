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
  props: ['props1'],
  name: 'com',
  components: {
    C1: childrenComponent
  },
  //   template: `
  //   <div :style='style'>
  //     <slot></slot>
  //   </div>
  //   `,
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
  render (createElement) {
    return createElement('div', {
      style: this.style
    //   on: {
    //     click: () => this.$emit('click')
    //   }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
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
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  //   template: `
  //     <div>
  //         <comp-one ref='comp'>
  //             <span ref='span'>{{value}}</span>
  //         </comp-one>

  //     </div>
  //   `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      //   on: {
      //     click: this.handleClick
      //   }
      nativeOn: {
        click: this.handleClick
      }
    }, [createElement('span', {
      ref: 'span',
      slot: 'header',
      domProps: {
        innerHTML: '<span>345</span>'
      },
      attrs: {
        id: 'text-id'
      }
    }, this.value)]
    )
  }
})
