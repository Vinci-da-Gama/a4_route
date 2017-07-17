import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Welcome to angular-seed!');
  });

  it('should have <nav>', () => {
    expect(element(by.css('angular-tunes sd-navbar div')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Artical_List', () => {
    expect(element(by.css('angular-tunes sd-navbar div a:first-child')).getText()).toEqual('Artical_List');
  });

  it('should have correct nav text for About', () => {
    expect(element(by.css('angular-tunes sd-navbar div a:nth-child(2)')).getText()).toEqual('ABOUT');
  });

});
