export interface Local {
  localId: string;
  localName: string;
  address: string;
  districtId: number;
  district: string;
  isAvailability: boolean;
  activityType: string;
  totalDistrictStore: number;
  longitude: number;
  latitude: number;
  rentalPrice: number;
  salePrice: number;
}

export interface LocalStatus {
  locals: Local[];
}
