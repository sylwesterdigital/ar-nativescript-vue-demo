import Vue from "nativescript-vue";

import Home from "./components/Home";

Vue.registerElement("AR", () => require("nativescript-ar").AR);

Vue.config.silent = (TNS_ENV === 'production');

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
