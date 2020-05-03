import Joi from "@hapi/joi";

const transactionSchema = Joi.object({
  id: Joi.number().required(),
  description: Joi.string().required(),
  amount: Joi.number().required(),
  currency: Joi.string().required(),
}).unknown();

export default transactionSchema;
