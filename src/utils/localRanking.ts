import { getLocalResults, setLocalResults } from "./storage";

export const localRanking = (
  userName: string,
  points: string,
  difficult: string
) => {
  const base = JSON.parse(getLocalResults("results") as string) as Array<{
    id: string;
    userName: string;
    points: string;
    difficult: string;
  }>;

  const id = userName.replace(/ /g, "_");
  if (base === null) {
    setLocalResults(
      "results",
      JSON.stringify([
        {
          id: userName.replace(/ /g, "_"),
          userName: userName,
          points: points,
          difficult: difficult,
        },
      ])
    );
  } else {
    let wasUpdate = false;
    for (let i = 0; i < base.length; i++) {
      const el = base[i];

      if (el.id === id) {
        wasUpdate = true;
        el.points = points;
        setLocalResults("results", JSON.stringify(base));
        break;
      }
    }

    if (!wasUpdate) {
      base.push({
        id: userName.replace(/ /g, "_"),
        userName: userName,
        points: points,
        difficult: difficult,
      });
      setLocalResults("results", JSON.stringify(base));
    }
  }
};
