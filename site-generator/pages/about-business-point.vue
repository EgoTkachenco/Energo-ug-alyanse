<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 block-title mb-5">
          <h1 class="mb-0">ЕНЕРГОЮГ <span class="text-blue">АЛЬЯНС</span></h1>
          <h2>Первая инжиниринговая компания, которая предоставляет СЕРВИС!</h2>
        </div>
        <div class="col-12 d-lg-none d-flex logo">
          <img src="~/assets/images/logo.svg" width="250" alt="Logo">
          <span class="logo-label">ЕНЕРГОЮГ АЛЬЯНС</span>
        </div>
        <div class="col-12 col-lg-6 mt-4 mt-lg-0">
          При создании компании ЕНЕРГОЮГ АЛЬЯНС ставили цель стать надежным
          помощником в энергетике для всех потребителей. Именно поэтому,
          приоритетным направлением деятельности нашей компании является
          обеспечение наших Заказчиков комплексными решениями в электроэнергетике
          и современными, эффективными системами электроснабжения. 
          <br><br>
          Компания ЕНЕРГОЮГ АЛЬЯНС на рынке энергетики Украины уже более 5 лет. За это
          время мы создали крепкую команду, которой под силу любые проекты. Наши
          специалисты обладают профессиональной компетенцией в предоставлении
          инжиниринговых услуг полного цикла: осуществляют проектные работы,
          подбор и поставку необходимых материалов и оборудования,
          электромонтажные работы низковольтных и высоковольтных систем
          электроснабжения, испытания оборудования, подготовка необходимой
          документации для сдачи в эксплуатацию и дальнейшее обслуживание.
        </div>
        <div class="col-6 d-none d-lg-flex logo">
          <img src="~/assets/images/logo.svg" width="250" alt="Logo">
          <span class="logo-label">ЕНЕРГОЮГ АЛЬЯНС</span>
        </div>
      </div>
    </div>
    
    <FeedbackForm></FeedbackForm>
  </div>
</template>

<script>
import FeedbackForm from '../components/feedback-form';

export default {
  components: {
    FeedbackForm
  }
}
</script>

<style lang="scss">
.logo{
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-label {
    font-size: 60px;
    color: $c-blue;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
  }
}
</style>