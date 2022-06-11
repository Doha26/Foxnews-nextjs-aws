import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import News from "../components/News";

const images = [
  {
    id: "62a3b9d939abd631007867ae",
    hasImage: true,
    largeImage: false,
    img: "http://placehold.it/32x32",
    authorImg: "http://placehold.it/32x32",
    authorName: "Doreen Chaney",
    description:
      "Voluptate irure ex ex irure. Anim nisi labore proident voluptate mollit dolore labore deserunt minim exercitation. Aute ex anim eiusmod adipisicing sint proident ad tempor amet. Ea quis non sunt duis nisi minim occaecat quis officia minim deserunt id qui veniam. Ea veniam amet enim elit exercitation in fugiat veniam occaecat cupidatat mollit ea. Mollit dolor dolor sunt deserunt fugiat voluptate non et. Occaecat tempor sit tempor irure exercitation.\r\n",
    title: "consequat dolore enim aute qui fugiat",
  },
  {
    id: "62a3b9d997514456809a0f15",
    hasImage: true,
    largeImage: true,
    img: "http://placehold.it/32x32",
    authorImg: "http://placehold.it/32x32",
    authorName: "Aurelia Bolton",
    description:
      "Cupidatat nisi ad dolore aliqua duis cupidatat ad minim aute adipisicing aliqua sunt et. Labore consectetur ad consequat dolor id duis laboris. Ea pariatur sit sint ex duis eiusmod velit id nostrud mollit laboris ipsum sit. Occaecat minim voluptate dolor enim excepteur. Sint voluptate non officia quis culpa laborum cillum Lorem nostrud. Nulla reprehenderit velit ipsum voluptate officia irure.\r\n",
    title: "non tempor elit reprehenderit ex nostrud",
  },
  {
    id: "62a3b9d9feeb85098322e6d0",
    hasImage: false,
    largeImage: false,
    img: "http://placehold.it/32x32",
    authorImg: "http://placehold.it/32x32",
    authorName: "Cynthia Rivera",
    description:
      "Dolore quis duis qui laboris excepteur. Sunt magna eu non dolor consequat aliqua dolor. Ipsum magna quis exercitation dolor aliquip laborum officia. Do occaecat sit ad amet nostrud. Veniam minim consequat mollit laboris est est proident officia reprehenderit ex exercitation ex. Veniam duis excepteur do aute amet commodo tempor in nulla ea. Adipisicing Lorem eu tempor cupidatat laborum.\r\n",
    title: "consectetur cupidatat minim amet laboris deserunt",
  },
  {
    id: "62a3b9d92bc939d8e7f87293",
    hasImage: false,
    largeImage: true,
    img: "http://placehold.it/32x32",
    authorImg: "http://placehold.it/32x32",
    authorName: "Debra Suarez",
    description:
      "Ut ad mollit officia id. Do velit anim sint cupidatat culpa irure. Et pariatur et consequat cillum. In consectetur sunt veniam consequat voluptate aliqua id aliqua. Minim consequat ipsum mollit anim nisi deserunt. Aute qui veniam commodo ad pariatur aliqua cillum ex consequat id.\r\n",
    title: "velit anim laboris laborum labore incididunt",
  },
  {
    id: "62a3b9d9ec7955932c6f015a",
    hasImage: false,
    largeImage: false,
    img: "http://placehold.it/32x32",
    authorImg: "http://placehold.it/32x32",
    authorName: "Cathy Hutchinson",
    description:
      "Dolor magna velit in commodo adipisicing et mollit amet proident. Quis eu sunt esse sunt dolore id. Ut in nostrud mollit sunt cupidatat ad nostrud Lorem aute fugiat id. Ea nostrud reprehenderit in sunt exercitation excepteur nisi veniam non. Enim enim amet adipisicing dolore consectetur consectetur minim et in ullamco velit ut irure consectetur.\r\n",
    title: "labore amet esse ipsum nisi ea",
  },
  {
    id: "62a3b9d981922bf86558400c",
    hasImage: true,
    largeImage: true,
    img: "http://placehold.it/32x32",
    authorImg: "http://placehold.it/32x32",
    authorName: "Cameron Lindsay",
    description:
      "Enim et anim consectetur laboris aliquip cillum ad cillum ut non. Nulla amet et laborum anim. Est ex nulla sunt aute excepteur aliqua laboris pariatur tempor anim qui esse cillum.\r\n",
    title: "adipisicing nostrud adipisicing laboris proident ipsum",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>FoxNews</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="mt-0 fixed w-full z-10 top-0 bg-white ">
        <div className="flex flex-row items-center justify-between h-16 w-9/12 mx-auto  ">
          <div className="flex flex-row items-center">
            <Image src="/logo-img.svg" alt="Logo" width="39" height="32" />
            <h1 className="font-mono font-bold text-3xl p-2 hidden sm:block">
              FoxNews
            </h1>
          </div>
          <h1 className="font-mono font-bold text-sm hidden sm:block">
            Call Us (348)981.872 / hello@foxnews.com
          </h1>
          <h1 className="font-mono font-bold text-sm hover:underline hover:cursor-pointer hover:font-bold">
            Login
          </h1>
        </div>
      </nav>
      <div className=" flex justify-center font-bold mt-24 text-2xl underline text-black items-center">
        Latest Updates
        <span className="flex h-3 w-3 ml-2">
          <div className="animate-ping inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></div>
          <span className="absolute rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </div>
      <div className="sm:px-16 py-8 grid grid-cols-1 sm:grid-cols-3  gap-6 mx-auto w-10/12">
        {images.map((item, i) => (
          <div className="rounded-lg" key={item.id}>
            <News
              imgSrc={"https://source.unsplash.com/random/?city,night"}
              title={item.title}
              description={item.description}
              hasImage={item.hasImage}
              authorName={item.authorName}
              authorImg={item.authorImg}
              largeImage={i % 2 == 0}
              itemIndex={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
