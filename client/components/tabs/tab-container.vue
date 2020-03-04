<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render () {
    const contests = this.panes.map((pane) => {
      return pane.active ? pane.$slots.default : null
    })
    return (
      <div class="tab-content">
        {contests}
      </div>
    )
  }
}
</script>
<style lang="stylus" scoped>
  .tab-content
    background-color: #fff
</style>
