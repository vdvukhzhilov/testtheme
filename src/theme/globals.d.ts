declare module '*?island' {
  const lazyComponent: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (): Promise<{ default: React.ComponentType<any> }>;
    moduleName: string;
    moduleId: string;
  };
  export default lazyComponent;
}
