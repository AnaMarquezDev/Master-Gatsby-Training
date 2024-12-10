import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function OrderPage() {
  return (
    <>
      <SEO title="Order a Pizza!" />
      <Nav />
      <p>Hey! I'm the Orders page</p>
    </>
  );
}
