import Joi from "@hapi/joi";

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dob: Joi.date().required(),
  gender: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string()
    .regex(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    )
    .error(new Error("Password is not valid")),
});

export default userSchema;
