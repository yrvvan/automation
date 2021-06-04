class registerPage {
  constructor() {
    this.email = '[data-testid=username]',
    this.password = '[data-testid=password]',
    this.loginButton = '[data-testid=submit-button]',
    this.otpConfirmButton = '[data-testid=request-otp-button]',
    this.otp = '[data-testid=otp-key-input]',
    this.otpButton = 'body > main > div > div.form-container.bordered > div.modal > div.absolute.content > div > div.modal-container.container > div > div.body > form > div.c-btn.c-btn--red.block.c-btn--redt',
    this.fbLogin = 'body > main > div > div.form-container.bordered > div.form-box > form > div:nth-child(7) > button',
    this.googleLogin = 'body > main > div > div.form-container.bordered > div.form-box > form > div:nth-child(7) > button',
    this.imgProfile = '#vm__white-header-dweb > section > header > div.sigil-header__main-nav-bar > div > div > div:nth-child(2) > div > span:nth-child(6) > div > div > a > div > div > img'
  }
}

module.exports = registerPage