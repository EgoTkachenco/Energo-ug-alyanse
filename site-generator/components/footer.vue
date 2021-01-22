<template>
    <div class="container-fluid">
        <footer class="footer row">
            <div class="footer-section col-12 col-md-4 order-3 order-md-1">
                Понедельник — Пятница : 08:00 — 19:00
                <br>
                <br>
                <a href="tel:+380506582777">+38(050) 658-27-77</a>
                <br>
                <a href="tel:+380973081831">+38(097) 308-18-31</a>
                <br>
                <br>
                <br>
                <br>
                <a href="#"><b><em>Положення про обробку і захист персональних даних</em></b></a>
            </div>
            <div class="footer-section col-12 col-md-4 order-2 py-3 py-md-0">
                03056, м.Київ, вул. Вадима Гетьмана, 27, офіс 33
                <br>
                <br>
                <a href="mailto:energougalyans@ukr.net">energougalyans@ukr.net</a>
                <a href="tel:+380442219189">+38 (044) 221-91-89</a>
            </div>
            <div class="footer-section col-12 col-md-4  order-1 order-md-3">
                <div class="footer-logo">
                    <img src="~/assets/images/logo-white.svg" class="mb-2" alt="logo">
                    <br>
                    <b>ЕНЕРГОЮГ АЛЬЯНС</b>
                    <br>
                    НАДІЙНИЙ ПАРТНЕР В ЕНЕРГЕТИЦІ
                </div>
            </div>
        </footer>
        <footer class="footer-bottom row">
            <div class="col-12 col-md-4">
                Icons made by 
                <!-- ref="no-follow"  -->
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> 
                <br> 
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div class="col-12 col-md-4">Copyright © All rights reserved.</div>
            <div class="col-12 col-md-4">ЕНЕРГО ЮГ АЛЬЯНС</div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
footer.footer {
    background-color: $c-dark-grey;
    color: #fff;
    padding-top: $s-3;
    padding-bottom: $s-3;
    display: flex;
    line-height: 150%;
    font-size: $t-caption;

    .footer-section {
        width: 33%;
    }
    .footer-logo {
        text-align: center;
        font-size: 10px;
        b {
            font-size: 18px;
        }
    }
    a {
        color: $c-white;
    }
}
footer.footer-bottom {
    background-color: $c-grey;
    color: #6e6e6e;
    padding-top: $s-3;
    padding-bottom: $s-3;
    line-height: 150%;
    font-size: $t-caption;
    text-align: center;
    a {
        color: $c-white;
    }
}
</style>