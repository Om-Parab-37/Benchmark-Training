import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addNewProduct, getAllCategories } from "@/api/ProductApi";
import { useState } from "react";

const productFormSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(2).max(300),
  price: z.coerce.number(),
  image: z.string(),
  category: z.string().max(20),
});

const ProductForm = ({
  product = { title: "", description: "", image: "", price: 0, category: "" },
  onSave,
}) => {
  const [imageUrl, setImageUrl] = useState(
    "data:image/jpeg;base64,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"
  );

  const { mutate } = useMutation({
    mutationKey: ["addNewProduct"],
    mutationFn: addNewProduct,
    onSuccess: onSave,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: product,
  });

  const onProductFormSubmit = (values: z.infer<typeof productFormSchema>) => {
    console.log(values);
    mutate({ ...values, id: Date.now() });
  };

  return (
    <>
      <img
        className=" rounded-lg aspect-square object-contain"
        src={
          imageUrl ||
          "data:image/jpeg;base64,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"
        }
        width={100}
        height={100}
        alt={product?.title}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onProductFormSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>

                <FormControl>
                  <Input
                    type="url"
                    placeholder="Enter Url of your image"
                    {...field}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  This is Image Url of your product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Write about your product" {...field} />
                </FormControl>
                <FormDescription>
                  This is descrition of your product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories?.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  This is Category of your product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price of your product"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is descrition of your product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <span className="text-white">Add Product</span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ProductForm;
