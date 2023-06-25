import Food from "@/components/Home/Food";
import Menu from "@/components/Home/Menu";
import { menus } from "@/constants/menus";

export default function Home() {
  const foods = [1, 2, 3];

  return (
    <main className="home">
      <h1 className="home-heading">Explore Menu</h1>
      <div className="home-menus">
        <div>
          {menus.map((menu) => (
            <Menu key={menu} text={menu} />
          ))}
        </div>
      </div>
      <div className="home-foods">
        {foods.map((item) => (
          <Food key={item} />
        ))}
      </div>
    </main>
  );
}
