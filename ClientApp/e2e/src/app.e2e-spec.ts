// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { AppPage } from './app.po';

describe('Erpmi App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Erpmi', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Erpmi');
  });
});
