import { Router } from "express";
import {
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
} from "./../controllers/routeController.js";
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);

router.route('/update/:id')
.get(editCustomer)
.post(updateCustomer)

router.delete("/delete/:id", deleteCustomer);

export default router;
