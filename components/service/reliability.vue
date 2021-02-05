<template>
  <div class="layout">
    <div class="row pt-5">
      <div class="col-12 mb-5">
        <h2 class="block-title">{{ $t('reliability.title') }}</h2>
      </div>
      <div class="col-6 col-md-4 mb-5 text-center">
        <img src="~/assets/icons/safety/secure-shield.svg" height="57" alt="" />

        <h3>{{ $t('reliability.safety') }}</h3>

        <div>{{ $t('reliability.safety_description') }}</div>
      </div>

      <div class="col-6 col-md-4 mb-5 text-center">
        <img src="~/assets/icons/safety/hydro-power.svg" height="57" alt="" />

        <h3>{{ $t('reliability.personal') }}</h3>

        <div>{{ $t('reliability.personal_description') }}</div>
      </div>

      <div class="col-6 col-md-4 mb-5 text-center">
        <img
          src="~/assets/icons/safety/delivery-truck.svg"
          height="57"
          alt=""
        />

        <h3>{{ $t('reliability.operativnost') }}</h3>

        <div>{{ $t('reliability.operativnost_description') }}</div>
      </div>

      <div class="col-6 col-md-4 mb-5 text-center mt-md-3">
        <img src="~/assets/icons/safety/work-team.svg" height="57" alt="" />

        <h3>{{ $t('reliability.dovira') }}</h3>

        <div>{{ $t('reliability.dovira_description') }}</div>
      </div>

      <div class="col-6 col-md-4 mb-5 text-center mt-md-3">
        <img src="~/assets/icons/safety/account.svg" height="57" alt="" />

        <h3>{{ $t('reliability.guarantee') }}</h3>

        <div>{{ $t('reliability.guarantee_description') }}</div>
      </div>

      <div class="col-6 col-md-4 mb-5 text-center mt-md-3">
        <img src="~/assets/icons/safety/24-hours.svg" height="57" alt="" />

        <h3>{{ $t('reliability.time') }}</h3>

        <div>{{ $t('reliability.time_description') }}</div>
      </div>
    </div>
  </div>
</template>