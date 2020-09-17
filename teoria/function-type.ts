type CallbackError = Error | null;
type Callback = (error: CallbackError, response: Object) => void;
type sendRequest = (cb: Callback) => void;

const sendRequest: sendRequest = (cb: Callback): void => {
  if (cb) {
    cb(null, { message: "todo salio como lo planeamos" });
  }
};
