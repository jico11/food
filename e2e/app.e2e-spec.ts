import { FoodPage } from './app.po';

describe('food App', () => {
  let page: FoodPage;

  beforeEach(() => {
    page = new FoodPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
