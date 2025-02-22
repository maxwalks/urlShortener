import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import shortid from "shortid";

export async function addUrl(url: string) {
    try {
        await addDoc(collection(db, "urls"), {
            url,
            shortenedUrl: shortid.generate(),
            date: new Date()
        })
    } catch (error) {
        return {
            error: "An unexpected error occurred"
        }
    }
}