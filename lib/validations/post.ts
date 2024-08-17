import { z } from "zod";

export const postPathSchema = z.object({
  title: z
    .string()
    .min(3)
    .max(128, { message: "記事のタイトルは128文字以内で入力してください。" }),
  content: z.any().optional(),
});

export type postPatchSchemaType = z.infer<typeof postPathSchema>;
