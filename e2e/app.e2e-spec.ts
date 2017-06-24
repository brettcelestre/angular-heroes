import { MyAppTestPage } from './app.po';

describe('my-app-test App', () => {
  let page: MyAppTestPage;

  beforeEach(() => {
    page = new MyAppTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
