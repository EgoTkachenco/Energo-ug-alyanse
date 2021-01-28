<template>
  <div
    id="navigation"
    class="navigation-wrapper"
    :class="{ 'hide-top': navigationHideTop, background: isBackground }"
  >
    <div class="navigation__btn-top" @click="scrollTop">Top</div>

    <div class="navigation-top layout">
      <div class="navigation-top__item">
        <div class="navigation-top__item__bg"></div>
        <i class="fa fa-phone" aria-hidden="true"></i>
        <a href="tel:+380442219189">+38 (044) 221-91-89</a>
      </div>
      <div class="navigation-top__item">
        <div class="navigation-top__item__bg"></div>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <a href="mailto:">energougalyans@ukr.net</a>
      </div>
      <div class="navigation-top__item lang">
        <div class="navigation-top__item__bg"></div>
        <a href="#">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFQSURBVHjaYmRo/c8AB//+MfwBkgwg8s8/KPoFI4GIgQEgAIdycgMACAMxUAF6oygqoQ1q45dkzSH5N26XR/8zCEuepggsVEPFkxB+S9bcRwCxMDCBVD/5+h+o9O8/BqDE378Mv/+DpCGKfgERmCHLw8jw4x9AAIFs+AdUBLQWZDZI9a/////8BSuFawBzf/8FuQMggFiALvsLsh2k+g/cbCTVUBLkKgaGDwwAAcTCIHJKhFPh19+fIHf/+/cbpBNI/gO75x+I/RfKluFiY5A6AhBAjH8fMjDI5P///+A/wy8GoFf/A+34hZVkYlJ6f/wUQACxAEOSESwEDEhURSiqwbJ/gKENEEAgDcwgDlAIrgiLNgaGvyD0hwEggEAamP4DdUrCREE6GRl/gyMPQv6BqgYG+z8GgABi/HoTFL///kBJBjgbwmBAcEEcBgaAAAMASIdu6OFHDhsAAAAASUVORK5CYII="
            title="UA"
            alt="UA"
            width="16"
            height="11"
          />
          UA
        </a>
        <a href="#">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE2SURBVHjaYvz69T8DAvz79w9CQVj/0MCffwwAAcQClObiAin6/x+okxHMgPCAbOb//5n+I4EXL74ABBALxGSwagTjPzbAyMgItAQggBg9Pf9nZPx//x7kjL9////9C2QAyf9//qCQQCQkxFhY+BEggFi2b/+nq8v46BEDSPQ3w+8//3//BqFfv9BJeXmQEwACCOSkP38YgHy4Bog0RN0vIOMXVOTPH6Cv/gEEEEgDxFKgHEgDXCmGDUAE1AAQQCybGZg1f/d8//XsH0jTn3+///z79RtE/v4NZfz68xfI/vOX+4/0ZoZFAAHE4gYMvD+3/v2+h91wCANo9Z+/jH9VxBkYAAKIBRg9TL//MEhKAuWAogxgZzGC2CCfgUggAoYdGAEVAwQQ41egu5AQAyoXTQoIAAIMAD+JZR7YOGEWAAAAAElFTkSuQmCC"
            title="RU"
            alt="RU"
            width="16"
            height="11"
          />
          RU
        </a>
      </div>
    </div>

    <nav class="navigation layout">
      <nuxt-link :to="localePath('/')" class="navigation__logo">
        <img src="~/assets/images/logo.svg" alt="Logo" />
        <span>{{ $t('company')}}</span>
      </nuxt-link>

      <div class="navigation-content-right">
        <nuxt-link :to="localePath('/')" class="navigation-link active">
          {{ $t('navigation.home')}}
        </nuxt-link>
        <div class="navigation-link dropdown">
          {{ $t('navigation.services')}}

          <div class="dropdown__inner">
            <div class="service-category" :key="c.id + i" v-for="(c, i) in categories">
              <nuxt-link :to="localePath(`/services/${c.id}`)" class="service-category__title">{{ $t(`services.${c.id}`) }}</nuxt-link>
              <div v-if="c.jobs">
                <div :key="j" v-for="j in c.jobs">
                  <nuxt-link :to="localePath(`/services/${c.id}/${j}`)" class="service-job">
                    {{ $t(`jobs.${j}.name`) }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link :to="localePath('/portfolio')" class="navigation-link">
          {{ $t('navigation.portfolio')}}
        </nuxt-link>
        <nuxt-link :to="localePath('/about-business-point')" class="navigation-link">
          {{ $t('navigation.about')}}
        </nuxt-link>
        <nuxt-link :to="localePath('/contacts')" class="navigation-link">
          {{ $t('navigation.contacts')}}
        </nuxt-link>
      </div>
      <button class="navigation-mobile-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    navigationHideTop: false,
    isBackground: false,
    pagesWithBackground: ['about-business-point___uk', 'services-id___uk', 'portfolio___uk'],
    categories: []
  }),
  async fetch() {
    let categories = [];
    let services = await this.$store.state.services;
    for (let id in services) {
      categories.push({ id, jobs: services[id].jobs })
    }
    this.categories = categories;
  },
  watch: {
    $route(to, from) {
      // Alternative navigation
      this.isBackground = this.pagesWithBackground.includes(to.name);
    },
  },
  mounted() {
    if(process && process.client) {
      window.onscroll = this.handleScroll
      if (window.scrollY > 0) this.navigationHideTop = true
      this.isBackground = this.pagesWithBackground.includes(this.$route.name);
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
    handleScroll(e) {
      console.log(this.$route.name)
      if(this.pagesWithBackground.includes(this.$route.name)) {
        document
          .querySelector('.navigation-wrapper')
          .classList.remove('hide-top')
        this.navigationHideTop = false;
        return;
      };
      if (!this.navigationHideTop && window.scrollY > 0) {
        document.querySelector('.navigation-wrapper').classList.add('hide-top')
        this.navigationHideTop = true;
        return;
      }
      if (this.navigationHideTop && window.scrollY === 0) {
        document
          .querySelector('.navigation-wrapper')
          .classList.remove('hide-top')
        this.navigationHideTop = false;
        return;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation-top {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: $s-1 !important;
  padding-bottom: $s-2 !important;
  transition: all 0.5s;

  &__item {
    padding: $s-2;
    position: relative;
    margin-left: $s-2;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      transform: skew(150deg);
      z-index: -1;
    }
    a,
    i {
      position: relative;
      text-decoration: none;
      color: $c-white;
    }

    i {
      margin-right: 3px;
    }

    &.lang {
      position: relative;
      a {
        display: flex;
        align-items: center;
        transition: 0.5s all;

        img {
          margin-right: 5px;
        }
      }
      & a:last-child {
        position: absolute;
        opacity: 0;
        bottom: -16px;
        left: 50%;
        transform: translateX(-55%);
      }
      &:hover {
        & a:last-child {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: $md) {
    display: none;
  }
}
.navigation__btn-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: $c-light-blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $c-white;
  cursor: pointer;

  animation: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

  opacity: 0;
  transition: 1.2s all;
}
.navigation {
  display: flex;
  align-items: center;
  height: 62px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;

  &__logo {
    margin-right: 32px;
    font-size: 20px;
    font-family: $logoFont;
    color: $c-blue;
    display: flex;
    align-items: center;
    height: 100%;

    img {
      height: 100%;
      margin-right: $s-1;
    }
  }
  &-content-right {
    height: 100%;
    margin-left: $s-4;
    display: flex;
  }

  &-mobile-btn {
    display: none;
  }

  &-link {
    display: flex;
    align-items: center;
    // text-transform: uppercase;
    padding: 0 16px;
    color: #fff;
    font-size: 13px;
    text-decoration: none;
    transition: all 0.5s;
    margin-bottom: 2px;
    font-weight: 700;

    &:hover {
      box-shadow: 0 2px 0 0 $c-white;
    }

    &.nuxt-link-exact-active {
      box-shadow: 0 2px 0 0 $c-blue;
    }
  }

  @media (max-width: $md) {
    &-content-right {
      display: none;
    }
    &-mobile-btn {
      display: block;
      margin-left: auto;
      background: none;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      height: 30px;
      outline: none;

      span {
        display: block;
        width: 50px;
        border-radius: 5px;
        height: 3px;
        background: $c-white;
      }
    }
  }
}
.navigation-wrapper {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  &.hide-top {
    .navigation-top {
      opacity: 0;
      margin-top: -80px;
    }

    .navigation {
      background: $c-dark-grey;
    }
    .navigation__btn-top {
    opacity: 1;
  }
  }
  &.background {
    background: url('~assets/images/back.png') center;
    background-size: cover;
    position: relative;
  }
  &.background.hide-top {
    position: relative;
  }
}
.dropdown {
  .dropdown__inner {
    display: none;
    position: fixed;
    top: 142px;
    left: 0;
    width: 100vw;
    padding: $s-4;
    background: rgba(0, 0, 0, 0.6);
    // max-height: 50vh;
    flex-wrap: wrap;
  }
  &:hover {
    .dropdown__inner {
      display: flex;
    }
  }
}
.hide-top {
  .dropdown__inner {
    top: 62px;
  }
}
.service-category {
  width: 33%;
  margin-bottom: $s-2;
  font-weight: normal;
}
.service-category__title {
  color: $c-white;
  font-size: $t-text;
  &:hover {
    color: $c-blue;
    text-decoration: none;
  }
}
.service-job {
  color: $c-white;
  font-size: $t-caption;
  &:hover {
    color: $c-blue;
    text-decoration: none;
  }
}
</style>