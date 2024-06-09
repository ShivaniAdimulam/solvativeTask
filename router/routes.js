const userController=require("../apis/userApis");
const pointsController=require("../apis/pointApis");
const express=require("express");
const router=express.Router();

router.post("/adduser",userController.registration);
router.post("/edituser/:id",userController.editProfile);
router.get("/getusers",userController.getUserList);
router.post("/givepoints",pointsController.givePoints);
router.get("/getuserspoints",pointsController.getPoints);
router.put("/deletetransaction/:id",pointsController.deleteTransaction);
router.get("/rewards/:id",pointsController.getRewardsHistory);
router.get("/p5/:id",pointsController.getP5GivenHistory);


module.exports=router

