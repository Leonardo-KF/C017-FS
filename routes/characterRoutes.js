export class CharacterRoutes {
  constructor(controller, router) {
    this.characterController = controller;
    this.route = router;
  }

  route() {
    router.get("/", this.characterController.find);
    router.post("/create", this.characterController.create);
    router.patch("/update/:id", this.characterController.update);
    router.delete("/delete/:id", this.characterController.delete);
    router.get("/find/:id", this.characterController.findById);
    router.get("/search", this.characterController.findCharacterByName);
  }
}
