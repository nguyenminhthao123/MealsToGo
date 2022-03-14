import { locations } from "./location.mock";
export const locationResquest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Loi roi");
    }
    resolve(locationMock);
  });
};
export const transformDataLocation = ({ results }) => {
  const formattedResponse = results[0];
  const { lng, lat } = formattedResponse.geometry.location;
  return { lat, lng };
};
