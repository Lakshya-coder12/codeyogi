type Canceler = import("axios").Canceler;

interface Promise {
  [key: string]: Canceler;
}
