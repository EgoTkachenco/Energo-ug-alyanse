<template>
    <div class="container-fluid">
        <footer class="footer row justify-content-center">
            <div class="col-10 col-md-4 order-3 order-md-1">
                {{ $t('footer.work-time') }}
                <br>
                <br>
                <a href="tel:+380506582777">+38(050) 658-27-77</a>
                <br>
                <a href="tel:+380973081831">+38(097) 308-18-31</a>
                <br>
                <br>
                <nuxt-link to="/privacy-policy"><b><em>{{ $t('footer.privacy-policy') }}</em></b></nuxt-link>
            </div>
            <div class="col-10 col-md-4 order-2 py-3 py-md-0">
                <address>{{ $t('footer.address') }}</address>
                <a href="mailto:energougalyans@ukr.net">energougalyans@ukr.net</a>
                <br>
                <a href="tel:+380442219189">+38 (044) 221-91-89</a>
            </div>
            <div class="col-12 col-md-4  order-1 order-md-3">
                <div class="footer-logo">
                    <img src="~/assets/images/logo-white.svg" class="mb-2" alt="logo">
                    <br>
                    <b>{{ $t('company') }}</b>
                    <br>
                    {{ $t('slogan') }}
                </div>
            </div>
        </footer>
        <footer class="footer-bottom row align-items-center">
            <div class="col-12 col-md-4"></div>
            <div class="col-12 col-md-4">Copyright © All rights reserved.</div>
            <div class="col-12 col-md-4"><b>{{ $t('company') }}</b></div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
footer.footer {
    background-color: $c-dark-grey;
    color: #fff;
    padding-top: $s-2;
    padding-bottom: $s-2;
    line-height: 150%;
    font-size: $t-caption;

    @media (max-width: $sm) {
        text-align: center;
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
    padding-top: $s-1;
    padding-bottom: $s-1;
    line-height: 150%;
    font-size: 10px;
    text-align: center;
    a {
        color: $c-white;
    }
}
</style>