import { DiagnosticPage } from './app.po';

describe('diagnostic App', () => {
  let page: DiagnosticPage;

  beforeEach(() => {
    page = new DiagnosticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
