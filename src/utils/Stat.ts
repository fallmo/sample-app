import { Schema, model } from "mongoose";

type IStat = {
  company_name: string;
  openshift_adoption_year?: number;
  sector?: string;
};

export const Stat = model<IStat>(
  "stat",
  new Schema({
    company_name: String,
    openshift_adoption_year: Number,
    sector: String,
  })
);
