import axios from 'axios';
import { Article } from '@/domain/entities/article';

export const fetchArticles = async () : Promise<Article[]> => {

  try {
    const response = await axios.get('https://dummyjson.com/products');
    const articleData = response.data;

    const articles : Article[] = articleData.products.map((item : Article) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      discountPercentage: item.discountPercentage,
      rating: item.rating,
      stock: item.stock,
      brand: item.brand,
      category: item.category,
      thumbnail: item.thumbnail,
      images: item.images,
      })
    );
    return articles;

  } catch (error) {
    console.error(`Some Error message`);
    throw error;
  };
};