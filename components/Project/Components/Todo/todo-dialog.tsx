"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TodoForm } from "./todo-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "@/Schema";
import { toast } from "sonner";
import * as z from "zod";
import { useRef } from "react";

export const TodoDialog = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof TodoSchema>>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      projectName: "Landing Page",
      projectType: "Web",
      tags: [],
      progressValue: 0,
      //   teamMember: [""],
      projectPreviewPhoto:
        "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
    },
  });
  const onSubmit = (values: z.infer<typeof TodoSchema>) => {
    console.log(values);
    closeRef?.current?.click();
    form.reset();
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="lg:px-3 lg:py-2 py-2 px-2 rounded-md font-medium cursor-pointer text-xs lg:text-base bg-[#D4FF00]">
            Make Todo
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Make Todo Project</DialogTitle>
            {/* <DialogDescription>
              Make a ToDo project. Click save when you&apos;re done.
            </DialogDescription> */}
          </DialogHeader>
          {/* <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div> */}
          <TodoForm form={form} onSubmit={onSubmit} />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" ref={closeRef}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
