import { useData, defineDataLoader } from 'ice';

export default function Home() {
  const data = useData();

  return (
    <>
      <div>Hello ICESSS</div>
      <div>{JSON.stringify(data.url)}</div>
    </>
  );
};

export const dataLoader = defineDataLoader(async (ctx) => {
  console.log(ctx.pathname);
  console.log(ctx.query);

  const data = await fetch('https://randomuser.me/api/');
  console.log(data);
  return data;
});