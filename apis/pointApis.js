const userModel = require("../models/userModel");
const pointModel = require("../models/pointModel");

module.exports.givePoints=async (req, res) => {
    const { from, to, points } = req.body;
    try {
        const userFrom = await userModel.findById(from);
        const userTo = await userModel.findById(to);

        if (!userFrom || !userTo) {
            return res.status(400).send({ status:false,error: 'Invalid users' });
        }
        if (points <= 0 || points > userFrom.p5Points) {
            return res.status(400).send({ status:false,error: 'Invalid amount' });
        }

        userFrom.p5Points -= points;
        userTo.rewardsPoints += points;

        await userFrom.save();
        await userTo.save();

        const newReward = await pointModel.create({ points, givenBy: from, givenTo: to });

        res.status(201).send({status:true,message:"Points given successfully",data:newReward});
    } catch (err) {
        res.status(500).send({status:false, error: err.message });
    }
}

module.exports.getPoints=async (req, res) => {
    try {
        const rewards = await pointModel.find({isDeleted:false}).populate('givenBy').populate('givenTo');
        res.status(200).send({status:true,message:"Fetched data successfully",data:rewards})
    } catch (err) {
        res.status(500).send({status:false, error: err.message });
    }
}

module.exports.deleteTransaction=async (req, res) => {
    const transactionId = req.params.id;
    try {
        const transaction = await pointModel.findById(transactionId);
        if (!transaction) {
            return res.status(404).send({ status:false,error: 'Transaction not found' });
        }

        const userFrom = await userModel.findById(transaction.givenBy);
        const userTo = await userModel.findById(transaction.givenTo);

        userFrom.p5Points += transaction.points;
        userTo.rewardsPoints -= transaction.points;

        await userFrom.save();
        await userTo.save();

        const update =await pointModel.findOneAndUpdate({_id:req.params.id},{isDeleted:true})
        res.status(200).send({ status:true,message: 'Transaction deleted successfully' });
    } catch (err) {
        res.status(500).send({status:false, error: err.message });
    }
}

module.exports.getRewardsHistory=async (req, res) => {
    try {
        const rewards = await pointModel.find({givenTo:req.params.id ,isDeleted:false}).populate('givenBy').populate('givenTo');
        res.status(200).send({status:true,message:"Fetched data successfully",data:rewards})
    } catch (err) {
        res.status(500).send({status:false, error: err.message });
    }
}

module.exports.getP5GivenHistory=async (req, res) => {
    try {
        const data = await pointModel.find({givenBy:req.params.id ,isDeleted:false}).populate('givenBy').populate('givenTo');
        res.status(200).send({status:true,message:"Fetched data successfully",data:data})
    } catch (err) {
        res.status(500).send({status:false, error: err.message });
    }
}