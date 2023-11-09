import Head from 'next/head'
import React from 'react'

export default function Metatags (): JSX.Element {
  return (
    <Head>
      <meta
        property='og:title'
        key='og:title'
        content='Padel Toernooi - Familia'
      />

      <meta
        property='og:description'
        key='og:description'
        content='Meld je snel aan voor het leukste padel toernooi van het jaar!'
      />

      <meta
        property='og:image'
        key='og:image'
        content='/images/og-image.png'
      />

      <meta property='og:image:width' key='og:image:width' content='600' />

      <meta property='og:image:height' key='og:image:height' content='600' />

      <meta property='og:type' key='og:type' content='website' />

      <meta
        property='og:site_name'
        key='og:site_name'
        content='Padel Toernooi - Familia'
      />
    </Head>
  )
}
