import { ref, watch, computed } from "vue"
import { defineStore } from "pinia"
import {useCartStore} from '../stores/useCartStore';

export const useCouponStore = defineStore('coupon', () => {
    const cartStore = useCartStore();

    const couponInput = ref('');
    const couponValidation = ref('');
    const discountPercentage = ref(0);
    const discount = ref(0);

    const validCoupons = [
        {name: '10descuento', discount: .10},
        {name: '20descuento', discount: .20}
    ]

    watch(discountPercentage, () => {
        discount.value = (cartStore.total * discountPercentage.value).toFixed(2);
    })

    const applyCoupon = () => {
        if(validCoupons.some(coupon => coupon.name === couponInput.value)){
            couponValidation.value = 'Aplicando cupón...';

            setTimeout(() => {
                discountPercentage.value = validCoupons.find(coupon => coupon.name === couponInput.value).discount;
                couponValidation.value = 'Conseguíste el descuento';
            }, 3000);

        }else{
            couponValidation.value = 'El cupón que ingresaste no existe';
            setTimeout(() => {
                couponValidation.value = '';
            }, 3000);
        }

        setTimeout(() => {
            couponValidation.value = '';
        }, 5000);
    }

    const isValidCoupon = computed(() => {
        return discountPercentage.value > 0;
    })

    function reset(){
        couponInput.value = '';
        couponValidation.value = '';
        discountPercentage.value = 0;
        discount.value = 0;
    }

    return{
        couponInput,
        applyCoupon,
        couponValidation,
        discount,
        isValidCoupon,
        reset
    }
})