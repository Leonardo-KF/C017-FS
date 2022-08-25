export class UserRoutes {
  constructor(controller, router) {
    this.userController = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", (req, res) => this.userController.find(req, res));
    this.router.post("/create", (req, res) =>
      this.userController.create(req, res)
    );
    this.router.patch("/update/:id", (req, res) =>
      this.userController.update(req, res)
    );
    this.router.delete("/delete/:id", (req, res) =>
      this.userController.delete(req, res)
    );
    this.router.get("/:id", (req, res) =>
      this.userController.findById(req, res)
    );
    return this.router;
  }
}
