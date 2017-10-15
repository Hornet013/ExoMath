import { ExomathPage } from './app.po';

describe('exomath App', function() {
  let page: ExomathPage;

  beforeEach(() => {
    page = new ExomathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
