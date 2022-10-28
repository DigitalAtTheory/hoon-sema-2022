import Head from "next/head";

export default function Wallpapers() {
  return (
    <div className="max-w-4xl mx-auto text-center my-6 h-screen">
      <Head>
        <title>Hoonipigasus - Wallpapers - SEMA 2022</title>
      </Head>
      <h1 className="text-gray-50 mb-8 text-4xl">Download your wallpaper</h1>
      <img src="/photos/wallpaper.jpg" alt="Rosie Wallpaper" />
    </div>
  );
}
