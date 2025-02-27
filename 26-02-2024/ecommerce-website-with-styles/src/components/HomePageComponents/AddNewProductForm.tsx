import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addNewProduct, getAllCategories } from "@/api/ProductApi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const AddNewProductForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [productFormData, setProductFormData] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const { mutate } = useMutation({
    mutationKey: ["addNewProduct"],
    mutationFn: addNewProduct,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ ...productFormData, id: Date.now() });
    setDialogOpen(false);
    console.log({ ...productFormData, id: Date.now() });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setDialogOpen(true)} variant="outline">
          Add New Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add new product</DialogTitle>
            <DialogDescription>Add New Product To Your Store</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL :
              </Label>
              <Input
                id="image"
                name="image"
                type="url"
                value={productFormData.image}
                placeholder="Image Url of your product"
                onChange={handleChange}
                className="col-span-2"
              />
              <Avatar className="col-span-1">
                <AvatarImage src={productFormData.image} alt="product image" />
                <AvatarFallback>Product</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={productFormData.title}
                placeholder="Name of your product"
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                required
                id="description"
                name="description"
                value={productFormData.description}
                placeholder="Description of your product"
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-4">
              <Label htmlFor="price" className=" col-span-2">
                Price
              </Label>
              <Input
                required
                id="price"
                name="price"
                type="number"
                value={productFormData.price}
                placeholder="Price of your product"
                onChange={handleChange}
                className="col-span-4"
              />
              <Label className="col-span-2 text-right" htmlFor="category">
                Category :
              </Label>
              <Select
                value={productFormData.category}
                required
                onValueChange={(value) =>
                  setProductFormData({ ...productFormData, category: value })
                }
              >
                <SelectTrigger className="col-span-4" id="category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    {categories?.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"outline"} type="submit">
                Add Product
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewProductForm;
