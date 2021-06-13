import axios from "axios";

import HttpService from "@/commons/services/HttpService";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("Http Service", () => {
  test("should call get with the proper URL", async () => {
    const testUrl = "https://example.com";
    const httpService = new HttpService();

    await httpService.get(testUrl);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(testUrl);
  });
});
