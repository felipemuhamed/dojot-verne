import moment from "moment";
import uuid from "uuid/v4";

const messages: Map<string, object> = new Map();

function setPayload(mqttPayload: object, cname: string) {
  const value = {
    data: mqttPayload,
    metadata: {
      messageId: uuid(),
      receivedTs: moment().unix(),
      thingId: cname,
    },
  };

  messages.set(value.metadata.messageId, value);

  console.log(`Number of stored messages: ${messages.size}`);

  return value;
}

function getPayload(id: string) {
  return messages.get(id);
}

export { setPayload, getPayload };
