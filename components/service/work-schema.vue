<template>
  <div class="layout">
    <div class="row justify-content-center py-5">
      <div class="col-12">
        <h2 class="block-title mb-5">{{ $t('schemas.title') }}</h2>
      </div>
      <div class="col-6 col-md-4 col-md schema-item">
        <img
          src="~/assets/icons/work-schema/customer-support.svg"
          :alt="$t('schemas.support')" />
        <div class="mt-3">
          {{ $t('schemas.support') }}
        </div>
      </div>

      <div class="col-6 col-md-4 col-md schema-item">
        <img
          src="~/assets/icons/work-schema/car.svg"
          :alt="$t('schemas.car')"
        />
        <div class="mt-3">
          {{ $t('schemas.car') }}
        </div>
      </div>

      <div class="col-6 col-md-4 col-md schema-item">
        <img
          src="~/assets/icons/work-schema/contract.svg"
          :alt="$t('schemas.contract')"
        />
        <div class="mt-3">
          {{ $t('schemas.contract') }}
        </div>
      </div>

      <div class="col-6 col-md-4 col-md schema-item">
        <img
          src="~/assets/icons/work-schema/power.svg"
          :alt="$t('schemas.work')"
        />
        <div class="mt-3">
          {{ $t('schemas.work') }}
        </div>
      </div>

      <div class="col-6 col-md-4 col-md schema-item">
        <img
          src="~/assets/icons/work-schema/deal.svg"
            :alt="$t('schemas.finish')"
        />
        <div class="mt-3">
          {{ $t('schemas.finish') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.schema-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  img {
    height: 5rem;
    color: $c-blue;
  }
}
</style>