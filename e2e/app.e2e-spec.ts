import { SuperTourOfHeroesPage } from './app.po';

describe('super-tour-of-heroes App', () => {
  let page: SuperTourOfHeroesPage;

  beforeEach(() => {
    page = new SuperTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
