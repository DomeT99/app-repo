import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { App } from "~/types/generic";

export async function tryGetList(): Promise<App[] | undefined> {
  try {
    const querySnapshot = await getDocs(collection(db, "Application"));
    let appList: App[] = [];

    if (!querySnapshot.empty) {
      const promises = querySnapshot.docs.map(async (doc: any) => {
        let app: App = {
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

export async function tryDeleteApp(id: string) {
  try {
    await deleteDoc(doc(db, `/Application/${id}`));
  } catch (e) {
    console.log(e);
  }
}

export async function tryAddApp(app: App) {
  try {
    let result = await addDoc(collection(db, "Application"), app);
    return result.id;
  } catch (e) {
    console.log(e);
  }
}
