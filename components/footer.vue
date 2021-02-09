<template>
    <div class="container-fluid">
        <footer class="footer row justify-content-center">
            <div class="col-10 col-md-4 order-3 order-md-1">
                {{ $t('footer.work-time') }}
                <br>
                <br>
                <a class="binct-phone-number-1" :href="`tel:${$store.state.contacts.number_1_call}`">{{ $store.state.contacts.number_1 }}</a>
                <br>
                <a class="binct-phone-number-2" :href="`tel:${$store.state.contacts.number_2_call}`">{{ $store.state.contacts.number_2 }}</a>
                <br>
                <br>
                <nuxt-link to="/privacy-policy"><b><em>{{ $t('footer.privacy-policy') }}</em></b></nuxt-link>
            </div>
            <div class="col-10 col-md-4 order-2 py-3 py-md-0">
                <address>{{ $t('footer.address') }}</address>
                <a href="mailto:energougalyans@ukr.net">energougalyans@ukr.net</a>
            </div>
            <div class="col-8 col-md-4  order-1 order-md-3">
                <div class="footer-logo">
                    <img src="~/assets/images/logo-white.svg" class="mb-2" alt="logo">
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

<script>
export default {
    mounted() {
        if(process.client) {
            (function(d, w, s) {
                var widgetHash = 'tuzgqcwmt7mvcyusstef', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
                ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
                var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
            })(document, window, 'script');

            (function(d, w, s) {
                var widgetHash = '1lv6dsff6yp29azinkqj', gcw = d.createElement(s); gcw.type = 'text/javascript'; gcw.async = true;
                gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
                var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
            })(document, window, 'script');
        }
    }
}
</script>

<style lang="scss" scoped>
footer.footer {
    background-color: $c-dark-grey;
    color: #fff;
    padding-top: $s-5;
    padding-bottom: $s-5;
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