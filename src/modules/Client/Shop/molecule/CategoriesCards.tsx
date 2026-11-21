"use client";
import { memo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { EmptyState, ErrorState } from "@/core/ui-states";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "../../Home/Popular/molecule/ProductCardSkeleton";
import ProductCard from "../../Home/Popular/molecule/PopularCard";
import { Container } from "@/shared/components/atoms/Container";
import { Product } from "../../types/Popular";

type Props = {
  products: Product[];
  isLoading: boolean;
  isError?: boolean;
  refetch?: () => unknown;
};

const GRID = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8";
const STEP = 6;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
  }),
};

const ProductsGrid = ({ products }: { products: Product[] }) => {
  const [visible, setVisible] = useState(STEP);

  const shown = products.slice(0, visible);
  const hasMore = visible < products.length;

  return (
    <>
      <div className={GRID}>
        {shown.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            custom={index % STEP}
            initial="hidden"
            animate="visible"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pb-10">
          <Button size="lg" onClick={() => setVisible((v) => v + STEP)}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

const CategoriesCards = ({ products, isLoading, isError, refetch }: Props) => {
  if (isError) return <ErrorState onRetry={() => refetch?.()} />;

  if (!isLoading && products.length === 0) return <EmptyState />;

  return (
    <Container>
      {isLoading ? (
        <div className={GRID}>
          {Array.from({ length: STEP }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <ProductsGrid
          key={products.map((p) => p.id).join("-")}
          products={products}
        />
      )}
    </Container>
  );
};

export default memo(CategoriesCards);
