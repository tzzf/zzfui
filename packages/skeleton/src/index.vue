<script>
export default {
  functional: true,
  name: "v-skeleton",
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    return props.isLoading ? (
      <div class="v-skeleton">
        <div class="skeleton-content"></div>
      </div>
    ) : (
      scopedSlots.default()
    );
  }
};
</script>
