import React from 'react'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <h1>Product ID: {id}</h1>;
};

export default Page;
