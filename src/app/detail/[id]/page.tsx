import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail({ params }) {
    const db = (await connectDB).db("forum");
    let res = await db
        .collection("post")
        .findOne({ _id: new ObjectId(params.id) });

    return (
        <div className="container">
            <article>
                <header>상세페이지</header>
                <div>{res.title}</div>
                <div>{res.name}</div>
            </article>
        </div>
    );
}
