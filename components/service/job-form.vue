<template>
  <div class="job-form">
    <div class="container">
      <div class="row align-items-end justify-content-center">
        <div class="col-12 col-md-4 text-center text-md-start">
          Чтобы получить предложение <br />
          Оставьте заявку:
        </div>
        <div class="col-8 col-md-2">
          <label for="name" class="form-label">Ваше имя </label>
          <input name="name" class="form-control" type="text" />
        </div>
        <div class="col-8 col-md-2">
          <label for="email" class="form-label">Ваше email </label>
          <input name="email" class="form-control" type="email" />
        </div>
        <div class="col-8 col-md-2">
          <label for="phone" class="form-label">Ваш телефон </label>
          <input name="phone" class="form-control" type="text" />
        </div>
        <div class="col-8 col-md-2 d-flex justify-content-center">
          <button class="btn btn-primary mt-2 mt-md-0">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>