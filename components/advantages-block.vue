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
        <h2 class="mb-4 text-center text-md-left">НАШИ ПРЕИМУЩЕСТВА</h2>
        <div class="advantages-block-list">
          <div class="advantages-block__item">
            <img
              src="~/assets/icons/handshake-icon.svg"
              alt="Более 500 довольных клиентов"
            />
            <div>Более 500 довольных клиентов</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/five-icon.svg"
              alt="Работаем 5 лет на рынке"
            />
            <div>Работаем 5 лет на рынке</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/delivery-truck-icon.svg"
              alt="Оперативный выезд и просчет"
            />
            <div>Оперативный выезд и просчет</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/goal-icon.svg"
              alt="Опытный и обученный персонал"
            />
            <div>Опытный и обученный персонал</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/guarantee-icon.svg"
              alt="Гарантия на выполненные работы"
            />
            <div>Гарантия на выполненные работы</div>
          </div>

          <div class="advantages-block__item">
            <img
              src="~/assets/icons/official-documents-icon.svg"
              alt="Наличие разрешительной документации"
            />
            <div>Наличие разрешительной документации</div>
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
    height: 100%;
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
      max-width: 80px;
      max-height: 80px;
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