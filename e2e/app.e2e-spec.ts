import { StockifyPage } from './app.po';

describe('stockify App', () => {
  let page: StockifyPage;

  beforeEach(() => {
    page = new StockifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
