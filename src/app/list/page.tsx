import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
    const db = (await connectDB).db("forum");
    let res = await db.collection("post").find().toArray();

    return (
        <div className="container">
            <div className="grid">
                {res.map((item, i) => {
                    return (
                        <Link href={`/detail/${item._id}`}>
                            <article className="list-item" key={item.id}>
                                <h4>{item.title}</h4>
                                <p>{item.name}</p>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
