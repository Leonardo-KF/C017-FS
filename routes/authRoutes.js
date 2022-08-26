export class AuthRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/login", (req, res) => this.controller.login(req, res));
  }
}
