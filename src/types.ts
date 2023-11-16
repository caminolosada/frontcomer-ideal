export interface Local {
  localID: string;
  localName: string;
  address: string;
  isGolden: boolean;
  districtID: number;
  district: string;
  isAvailability: boolean;
  activityType: string;
  totalDistrictStore: number;
  longitude: number;
  latitude: number;
  rentalPrice: number;
  salePrice: number;
}

export interface LocalState {
  locals: Local[];
}
