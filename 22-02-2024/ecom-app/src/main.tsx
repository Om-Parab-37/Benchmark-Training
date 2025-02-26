import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartsProvider } from "./Providers/CartsProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsProvider } from "./Providers/ProductsProvider.tsx";
import UserIdProvider from "./Providers/UserIdProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <UserIdProvider>
      <ProductsProvider>
        <CartsProvider>
          <App />
        </CartsProvider>
      </ProductsProvider>
    </UserIdProvider>
  </QueryClientProvider>
);
