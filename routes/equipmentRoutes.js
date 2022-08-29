export class EquipmentRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/create-equipment", (req, res) =>
      this.controller.create(req, res)
    );
    return this.router;
  }
}
