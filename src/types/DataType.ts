type DataType = [
  {
    _id: string;
    name: string;
    cards?: Array<{
      _id: string;  
      cardHeader: string;
      totalTaskes: number;
      tasks: Array<{
        title: string;
        description: string;
      }>;
    }>;
  }
];

type DataTypeDefault = [];

export { DataType, DataTypeDefault };
