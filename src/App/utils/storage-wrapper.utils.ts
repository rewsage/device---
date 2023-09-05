class StorageWrapper {
  private storage?: Storage;
  constructor(type: "local" | "session") {
    try {
      this.storage =
        type === "local" ? window.localStorage : window.sessionStorage;
    } catch (error) {
      console.log(error);
    }
  }

  get length() {
    if (!this.storage || typeof this.storage === "undefined") return 0;
    return this.storage.length;
  }

  key(index: number) {
    if (!this.storage || typeof this.storage === "undefined") return null;
    return this.storage.key(index);
  }

  getItem<T>(key: string) {
    if (!this.storage || typeof this.storage === "undefined") return null;
    try {
      const value = this.storage.getItem(key);
      if (!value) return null;
      return JSON.parse(value) as T;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  setItem(key: string, value: unknown) {
    if (!this.storage || typeof this.storage === "undefined") return;
    try {
      const str = JSON.stringify(value);
      this.storage.setItem(key, str);
    } catch (error) {
      console.log(error);
    }
  }

  removeItem(key: string) {
    if (!this.storage || typeof this.storage === "undefined") return;
    return this.storage.removeItem(key);
  }

  clear() {
    if (!this.storage || typeof this.storage === "undefined") return;
    this.storage.clear;
  }
}

export const localStorageWrapper = new StorageWrapper("local");
export const sessionStorageWrapper = new StorageWrapper("session");
