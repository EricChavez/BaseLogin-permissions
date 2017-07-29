import { BaseLoginPage } from './app.po';

describe('base-login App', () => {
  let page: BaseLoginPage;

  beforeEach(() => {
    page = new BaseLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
