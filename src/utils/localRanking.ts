import { getLocalResults, setLocalResults } from "./storage";

export const localRanking = (
  userName: string,
  points: string,
  difficult: string
) => {
  const base = getLocalResults("results") as any;

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
    for (let i = 0; i < base.length; i++) {
      const el = base[i];
      if (el.id === id) {
        el.points = points;
        setLocalResults("results", JSON.stringify(base));
        break;
      }
    }
    /// dopisac warunek jak jest to nowy gracz
  }
};
