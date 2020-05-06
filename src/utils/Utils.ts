import currencyFormatter from "currency-formatter";
import Constants from "../common/Constants";
import * as Theme from "../common/Theme.json";

export default class Utils {
    /**
     * Calculate price included tax amount
     */
    static getPriceIncludedTaxAmount = (product?: any, variation?: any, noFormat?: any) => {
        if (!product) return null;

        const productPrice =
            variation && variation.price !== ""
                ? variation.price
                : product.price !== ""
                ? product.price
                : product.regular_price;

        if (
            product.tax_status === "taxable" &&
            product.tax_class &&
            product.tax_class !== ""
        ) {
            const taxAmount = Number(product.tax_class);
            const includedPrice = productPrice * ((100 + taxAmount) / 100);

            return noFormat
                ? includedPrice
                : Utils.getCurrecyFormatted(includedPrice);
        }

        return noFormat ? productPrice : Utils.getCurrecyFormatted(productPrice);
    };

    // format currency
    static getCurrecyFormatted = (price: any) => {
        let formatedPrice = "";
        if (price && price !== "") {
            formatedPrice = currencyFormatter.format(price, {
                ...Constants.DefaultCurrency,
            });
        }

        return formatedPrice;
    };

    static validateEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static replaceHTML(text: string) {
        return text.replace("&amp;", "&");
    }

    static getPriceFontSize(text: string) {
        if (text.length <= 6) {
            return Theme.subTitleTextSize;
        } else {
            return Theme.defTextSize;
        }
    }
}