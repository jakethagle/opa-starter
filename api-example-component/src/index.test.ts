import {
  createConnection,
  createHarness,
} from "@prismatic-io/spectral/dist/testing";
import myComponent, { myConnection } from ".";

const harness = createHarness(myComponent);
const connection = createConnection(myConnection, {
  host: "192.168.0.6",
  port: "3030",
  apiKey: "foobar",
});

test("getData", async () => {
  const result = await harness.action("getData", { connection });
  console.log({ result });
});
