import { FlicktTielsPage } from './app.po';

describe('flickt-tiels App', () => {
  let page: FlicktTielsPage;

  beforeEach(() => {
    page = new FlicktTielsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
