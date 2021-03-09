declare module '@capacitor/core' {
  interface PluginRegistry {
    Teste: TestePlugin;
  }
}

export interface TestePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
