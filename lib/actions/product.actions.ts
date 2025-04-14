'use server'

   import { connectToDatabase } from '@/lib/db'
   import Product, { IProduct } from '@/lib/db/models/product.model'


  //  get all category
   export async function getAllCategories() {
     await connectToDatabase()
     const categories = await Product.find({ isPublished: true }).distinct(
       'category'
     )
     return categories
   }

  //  get product for card
   export async function getProductsForCard({
     tag,
     limit = 4,
   }: {
     tag: string
     limit?: number
   }) {
     await connectToDatabase()
     const products = await Product.find(
       { tags: { $in: [tag] }, isPublished: true },
       {
         name: 1,
         href: { $concat: ['/product/', '$slug'] },
         image: { $arrayElemAt: ['$images', 0] },
       }
     )
       .sort({ createdAt: 'desc' })
       .limit(limit)
     return JSON.parse(JSON.stringify(products)) as {
       name: string
       href: string
       image: string
     }[]
   }

  //  get products by tag

export async function getProductByTag({tag, limit = 18}: {tag: string, limit?: number}) {
  await connectToDatabase()
  const products = await Product.find({tags: {$in: [tag]}, isPublished: true})
  .sort({createdAt: 'desc'})
  .limit(limit)
  return JSON.parse(JSON.stringify(products)) as IProduct[]
}