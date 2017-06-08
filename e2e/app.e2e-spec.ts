import { ProstaPage } from './app.po';

describe('prosta App', () => {
  let page: ProstaPage;

  beforeEach(() => {
    page = new ProstaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
