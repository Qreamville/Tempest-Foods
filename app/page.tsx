import Food from "@/components/Home/Food";
import { getMeals } from "@/actions/getMeals";
import Menus from "@/components/Home/Menus";

export default async function Home({ searchParams }: any) {
  const food = await getMeals(searchParams);
  console.log(food);
  console.log(searchParams.category);

  return (
    <main className="home">
      <h1 className="home-heading">Explore Menu</h1>
      <div className="home-menus">
        <Menus />
      </div>
      <div className="home-foods">
        {food?.map((item) => (
          <Food key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
