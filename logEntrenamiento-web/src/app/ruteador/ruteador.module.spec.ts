import { RuteadorModule } from './ruteador.module';

describe('RuteadorModule', () => {
  let ruteadorModule: RuteadorModule;

  beforeEach(() => {
    ruteadorModule = new RuteadorModule();
  });

  it('should create an instance', () => {
    expect(ruteadorModule).toBeTruthy();
  });
});
