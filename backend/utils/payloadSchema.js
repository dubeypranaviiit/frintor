const z = require("zod").z;

const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phoneNumber: z.string(),
    username: z.string()
});

const loginSchema = z.object({
    username: z.string(),
    password: z.string()
});

const resetPasswordSchema = z.object({
    resetToken: z.string(),
    password: z.string(),
    newPassword: z.string()
});

module.exports = {
    signupSchema,
    loginSchema,
    resetPasswordSchema
};