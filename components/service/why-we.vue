<template>
  <div class="why-we">
    <div class="row justify-content-center mx-0">
      <div class="col-8 col-md-5 px-0">
        <img
          src="~/assets/images/about_1.jpg"
          height="100%"
          alt="Advantages"
          class="illustration"
        />
      </div>
      <div class="col-12 col-md-7 py-4 text-white d-flex flex-column">
        <h2 class="block-title">{{ $t('whywe.title') }}</h2>
        <div class="items-wrapper">
          <div class="d-flex align-items-center mt-3 mx-5">
            <img
              src="~/assets/icons/work-schema/electricity.svg"
              height="50"
              alt=""
            />
            <span class="ms-3"
              >Розробляємо проекти відповідно до вимог діючих нормативних
              документів</span
            >
          </div>
          <div class="d-flex align-items-center mt-3 mx-5">
            <img
              src="~/assets/icons/work-schema/ammeter.svg"
              class="ms-2"
              height="50"
              alt=""
            />
            <span class="ms-3"
              >Індивідуально підходимо до кожного проекту, і обираємо
              найефективніші і раціональні рішення</span
            >
          </div>
          <div class="d-flex align-items-center mt-3 mx-5">
            <img
              src="~/assets/icons/work-schema/worker.svg"
              class="ms-2"
              height="50"
              alt=""
            />
            <span class="ms-3"
              >Погоджуємо проектні рішення з відповідними органами</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.why-we {
  background: $c-blue-gradient;

  .items-wrapper {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
  }
}
</style>