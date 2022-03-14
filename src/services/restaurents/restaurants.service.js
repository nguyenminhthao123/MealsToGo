import camelize from "camelize";
import { mockImages, mocks } from "./mock/";
export const restaurantsResquest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const transformDataResult = ({ results = [] }) => {
  const mapResult = results.map((res) => {
    res.photos = res.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mapResult);
};
