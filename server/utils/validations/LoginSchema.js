import Joi from "@hapi/joi";

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .regex(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    )
    .error(new Error("Password is not valid")),
});

export default loginSchema;
