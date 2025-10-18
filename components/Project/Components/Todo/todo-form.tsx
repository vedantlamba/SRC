"use client";
import * as z from "zod";
import { TodoSchema } from "@/Schema";
import { useForm, UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";

const todoTagsList = [
  {
    value: "High",
    label: "High",
  },
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "Development",
    label: "Development",
  },
  {
    value: "AI",
    label: "AI",
  },
];

interface TodoFormProps {
  form: UseFormReturn<z.infer<typeof TodoSchema>>;
  onSubmit: (values: z.infer<typeof TodoSchema>) => void;
}

export const TodoForm = ({ form, onSubmit }: TodoFormProps) => {
  //   const form = useForm<z.infer<typeof TodoSchema>>({
  //     resolver: zodResolver(TodoSchema),
  //     defaultValues: {
  //       projectName: "Landing Page",
  //       projectType: "Web",
  //       tags: [],
  //       progressValue: 0,
  //     //   teamMember: [""],
  //       projectPreviewPhoto:
  //         "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
  //     },
  //   });
  //   const onSubmit = (values: z.infer<typeof TodoSchema>) => {
  //     console.log(values);
  //   };

  return (
    <div className="grid grid-5">
      <Form {...form}>
        <div className="grid gap-5">
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={todoTagsList}
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select tags..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="progressValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Progress</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectPreviewPhoto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Progress</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>
    </div>
  );
};
