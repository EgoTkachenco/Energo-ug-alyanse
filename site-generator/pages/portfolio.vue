<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-4" v-for="item in portfolio">
          <div
            class="portfolio-item"
            :style="`background-image: url(${require(`~/assets/images/portfolio/${item.img}`)});`"
          >
            <div class="portfolio-item-content">
              <h3>{{ item.name }}</h3>
              <div class="description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    portfolio() {
      return this.$store.state.portfolio
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  position: relative;
  width: 350px;
  height: 300px;
  background-size: cover;
  cursor: pointer;
  &-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    color: $c-white;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    z-index: 0;
    opacity: 0;
    transition: all 0.5s;
    padding: $s-4;
    text-align: center;
    line-height: 150%;

    .description {
        font-size: $t-caption;
    }
  }

  &:hover {
    .portfolio-item-content {
      opacity: 1;
      z-index: 20;
    }
  }
}
</style>