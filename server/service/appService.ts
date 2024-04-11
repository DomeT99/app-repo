import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Card } from "~/types/components";

export async function tryGetList(): Promise<Card[] | undefined> {
  try {
    const querySnapshot = await getDocs(collection(db, "Application"));
    let appList: Card[] = [];

    if (!querySnapshot.empty) {
      const promises = querySnapshot.docs.map(async (doc: any) => {
        let app: Card = {
          id: doc.id,
          title: doc.data().title,
          platforms: doc.data().platforms,
          description: doc.data().description,
          website: doc.data().website,
          repository: doc.data().repository,
        };

        appList.push(app);
      });

      await Promise.all(promises);
    }

    return appList;
  } catch (e) {
    console.log(e);
  }
}
