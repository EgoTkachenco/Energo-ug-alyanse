<template>
  <div class="container-fluid advantages-block">
    <div class="row">
      <div class="col px-0 d-none d-lg-block">
        <img
          src="~/assets/images/about_1.jpg"
          alt="Advantages"
          class="illustration"
        />
      </div>
      <div class="col d-flex flex-column align-items-center align-items-lg-start justify-content-center py-3">
        <h2 class="mb-4 text-center text-md-left">{{ $t('advantagesBlock.title') }}</h2>
        <div class="advantages-block-list">
          <div class="advantages-block__item">
            <img
              src="~/assets/icons/work-schema/partners.svg"
              alt="Более 500 довольных клиентов"
            />
            <div>{{ $t('advantagesBlock.1') }}</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/advantages/clock.svg"
              alt="Работаем 5 лет на рынке"
            />
            <div>{{ $t('advantagesBlock.2') }}</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/advantages/car.svg"
              alt="Оперативный выезд и просчет"
            />
            <div>{{ $t('advantagesBlock.3') }}</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/advantages/strategy.svg"
              alt="Опытный и обученный персонал"
            />
            <div>{{ $t('advantagesBlock.4') }}</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/advantages/shield.svg"
              alt="Гарантия на выполненные работы"
            />
            <div>{{ $t('advantagesBlock.5') }}</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/advantages/document.svg"
              alt="Наличие разрешительной документации"
            />
            <div>{{ $t('advantagesBlock.6') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantages-block {
  display: flex;
  background: linear-gradient(0, #6386ca 0, #6386ca 100%);
  color: $c-white;

  .illustration {
    // height: 100%;
  }
  
  &-list {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: $sm) {
      justify-content: center;
      text-align: center;
    }
  }
  &__item {
    width: 50%;
    display: flex;
    font-size: $t-caption;
    align-items: center;
    margin-bottom: $s-3;
    img {
      margin-right: $s-1;
      width: 42px;
    }

    @media (max-width: $sm) {
      flex-direction: column;
      line-height: 150%;
      img {
        margin-right: 0;
        margin-bottom: $s-2;
      }
    }
    @media (max-width: $xs) {
      width: 60%;
    }
  }
}
</style>