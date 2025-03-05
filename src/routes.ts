import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Service is Up",
  });
});

// router.use("/v1/api", API_ROUTES)

export default router;
