import { TechDemandCliPage } from './app.po';

describe('tech-demand-cli App', function() {
  let page: TechDemandCliPage;

  beforeEach(() => {
    page = new TechDemandCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
