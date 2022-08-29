import { EquipmentsRepository } from "../database/repositories/equipmentsRepository.js";
import { CreateEquipmentUseCase } from "../services/usecases/equipment/createEquipmentUseCase.js";
import { EquipmentsController } from "../controllers/equipmentsController.js";
import { EquipmentRoutes } from "../routes/equipmentRoutes.js";

export function makeEquipmentsFactory(router) {
  const repository = new EquipmentsRepository();
  const createEquipmentsUseCase = new CreateEquipmentUseCase(repository);
  const controller = new EquipmentsController(createEquipmentsUseCase);
  const routes = new EquipmentRoutes(controller, router);

  return routes;
}
