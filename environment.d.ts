declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RUNMODE: 'jenkins' | 'local';
      ENVIRONMENT: 'qa' | 'prod';
    }
  }
}

export { };