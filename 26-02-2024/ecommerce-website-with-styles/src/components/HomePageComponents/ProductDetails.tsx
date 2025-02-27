import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteProductById, getProductById } from "@/api/ProductApi";
import {
  Edit,
  Loader,
  Loader2,
  Loader2Icon,
  LoaderCircle,
  LoaderPinwheelIcon,
  Trash2,
  Trash2Icon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useState } from "react";

const ProductDetails = ({ isDialogOpen, setIsDialogOpen, productId }) => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  const { data: product, isLoading: isProductLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: deleteProductById,
    onSuccess: () => {
      setIsConfirmDeleteOpen(false);
      setIsDialogOpen(false);
    },
  });

  const handleDelete = () => {
    deleteProduct(productId);
  };
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          {isProductLoading ? (
            <div className="flex flex-col space-y-3">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid  items-center gap-4">
                  <img
                    className="w-full rounded-lg aspect-square object-contain"
                    src={product?.image}
                    width={1000}
                    height={1000}
                    alt={product?.title}
                  />
                </div>

                <h1 className=" font-black text-xl">{product?.title}</h1>
                <h1 className="">{product?.description}</h1>
                <div className="flex justify-around items-start">
                  <h1 className="col-span-6 font-black text-    xl">
                    {product?.category}
                  </h1>
                  <h1 className=" col-span-6 font-black text-3xl">
                    ₹{product?.price}
                  </h1>
                </div>
              </div>
              <DialogFooter className="grid grid-cols-6">
                <Button
                  className="col-span-3"
                  variant={"destructive"}
                  type="button"
                  onClick={() => setIsConfirmDeleteOpen(true)}
                >
                  <Trash2Icon />
                  Delete
                </Button>
                <Button
                  variant={"secondary"}
                  className=" col-span-3"
                  type="button"
                >
                  <Edit />
                  <span className="font-bold ">Edit</span>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
        <AlertDialog open={isConfirmDeleteOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete
                product from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {!isDeleting && (
                <AlertDialogCancel
                  onClick={() => {
                    setIsConfirmDeleteOpen(false);
                  }}
                >
                  Cancel
                </AlertDialogCancel>
              )}
              <AlertDialogAction onClick={handleDelete}>
                {isDeleting ? (
                  <Loader className="text-white animate-spin w-12 h-12" />
                ) : (
                  <Trash2 className="text-white" />
                )}
                <span className="text-white">Delete</span>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Dialog>
    </>
  );
};

export default ProductDetails;
