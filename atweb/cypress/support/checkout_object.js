class checkout {
  constructor() {
    this.productTitle = '#section-main-product > div.c-product-details-section__main > div.c-main-product__head > div.c-main-product__head--left > h1',
    this.buyButton = '#section-main-product > div.c-product-details-section__main > div.c-main-product__action.c-main-product__separator > div > button.c-main-product__action__buy.bl-button.bl-button--primary.bl-button--medium',
    this.selectColor = '#section-main-product > div.c-product-details-section__main > div.c-main-product__variant.c-main-product__separator > div:nth-child(1) > div:nth-child(2) > div > div.multiselect__tags > span',
    this.color = '#section-main-product > div.c-product-details-section__main > div.c-main-product__variant.c-main-product__separator > div:nth-child(1) > div:nth-child(2) > div > div.multiselect__content-wrapper > ul > li:nth-child(1) > span',
    this.selectType = '#section-main-product > div.c-product-details-section__main > div.c-main-product__variant.c-main-product__separator > div:nth-child(2) > div:nth-child(2) > div > div.multiselect__tags',
    this.type = '#section-main-product > div.c-product-details-section__main > div.c-main-product__variant.c-main-product__separator > div:nth-child(2) > div:nth-child(2) > div > div.multiselect__tags > span',
    this.paymentLabelPage = '#vm__marketplace-checkout > div.bl-container.pt-24.pb-24 > div.bl-flex-container.mb-32.mt-24 > div > div.mb-16.bl-heading.bl-heading--h6',
    this.buyerNotes = '#vm__marketplace-checkout > div.bl-container.pt-24.pb-24 > div:nth-child(2) > div.bl-flex-item.mr-24.bl-product-wrapper > div > div:nth-child(2) > div > div > div > div > div.p-0 > div.pt-24.pr-20 > div > div > div:nth-child(1) > div > div.bl-text-field__boxed > div > input',
    this.checkoutButton = '#vm__marketplace-checkout > div.bl-container.pt-24.pb-24 > div:nth-child(2) > div.bl-flex-item.is-col-4 > div > div.ph-20.pb-24 > button',
    this.vaPayment = '#virtual_account',
    this.paymentOption = '#payment-checkout-container > fragment-loader > div > div > section > div > div.mb-20.bl-card.bl-card--outlined > div:nth-child(4) > div.bl-payment-category > div > div > div > div > div > div.bl-dropdown__box',
    this.vaBCA = '//*[@id="payment-checkout-container"]/fragment-loader/div/div/section/div/div[1]/div[3]/div[2]/div/div/div/div[1]/div/div[2]/ul/li[1]',
    this.submitButton = '#vm__payment-checkout > div.bl-container.pt-24.pb-24 > div:nth-child(3) > div.bl-flex-item.is-col-4 > div > div.ph-20.pb-24 > button',
    this.confirmContinue = '#payment-checkout-container > fragment-loader > div > div > section > div > div.mb-20.bl-card.bl-card--outlined > div:nth-child(4) > div.bl-payment-category > div > div > div > div.bl-modal.p-24 > div.bl-modal__wrapper > div > div.bl-modal__footer > div.p-24 > button.mr-8.bl-button.bl-button--outline.bl-button--medium',
    this.thankyouPage = 'body > div.hyrule > div > section > div > div > div:nth-child(1) > div:nth-child(2) > div > div > div.c-panel__head.u-bg--sand-light > div'
  }
}

module.exports = checkout