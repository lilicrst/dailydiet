export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new: undefined;
      feedback: {
        status: boolean;
      }
      meal:
      {
        key: string;
        day: string;
      }
      edit: {
        key: string;
        day: string;
      }
    }
  }
}