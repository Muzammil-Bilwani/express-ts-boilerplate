import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  test("It should return service status", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Service is Up",
    });
  });
});
