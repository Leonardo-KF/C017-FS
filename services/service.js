export class Services {
  constructor(
    createUseCase,
    updateUseCase,
    findAllUseCase,
    findByIdUseCase,
    deleteByIdUseCase
  ) {
    this.createUseCase = createUseCase;
    this.updateUseCase = updateUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findByIdUseCase = findByIdUseCase;
    this.deleteByIdUseCase = deleteByIdUseCase;
  }

  async create(data) {
    return await this.createUseCase.execute(data);
  }

  async update(data, id) {
    return await this.updateUseCase.execute(data, id);
  }

  async delete(id) {
    return await this.deleteByIdUseCase.execute(id);
  }

  async findById(id) {
    return await this.findByIdUseCase.execute(id);
  }

  async findAll() {
    return await this.findAllUseCase.execute();
  }
}
