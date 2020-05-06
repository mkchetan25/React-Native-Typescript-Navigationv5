const Constants = {
    // Woo commerce config
    "WooCommerce": {
        "url": "http://wc.gmoby.org",
        "consumerKey": "ck_0ddf5511996546b367bc7fb5644a1e41bad68a8e",
        "consumerSecret": "cs_3bf9f7687456e589ba7131021ecce46654a603d9"
    },
    //Stripe
    "Stripe": {
        "PUBLISHABLE_KEY": "pk_test_GnSZcBg9QilU3Ib1fiFDoOhh00CPWX67gT",
        "SECRET_KEY": "sk_test_wvkct8t8wdtAQ5PHcmwKViwH00XwJP30SS",
        //"MERCHANT_ID": ""
    },
    //Home Screen Config
    "Home": {
        // Home banner
        "category_id": "17",
        "category_name": "Best Drones & Accessories",
        // Popular
        "popular_category_id": "21",
        // Promoted
        "promoted_category_id": "22",
    },
    //Products pagination
    ProductsPerPage: 20,
    //Cart limit
    LimitAddToCart: 10,
    //Profile urls
    RateUsUrl: 'https://facebook.github.io/react-native/',
    PrivacyPoliciesUrl: 'https://reactnativestarter.com/support/privacy/',
    TermAndConditionUrl: 'https://reactnativestarter.com/terms/',
    AboutUsUrl: 'https://facebook.github.io/react-native/blog/',
    //Default profile values
    InitAddress1: '969 Market',
    InitAddress2: '',
    InitCity: 'San Francisco',
    InitState: 'CA',
    InitPostcode: '94103',
    InitCountry: 'US',
    InitPhone: '(555) 555-5555',
    // WARNING: Currently when you change DefaultCurrency, please uninstall your app and reinstall again. The redux saved store.
    DefaultCurrency: {
        symbol: "$",
        name: "US Dollar",
        code: "USD",
        name_plural: "US dollars",
        decimal: ".",
        thousand: ",",
        precision: 2,
        format: "%s%v", // %s is the symbol and %v is the value
    },
    pick_up_checkout_enable: true,
    // Order Pick Up Date and Pick Up Time Slots is optional value
    pick_up_checkout_is_optional: true
};

export default Constants;
