import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";
const app = express.Router();

app.get("/getAllByUserId/:userId", async (req: Request, res: Response) => {
  try {
    const userID = req.params.userId;
    const records = await FinancialRecordModel.find({ userID: userID });
    if (records.length === 0) {
      return res.status(404).send("No records found");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});
