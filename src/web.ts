import { WebPlugin } from '@capacitor/core';
import { TestePlugin } from './definitions';

export class TesteWeb extends WebPlugin implements TestePlugin {
  constructor() {
    super({
      name: 'Teste',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Teste = new TesteWeb();

export { Teste };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Teste);
