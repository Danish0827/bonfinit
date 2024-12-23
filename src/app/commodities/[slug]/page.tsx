import MetalPage from "@/components/MetalPage/MetalPage";
import NewBannerSlug from "@/components/NewBannerSlugPage/NewBannerSlug";
import MasonryGallery from "@/components/TabsWithGallery/TabsWithGallery";
import { productCardsData } from "@/utils/productCardsData";
import React from "react";

const page = async (context: { params: Promise<{ slug: string }> }) => {
  const { slug } = await Promise.resolve(context.params);
  console.log(slug, "slug");

  const product = productCardsData.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NewBannerSlug {...product} />
      {/* <MetalPage {...product.productSingleData} /> */}
      <MasonryGallery
        images={product.masonaryGallery}
        categories={product.categories}
      />
    </div>
  );
};

export default page;
