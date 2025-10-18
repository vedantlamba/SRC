import * as z from "zod";

export const TodoSchema = z.object({
  projectName: z.string().min(1, "Project name is required!"),
  projectType: z.string().min(1, "Project type is required!"),
  tags: z.array(z.string()).nonempty("Atleast one tag is required!"),
  progressValue: z.number().min(0).max(100),
  //   teamMember: z.array(z.url()).nonempty("At least one team member required!"),
  projectPreviewPhoto: z.url("Must be a valid image URL"),
});
