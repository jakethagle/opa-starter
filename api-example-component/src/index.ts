import {
  action,
  component,
  input,
  onPremiseConnection,
} from "@prismatic-io/spectral";
import axios from "axios";

const getData = action({
  display: {
    label: "Get Data",
    description: "Get Data",
  },
  inputs: {
    connection: input({
      label: "Connection",
      type: "connection",
      required: true,
    }),
  },
  perform: async (context, params) => {
    const { host, port, apiKey } = params.connection.fields;
    const response = await axios.get(`http://${host}:${port}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    return { data: response.data };
  },
});

export const myConnection = onPremiseConnection({
  key: "myConnection",
  label: "Acme HTTP OPA Example",
  inputs: {
    host: {
      label: "Host",
      type: "string",
      required: true,
      onPremiseControlled: true,
    },
    port: {
      label: "Port",
      type: "string",
      required: true,
      onPremiseControlled: true,
    },
    apiKey: {
      label: "API Key",
      type: "string",
      required: true,
    },
  },
});

export default component({
  key: "acmeHttpOpaExample",
  public: false,
  display: {
    label: "acme-http-opa-example",
    description: "Acme HTTP OPA Example",
    iconPath: "icon.png",
  },
  actions: { getData },
  connections: [myConnection],
});
