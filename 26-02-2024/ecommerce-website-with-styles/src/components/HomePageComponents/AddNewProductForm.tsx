import { useState } from "react";

import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ProductForm from "./ProductForm";

const AddNewProductForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setDialogOpen(true)} variant="outline">
          Add New Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new product</DialogTitle>
          <DialogDescription>Add New Product To Your Store</DialogDescription>
        </DialogHeader>
        <ProductForm onSave={() => setDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewProductForm;
