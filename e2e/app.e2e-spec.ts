import { HptcgClientPage } from './app.po';

describe('hptcg-client App', () => {
  let page: HptcgClientPage;

  beforeEach(() => {
    page = new HptcgClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
