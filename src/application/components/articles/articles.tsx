import React, { FC, useEffect, useState } from 'react';
import { fetchArticles } from '../../../infrastructure/http/api';

export const Articles: FC = () => {
  const [articles, setArticles] = useState<any>([]);

  // Should be a utility function
  const updatingState = async () => {
    const data = await fetchArticles();
    setArticles([...data]);
  };

  useEffect(() => {
    updatingState();
  },[]);
  console.log(articles);
  return (
    <div>
      <h1>Recent articles</h1>
    </div>
  )
};