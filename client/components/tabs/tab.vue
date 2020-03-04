<script>
export default {
  name: 'Tab',
  props: {
    index: {
      required: true,
      type: [String, Number]
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  mounted () {
    this.$parent.panes.push(this)
    console.log(this)
  },
  computed: {
    active () {
      return this.$parent.value === this.index
    }
  },
  methods: {
    handleClick () {
      this.$parent.onchange(this.index)
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const ClassName = {
      tab: true,
      active: this.active
    }
    return (
      <li class={ClassName} on-click={this.handleClick}>
        {tab}
      </li>
    )
  }
}
</script>
<style lang="stylus" scoped>
.tab
  color #fff
  list-style none
  line-height 40px
  margin 0px 15px 0 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid red
    color red
  &:last-child
    margin-right 0
</style>
