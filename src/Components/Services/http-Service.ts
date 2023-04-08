import ClientApi from "./ClientApi";

interface Entity {
  id: number;
}

class HTTPService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const Controller = new AbortController();

    const request = ClientApi.get<T[]>(this.endpoint, {
      signal: Controller.signal,
    });

    return { request, Cancel: () => Controller.abort() };
  }

  create<T>(entity: T) {
    return ClientApi.post(this.endpoint, entity);
  }

  updateUser<T extends Entity>(entity: T) {
    return ClientApi.patch(this.endpoint + "/" + entity.id, entity);
  }

  delete(id: number) {
    return ClientApi.delete(this.endpoint + "/" + id);
  }
}

const create = (endpoint: string) => new HTTPService(endpoint);

export default create;
