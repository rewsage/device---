interface ErrorObserverParams {
  id: string;
  title?: string;
  message?: string;
}

export type ErrorObserverCallback = (params: ErrorObserverParams) => void;

class ErrorObservable {
  private observers: ErrorObserverCallback[] = [];

  alert(params: ErrorObserverParams) {
    this.observers.forEach((observer) => observer(params));
  }

  subscribe(...observers: ErrorObserverCallback[]) {
    this.observers.push(...observers);
  }

  unsubscribe(...observers: ErrorObserverCallback[]) {
    this.observers = this.observers.filter(
      (item) => !observers.some((observer) => observer === item)
    );
  }
}

export const errorObservable = new ErrorObservable();
