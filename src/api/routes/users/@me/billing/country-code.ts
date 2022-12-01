import { route } from "@fosscord/api";
import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	//TODO
	res.json({ country_code: "US" }).status(200);
});

export default router;
