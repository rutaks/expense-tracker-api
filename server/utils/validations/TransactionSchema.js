import Joi from "@hapi/joi";

const transactionSchema = Joi.object({
  description: Joi.string().required(),
  amount: Joi.number().required(),
  currency: Joi.string().required(),
});

export default transactionSchema;
