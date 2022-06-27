import { nanoid } from "nanoid";

const factor: number = 1.75;

interface UUIDPool {
  pool: Array<string>;
  total: number;
  usage: number;
  free: number;
  track(): never;
  trigger(): never;
  cycle(): never;
}

class Consumer<T> {}

class Product<T> {}

class DynamicPool {}
