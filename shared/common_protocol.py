import json
import base64
import time
from typing import Dict, Any

# Creates a message with type and encodes it in base64
def encode_message(msg_type: str, data: str) -> str:
    message = {
        "type": msg_type,
        "data": data,
        "timestamp": int(time.time())
    }
    json_str = json.dumps(message, separators=(",", ":"))
    return base64.b64encode(json_str.encode("utf-8")).decode("utf-8")


# Decodes and returns the dictionary 
def decode_message(encoded_msg: str) -> Dict[str, Any]:
    decoded_json = base64.b64decode(encoded_msg.encode("utf-8")).decode("utf-8")
    return json.loads(decoded_json)


# Check the message 
def validate_message(message: Dict[str, Any]) -> bool:
    return all(k in message for k in ("type", "data", "timestamp"))


if __name__ == "__main__":
    msg = encode_message("command", "ls -la")
    print("Encoded:", msg)

    decoded = decode_message(msg)
    print("Decoded:", decoded)

    print("Valid:", validate_message(decoded))
