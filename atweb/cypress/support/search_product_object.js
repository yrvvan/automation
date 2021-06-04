class searchProduct {
  constructor() {
    this.searchBar = '#v-omnisearch__input',
    this.resultLabel = '[data-test=title-label]',
    this.productList = '#product-explorer-container > div > div.bl-flex-container > div.bl-flex-item.bl-product-list-wrapper > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div > div.bl-product-card__thumbnail > figure > div > div:nth-child(1) > a > img',
    this.productLink = '#product-explorer-container > div > div.bl-flex-container > div.bl-flex-item.bl-product-list-wrapper > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div > div.bl-product-card__thumbnail > figure > div > div:nth-child(1) > a'
  }
}

module.exports = searchProduct