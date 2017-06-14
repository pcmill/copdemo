import { ShowrecommenderPage } from './app.po';

describe('showrecommender App', () => {
  let page: ShowrecommenderPage;

  beforeEach(() => {
    page = new ShowrecommenderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
